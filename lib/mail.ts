// File where the NodeMailer is configured
// This file is used to send emails to the user
// For Password Resets, Account creation, and other notifications
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NEXT_SUPPORT_EMAIL_USERNAME,
    pass: process.env.NEXT_SUPPORT_EMAIL_APP_PASSWORD,
  },
});

type MailOptions = {
  from: string | undefined;
  to: string;
  subject: string;
  html: string;
};

const sendMail = async (mailOptions: MailOptions) => {
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);

    throw new Error("Failed to send email");
  }
};

export const sendFirstPasswordEmail = async (
  email: string,
  token: string
) => {
  const mailOptions = {
    from: process.env.NEXT_SUPPORT_EMAIL_USERNAME,
    to: email,
    subject: "First Password",
    // TODO: Create a template for the email
    html: `${token}`,
  };

  await sendMail(mailOptions);
};
