// api/send-email.js
import formidable from "formidable";
import nodemailer from "nodemailer";
import fs from "fs/promises";
import { randomBytes } from "crypto";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  // Allow only POST
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    // Parse multipart/form-data
    const form = formidable({ multiples: true });
    const [fields, files] = await form.parse(req);

    const name = fields.name?.[0] || fields.name || "Unknown";
    const email = fields.email?.[0] || fields.email || "";
    const phone = fields.phone?.[0] || fields.phone || "";
    const message = fields.message?.[0] || fields.message || "";

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Attach files if available
    const attachments = [];
    const addFile = async (file) => {
      if (!file) return;
      const buffer = await fs.readFile(file[0].filepath);
      attachments.push({
        filename:
          file[0].originalFilename ||
          `${randomBytes(4).toString("hex")}.jpg`,
        content: buffer,
      });
    };

    await addFile(files.passportFront);
    await addFile(files.passportBack);

    // Send the email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL || "contact@yourcompany.com",
      subject: `New Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      attachments,
    });

    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (err) {
    console.error("Send-email error:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
