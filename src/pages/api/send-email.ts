// pages/api/send-email.ts
import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import { promises as fsPromises } from 'fs';
import nodemailer from 'nodemailer';

export const config = {
  api: {
    bodyParser: false,
  },
};

// Parse form data correctly
const parseForm = async (req: NextApiRequest) => {
  const form = formidable({
    uploadDir: path.join(process.cwd(), '/public/uploads'),
    keepExtensions: true,
    maxFileSize: 10 * 1024 * 1024, // 10 MB
    multiples: true,
  });

  // Ensure upload directory exists
  const uploadDir = path.join(process.cwd(), '/public/uploads');
  if (!fs.existsSync(uploadDir)) {
    await fsPromises.mkdir(uploadDir, { recursive: true });
  }

  return new Promise<{ fields: formidable.Fields; files: formidable.Files }>((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { fields, files } = await parseForm(req);

    const name = (Array.isArray(fields.name) ? fields.name[0] : fields.name) || '';
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

    // Helper to process file
    const processFile = async (file: formidable.File | formidable.File[] | null) => {
      if (!file) return null;
      const fileArray = Array.isArray(file) ? file : [file];
      const fileObj = fileArray[0];
      const filePath = fileObj.filepath;
      const fileName = fileObj.originalFilename || 'upload.jpg';
      const fileBuffer = await fsPromises.readFile(filePath);
      return { filename: fileName, content: fileBuffer };
    };

    const frontAttachment = await processFile(passportFront);
    const backAttachment = await processFile(passportBack);

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
    console.error('Error sending email:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
