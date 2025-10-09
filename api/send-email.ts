// /pages/api/send-email.ts
import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs/promises';
import path from 'path';
import { randomBytes } from 'crypto';
import nodemailer from 'nodemailer';

export const config = {
  api: {
    bodyParser: false,
  },
};

// Helper to parse form data safely
const parseForm = async (req: NextApiRequest) => {
  const form = formidable({
    uploadDir: path.join(process.cwd(), '/public/uploads'),
    keepExtensions: true,
    maxFileSize: 10 * 1024 * 1024, // 10 MB
    maxFields: 10,
    filter: (part) => part.name === 'passportFront' || part.name === 'passportBack' || part.mimetype === null,
  });

  // Ensure upload directory exists
  const uploadDir = path.join(process.cwd(), '/public/uploads');
  await fs.mkdir(uploadDir, { recursive: true });

  return new Promise<{ fields: formidable.Fields; files: formidable.Files }>((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { fields, files } = await parseForm(req);

    const name = (Array.isArray(fields.name) ? fields.name[0] : fields.name) || 'Unknown';
    const phone = (Array.isArray(fields.phone) ? fields.phone[0] : fields.phone) || '';
    const email = (Array.isArray(fields.email) ? fields.email[0] : fields.email) || '';
    const message = (Array.isArray(fields.message) ? fields.message[0] : fields.message) || '';

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

    const processFile = async (file: any, fieldName: string) => {
      if (!file) return null;
      const fileArray = Array.isArray(file) ? file : [file];
      const fileObj = fileArray[0];
      if (!fileObj || !fileObj.filepath) return null;

      try {
        const buffer = await fs.readFile(fileObj.filepath);
        return {
          filename: fileObj.originalFilename || `${fieldName}-${randomBytes(4).toString('hex')}.jpg`,
          content: buffer,
        };
      } catch (err) {
        console.error(`Failed to read ${fieldName} file:`, err);
        return null;
      }
    };

    const frontAttachment = await processFile(passportFront, 'passport-front');
    const backAttachment = await processFile(passportBack, 'passport-back');

    if (frontAttachment) attachments.push(frontAttachment);
    if (backAttachment) attachments.push(backAttachment);

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL || 'contact@yourcompany.com',
      subject: `New Contact from ${name}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
      attachments,
    });

    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (err: any) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
