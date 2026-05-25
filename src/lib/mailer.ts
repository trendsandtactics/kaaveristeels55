import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "karthikjungleemara@gmail.com",
    pass: "kfjk gdje mphh bint",
  },
});

export const sendNotificationEmail = async (subject: string, htmlContent: string, attachments?: { filename: string; content: Buffer; contentType: string }[]) => {
  try {
    const info = await transporter.sendMail({
      from: '"Kaaveri Steels" <karthikjungleemara@gmail.com>',
      to: "karthikjungleemara@gmail.com",
      subject,
      html: htmlContent,
      attachments,
    });
    console.log("Email notification sent successfully: %s", info.messageId);
    return info;
  } catch (error) {
    console.error("Failed to send email notification:", error);
  }
};
