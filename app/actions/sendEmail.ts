'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
    const name = formData.get('name') as string;
    const senderEmail = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name || !senderEmail || !message) {
        return { error: 'Please fill in all fields.' };
    }

    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'annaboiko1@icloud.com',
            subject: `PORTFOLIO: New message from ${name}`,
            replyTo: senderEmail,
            text: `Name: ${name}\nEmail: ${senderEmail}\nMessage: ${message}`,
            html: `
              <h3>New message from Project Portfolio</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${senderEmail}</p>
              <p><strong>Message:</strong> ${message}</p>
            `,
        });

        return { success: 'Email sent successfully!' };
    } catch (error) {
        console.error('Error sending email:', error);
        if (error instanceof Error) {
            console.error(error.message);
        }
        return { error: 'Failed to send email. Please try again later.' };
    }
}
