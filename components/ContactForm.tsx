"use client";

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useFormStatus } from 'react-dom';
import { useState } from 'react';
import { sendEmail } from '@/app/actions/sendEmail';

export default function ContactForm() {
    const [submitResult, setSubmitResult] = useState<{ success?: string; error?: string } | null>(null);

    async function handleSubmit(formData: FormData) {
        const result = await sendEmail(formData);
        if (result?.error) {
            setSubmitResult({ error: result.error });
        } else {
            setSubmitResult({ success: 'Message sent successfully!' });
            // Optional: Reset form fields here if needed, though native form reset is tricky with Server Actions without JS
        }
    }

    return (
        <form action={handleSubmit}>
            <Typography variant='h5' sx={{ mb: 2 }}>Name</Typography>
            <Box component="input" name="name" required placeholder="Your name" sx={{ width: '100%', padding: '12px', mb: 2, border: '2px solid var(--purple)', borderRadius: '12px', color: 'var(--purple)', backgroundColor: 'var(--blue-light)', '&:focus': { borderColor: 'var(--blue)', outline: 'none' } }} />

            <Typography variant='h5' sx={{ mb: 2 }}>Email</Typography>
            <Box component="input" name="email" required type="email" placeholder="your@email.com" sx={{ width: '100%', padding: '12px', mb: 2, border: '2px solid var(--purple)', borderRadius: '12px', color: 'var(--purple)', backgroundColor: 'var(--blue-light)', '&:focus': { borderColor: 'var(--blue)', outline: 'none' } }} />

            <Typography variant='h5' sx={{ mb: 2 }}>Message</Typography>
            <Box component="textarea" name="message" required placeholder="Enter your message" rows={4} sx={{ width: '100%', padding: '12px', border: '2px solid var(--purple)', borderRadius: '12px', color: 'var(--purple)', backgroundColor: 'var(--blue-light)', fontFamily: 'inherit', fontSize: 'inherit', '&:focus': { borderColor: 'var(--blue)', outline: 'none' } }} />

            <SubmitButton />

            {submitResult && (
                <Typography sx={{ mt: 2, color: submitResult.success ? 'green' : 'red' }}>
                    {submitResult.success || submitResult.error}
                </Typography>
            )}
        </form>
    );
}

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            variant="contained"
            disabled={pending}
            sx={{
                width: '100%',
                mt: 2,
                height: '50px',
                py: 1,
                fontSize: '1.3rem',
                fontWeight: 600,
                color: 'var(--purple)',
                bgcolor: 'transparent',
                backgroundImage: `linear-gradient(45deg, transparent 25%, var(--blue) 25%, var(--blue)50%, transparent 50%, transparent 75%, var(--blue) 75%)`,
                textTransform: 'none',
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                textShadow: '1px 1px 1px rgba(0,0,0,0.3), 0 0 3px rgba(255,255,255,0.4)',
                backgroundSize: '15px 15px',
                position: 'relative',
                backgroundOrigin: 'padding-box',
                borderRadius: 3,
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    borderRadius: 3,
                    padding: '3px',
                    background: 'var(--purple)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    pointerEvents: 'none',
                },
                '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 10px 30px var(--red)',
                    bgcolor: 'var(--blue)',
                    backgroundImage: 'none',
                },
                '&:disabled': {
                    opacity: 0.7,
                    cursor: 'not-allowed'
                }
            }}
        >
            {pending ? 'Sending...' : 'Submit'}
        </Button>
    );
}
