'use server';

import nodemailer from 'nodemailer';

export async function sendEmail(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
        return { error: 'Please fill in all fields.' };
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail', // You can use other services or generic SMTP config
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: email, // Sender address (from the form)
        to: 'annaboiko1@icloud.com', // Your email
        subject: `New message from ${name}`,
        text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
        html: `
      <h3>New message from Project Portfolio</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: 'Email sent successfully!' };
    } catch (error) {
        console.error('Error sending email:', error);
        if (error instanceof Error) {
            console.error(error.message);
        }
        return { error: 'Failed to send email. Please try again later.' };
    }
}
