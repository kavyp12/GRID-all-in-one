import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT || 3001;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error('[server] SMTP connection error:', error);
  } else {
    console.log('[server] SMTP transporter ready');
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, service, message } = req.body;

    const mailOptions = {
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      subject: `[GRID Studio] New lead from ${name} (${company || 'No Company'})`,
      text: `GRID Studio Contact Form Submission\n\nName: ${name}\nCompany: ${company || 'N/A'}\nEmail: ${email}\nService Interested In: ${service}\n\nProject Details/Message:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 8px; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #000; padding-bottom: 10px;">GRID Studio - New Lead</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Company:</strong> ${company || 'N/A'}</p>
          <p><strong>Service:</strong> <span style="background: #f0f0f0; padding: 4px 8px; border-radius: 4px;">${service}</span></p>
          
          <h3 style="margin-top: 20px; color: #555;">Project Details:</h3>
          <div style="background: #fafafa; padding: 15px; border-left: 4px solid #000; border-radius: 4px; white-space: pre-wrap;">${message}</div>
          
          <p style="margin-top: 30px; font-size: 12px; color: #999;">This email was automatically generated from the GRID Growth Studio contact form.</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`[server] listening on http://localhost:${PORT}`);
});
