"use client";
import * as React from 'react';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { getCalApi } from "@calcom/embed-react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from 'next/link';

import Navbar from '@/components/Navbar';
import ContactForm from "@/components/ContactForm";
import { useLanguage } from '@/context/LanguageContext';
import { useScrollNavigation } from '../hooks/useScrollNavigation';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const containerRef = useScrollNavigation(null, '/projects');
  const { t } = useLanguage();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { "styles": { "branding": { "brandColor": "#000000" } }, "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, []);
  return (
    <>
      <Box ref={containerRef} sx={{
        height: '100%',
        overflowY: 'scroll',
        scrollSnapType: 'y mandatory',
        scrollBehavior: 'smooth',
        '&::-webkit-scrollbar': { display: 'none' },
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        pb: 5
      }}>
        <Navbar />
        {/* Секція  - перша snap точка */}
        <Container maxWidth="lg" sx={{
          scrollSnapAlign: 'start',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 2,
          pb: 20 // ✅ Така ж відстань перед наступною секцією як у Home
        }}>

          {/* ✅ 2 КОНТЕНТ КОЛОНКИ як у Bootstrap */}
          <Grid container spacing={8} sx={{ px: { xs: 2, md: 12 } }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{
                width: 450,      // ✅ ФІКСОВАНА ширина
                maxWidth: '100%', // ✅ Responsive
                mx: 0            // ✅ Left alignment
              }}>
                <Typography variant='h3' sx={{ marginTop: { xs: '-8px', md: 15 }, mb: 3 }}>
                  <strong>{t('contact_title')}</strong>
                </Typography>
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, position: 'relative', top: { xs: -30, md: -20 }, lineHeight: 1 }}>
                  <span style={{ color: 'var(--blue)' }}>____</span>
                </Typography>
                <Box sx={{ textAlign: 'start' }}>
                  <Typography variant='h4' sx={{ mb: 1 }}>
                    Anna Boiko
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'flex-start' }}>
                  <Link href="mailto:annaboiko1@icloud.com" style={{ color: 'var(--purple)' }}>
                    <Typography variant='h4' sx={{
                      mb: 1,
                      fontSize: { xs: '1.4rem', md: '2.125rem' }, // ✅ Fit on screen
                      textDecoration: 'underline',
                      textDecorationThickness: '2px',
                      textUnderlineOffset: '4px',
                      '&:hover': {
                        color: 'var(--blue)',
                        textDecorationColor: 'var(--blue)',
                        backgroundImage: 'none',
                      }
                    }}>
                      annaboiko1@icloud.com
                    </Typography>
                  </Link>
                  <Typography
                    variant='h6'
                    sx={{
                      mt: 0.1,
                      marginLeft: '8px',
                      width: '120px', // ✅ Increased fixed width
                      display: 'inline-block', // ✅ Enforce block behavior for width
                      whiteSpace: 'nowrap', // ✅ Prevent wrapping
                      fontSize: '0.8rem',
                      color: 'var(--blue)',
                      cursor: 'pointer',
                      textAlign: 'left', // Ensure text starts from left
                      '&:hover': {
                        opacity: 0.7,
                        color: 'var(--copy-email-hover)'
                      }
                    }}
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText('annaboiko1@icloud.com');
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2000);
                      } catch (err) {
                        const textArea = document.createElement('textarea');
                        textArea.value = 'annaboiko1@icloud.com';
                        document.body.appendChild(textArea);
                        textArea.select();
                        document.execCommand('copy');
                        document.body.removeChild(textArea);
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2000);
                      }
                    }}
                  >
                    {copied ? t('contact_copied') : t('contact_copy_email')}
                  </Typography>
                </Box>

                <Typography variant='h4' sx={{ mb: 4 }}>
                  {t('contact_based_in')}
                </Typography>

                {/* Cal.com  */}
                <Box
                  data-cal-link="annaboiko/30min"
                  data-cal-namespace="30min"
                  data-cal-config='{"layout":"month_view"}'
                  sx={{
                    width: '100%',
                    maxWidth: '450px',
                    height: '60px',
                    py: 1,
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    color: 'var(--btn-text)',
                    bgcolor: 'transparent',
                    backgroundImage: `linear-gradient(45deg, transparent 25%, var(--btn-stripes) 25%, var(--btn-stripes) 50%, transparent 50%, transparent 75%, var(--btn-stripes) 75%)`,
                    textTransform: 'none',
                    display: 'inline-flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textShadow: '1px 1px 1px rgba(0,0,0,0.3), 0 0 3px rgba(255,255,255,0.4)',
                    backgroundSize: '15px 15px',
                    cursor: 'pointer',
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
                      bgcolor: 'var(--btn-hover-bg)',
                      backgroundImage: 'none',
                      zIndex: 10
                    }
                  }}
                >
                  <Typography variant='h5' sx={{ fontWeight: 600, fontSize: { xs: '1.3rem', sm: '1.6rem', md: '1.9rem' }, whiteSpace: 'nowrap' }}>
                    {t('contact_schedule_appointment')}
                  </Typography>
                </Box>

                {/* Find me on */}
                <Box sx={{ mt: 6, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Typography variant='h5' sx={{ mb: 0.5, opacity: 0.8, fontWeight: 600 }}>
                    {t('contact_find_me_on')}
                  </Typography>
                </Box>


                <Box sx={{ display: 'flex', gap: 0.1, justifyContent: 'center' }}>
                  <Link href="https://github.com/AnnaBoiko1" target="_blank" rel="noopener noreferrer">
                    <Box sx={{
                      width: 48, height: 48,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--purple)',
                      '&:hover': {
                        color: 'var(--blue)',
                        backgroundImage: 'none',
                      }
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.058-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.176 2.873.171 3.176.768.84 1.239 1.91 1.239 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </Box>
                  </Link>
                  <Link href="https://www.linkedin.com/in/anna-boiko1/" target="_blank" rel="noopener noreferrer">
                    <Box sx={{
                      width: 48, height: 48,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--purple)',
                      '&:hover': {
                        color: 'var(--blue)',
                        backgroundImage: 'none',
                      }
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </Box>
                  </Link>
                </Box>


              </Box>
            </Grid>

            {/* ПРАВА КОЛОНКА - Форма (Desktop Only) */}
            <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box sx={{ p: 4, borderRadius: 10, bgcolor: 'transparent', mt: 15 }}>
                <ContactForm />
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* NEW MOBILE FORM SECTION */}
        <Container maxWidth="lg" sx={{
          display: { xs: 'flex', md: 'none' },
          scrollSnapAlign: 'start',
          minHeight: '100vh',
          flexDirection: 'column',
          justifyContent: 'center',
          pb: 20
        }}>
          <Box sx={{ p: 2, borderRadius: 10, bgcolor: 'transparent' }}>
            <ContactForm />
          </Box>
        </Container>
      </Box>


    </>

  );
}
