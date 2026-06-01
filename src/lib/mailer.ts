import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "kaaverienquiry@gmail.com",
    pass: "ajbe pywr qzow lxwi",
  },
});

export const sendNotificationEmail = async (subject: string, htmlContent: string, attachments?: { filename: string; content: Buffer; contentType: string }[]) => {
  try {
    const info = await transporter.sendMail({
      from: '"Kaaveri Steels" <kaaverienquiry@gmail.com>',
      to: "kaaverienquiry@gmail.com",
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
