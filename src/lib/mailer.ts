import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports like 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendNotificationEmail = async (subject: string, htmlContent: string) => {
  if (!process.env.SMTP_USER) {
    console.warn("Mailer skipped: SMTP_USER environment variable is not defined.");
    return null;
  }

  try {
    const info = await transporter.sendMail({
      from: `"Kaaveri Steels" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_NOTIFICATION_EMAIL || process.env.SMTP_USER, // Send to an admin email
      subject,
      html: htmlContent,
    });
    console.log("Email notification sent successfully: %s", info.messageId);
    return info;
  } catch (error) {
    console.error("Failed to send email notification:", error);
  }
};
