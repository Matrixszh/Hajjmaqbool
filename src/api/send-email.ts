// /pages/api/send-email.ts
import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const form = new formidable.IncomingForm({
    uploadDir: path.join(process.cwd(), '/public/uploads'),
    keepExtensions: true,
    maxFileSize: 10 * 1024 * 1024, // 10 MB
  });

  // Ensure upload directory exists
  const uploadDir = path.join(process.cwd(), '/public/uploads');
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  try {
    const { fields, files } = await new Promise<{ fields: formidable.Fields; files: formidable.Files }>((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        else resolve({ fields, files });
      });
    });

    const name = Array.isArray(fields.name) ? fields.name[0] : fields.name;
    const phone = Array.isArray(fields.phone) ? fields.phone[0] : fields.phone;
    const email = Array.isArray(fields.email) ? fields.email[0] : fields.email;
    const message = Array.isArray(fields.message) ? fields.message[0] : fields.message;

    const passportFront = files.passportFront;
    const passportBack = files.passportBack;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const attachments = [];

    // Handle passport front
    if (passportFront) {
      const fileArray = Array.isArray(passportFront) ? passportFront : [passportFront];
      for (const file of fileArray) {
        if (file && typeof file === 'object' && 'filepath' in file) {
          const filePath = (file as formidable.File).filepath;
          const fileName = (file as formidable.File).originalFilename || 'passport-front.jpg';
          const fileBuffer = fs.readFileSync(filePath);
          attachments.push({
            filename: fileName,
            content: fileBuffer,
          });
        }
      }
    }

    // Handle passport back
    if (passportBack) {
      const fileArray = Array.isArray(passportBack) ? passportBack : [passportBack];
      for (const file of fileArray) {
        if (file && typeof file === 'object' && 'filepath' in file) {
          const filePath = (file as formidable.File).filepath;
          const fileName = (file as formidable.File).originalFilename || 'passport-back.jpg';
          const fileBuffer = fs.readFileSync(filePath);
          attachments.push({
            filename: fileName,
            content: fileBuffer,
          });
        }
      }
    }

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'your-email@example.com',
      subject: `New Contact from ${name}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
      attachments,
    });

    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (err: any) {
    console.error('Error sending email:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
