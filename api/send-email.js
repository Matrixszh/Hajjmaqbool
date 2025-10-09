import formidable from "formidable";
import fs from "fs/promises";
import nodemailer from "nodemailer";
import { randomBytes } from "crypto";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const form = formidable({ multiples: true });
    const [fields, files] = await form.parse(req);

    const name = fields.name?.[0] || fields.name || "Unknown";
    const email = fields.email?.[0] || fields.email || "";
    const phone = fields.phone?.[0] || fields.phone || "";
    const message = fields.message?.[0] || fields.message || "";

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const attachments = [];
    const attachFile = async (file) => {
      if (!file) return;
      const buffer = await fs.readFile(file[0].filepath);
      attachments.push({
        filename:
          file[0].originalFilename ||
          `${randomBytes(4).toString("hex")}.jpg`,
        content: buffer,
      });
    };

    await attachFile(files.passportFront);
    await attachFile(files.passportBack);

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL || "contact@yourcompany.com",
      subject: `📩 New Contact Form Submission from ${name}`,
      html: `
    <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin:auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
      <h2 style="color: #16a34a; text-align:center;">New Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p style="background:#f9f9f9; padding:10px; border-radius:5px;">${message}</p>
      ${attachments.length
          ? `<p><strong>Attachments:</strong> ${attachments
            .map((a) => a.filename)
            .join(", ")}</p>`
          : ""
        }
      <hr style="margin-top:20px;">
      <p style="font-size:12px; color:#666; text-align:center;">Sent automatically from your website contact form.</p>
    </div>
  `,
      attachments,
    });


    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (err) {
    console.error("Send-email error:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
