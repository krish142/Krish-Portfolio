import nodemailer from 'nodemailer';

const adminmail = process.env.ADMIN_EMAIL || "crishkunwar07@gmail.com";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: parseInt(process.env.SMTP_PORT || '465') === 465,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export interface EmailOptions {
    to: string;
    subject: string;
    html: string;
    text?: string;
}

export async function sendEmail(options: EmailOptions): Promise<void> {
    try {
        await transporter.verify();

        const mailOptions = {
            from: process.env.SMTP_USER,
            to: options.to,
            subject: options.subject,
            html: options.html,
            text: options.text,
        };

        await transporter.sendMail(mailOptions);
        console.log(`Email sent successfully to ${options.to}`);
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error(`Failed to send email: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

export async function sendContactFormEmail(
    name: string,
    email: string,
): Promise<void> {
    const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f6f8;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 30px auto;
            background: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          }
          .header {
            background-color: #0176D3;
            color: #ffffff;
            padding: 24px;
            text-align: center;
          }
          .content {
            padding: 24px;
            color: #333333;
            line-height: 1.6;
          }
          .cta {
            margin: 30px 0;
            text-align: center;
          }
          .cta a {
            background-color: #0176D3;
            color: #ffffff;
            text-decoration: none;
            padding: 12px 20px;
            border-radius: 6px;
            font-weight: bold;
            display: inline-block;
          }
          .social {
            text-align: center;
            margin-top: 20px;
          }
          .social a {
            margin: 0 8px;
            text-decoration: none;
            font-size: 14px;
            color: #0176D3;
            font-weight: bold;
          }
          .footer {
            background-color: #f0f0f0;
            padding: 16px;
            text-align: center;
            font-size: 12px;
            color: #666666;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Thank You for Contacting Me!</h1>
          </div>
  
          <div class="content">
            <p>Hi <strong>${name}</strong>,</p>
  
            <p>
              I’ve received your message from my portfolio contact form.
              Thank you for reaching out — I truly appreciate your interest.
            </p>
  
            <p>
              I’ll review your message and get back to you as soon as possible
              (usually within <strong>24–48 hours</strong>).
            </p>
  
            <p>
              In the meantime, feel free to explore my work and connect with me
              on social platforms below.
            </p>
  
            <div class="cta">
            </div>
  
<div class="social">
  <p><strong>Connect with me:</strong></p>

  <table align="center" cellpadding="0" cellspacing="0" role="presentation">
    <tr>
      <td style="padding: 0 8px;">
        <a href="https://www.linkedin.com/in/krishkunwar/" target="_blank">
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
            width="32"
            height="32"
            style="display:block;"
          />
        </a>
      </td>

      <td style="padding: 0 8px;">
        <a href="https://github.com/krish142" target="_blank">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
            alt="GitHub"
            width="32"
            height="32"
            style="display:block;"
          />
        </a>
      </td>

      <td style="padding: 0 8px;">
        <a href="https://www.instagram.com/krish__k25/" target="_blank">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
            alt="Instagram"
            width="32"
            height="32"
            style="display:block;"
          />
        </a>
      </td>

      <td style="padding: 0 8px;">
        <a href="https://www.facebook.com/Krishkunwar123" target="_blank">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
            alt="Facebook"
            width="32"
            height="32"
            style="display:block;"
          />
        </a>
      </td>
    </tr>
  </table>
</div>
          </div>
  
          <div class="footer">
            <p>— Krish Kunwar</p>
            <p>This is an automated email. Please do not reply.</p>
          </div>
        </div>
      </body>
    </html>
    `;

    await sendEmail({
        to: email,
        subject: "Thanks for contacting my portfolio",
        html,
    });
}

export async function sendContactFormToTeam(
    name: string,
    email: string,
): Promise<void> {
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 800px; margin: 0 auto; padding: 20px; }
            .header { background-color: #0176D3; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
            .content { background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
            table { width: 100%; border-collapse: collapse; }
            td { padding: 12px; border: 1px solid #ddd; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
              <p>Name : ${name}</p>
              <p>Email : ${email}</p>
            </div>
            <div class="content">
              <div class="footer">
                <p>This is an automated notification. Please review and respond accordingly.</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    await Promise.all([
        sendEmail({
            to: adminmail,
            subject: `New Contact Form `,
            html,
        }),
        sendEmail({
            to: "crishkunwar41@gmail.com",
            subject: `New Contact Form`,
            html,
        }),
    ]);
}