// email-template.ts

export function welcomeEmailTemplate(): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {
                font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
                color: #333;
            }
            .container {
                background-color: #ffffff;
                margin: 0 auto;
                padding: 40px;
                width: 90%;
                max-width: 600px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .header {
                background-color: #48a1a0;
                color: #ffffff;
                padding: 20px;
                font-size: 24px;
                text-align: center;
            }
            .content {
                padding: 20px;
                text-align: center;
                line-height: 1.6;
            }
            .footer {
                margin-top: 20px;
                padding: 20px;
                background-color: #f0f0f0;
                text-align: center;
                font-size: 12px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                Welcome to the Medical System Management App
            </div>
            <div class="content">
                <p>Dear user,</p>
                <p>Thank you for signing up for our Medical System Management App. This platform is designed to streamline medical procedures, enhance patient care, and optimize the day-to-day operations of healthcare facilities as part of our final study project.</p>
                <p>Our app offers a comprehensive suite of tools to manage patient records, appointments, and medical billing, ensuring that healthcare professionals can focus on delivering quality care.</p>
                <p>We're excited to have you join us on this journey to revolutionize healthcare management. Stay tuned for updates and features that will further enhance your experience.</p>
                <p>Best regards,</p>
                <p>The Medical System Management Team</p>
            </div>
            <div class="footer">
                This email was sent to you as part of your registration to the Medical System Management App. If you have any questions, feel free to contact our support team.
            </div>
        </div>
    </body>
    </html>
  `;
}
