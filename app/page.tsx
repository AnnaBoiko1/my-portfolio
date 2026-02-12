"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from '@mui/material/Button';

import { SxProps, Theme } from '@mui/material/styles';

import Navbar from '@/components/Navbar';

export default function Home() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <Box sx={{
        height: '100%', // Fit parent (BackgroundCanva -> Body)
        overflowY: 'scroll',
        scrollSnapType: 'y mandatory',
        scrollBehavior: 'smooth',
        '&::-webkit-scrollbar': { display: 'none' },
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        pb: 5 // Optional padding at bottom for content
      }}>
        <Navbar />
        <Container maxWidth="lg" sx={{
          scrollSnapAlign: 'start',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 4,
          pb: 20 // Shift content up visually
        }}>

          {/* === MOBILE LAYOUT (Original) === */}
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 2 }}>
              <Typography variant="h1" sx={{ fontSize: '3rem', fontWeight: 350, lineHeight: 1.3, mr: 2 }}>
                Hi, my
              </Typography>
              <Box sx={{ mb: 1 }}>
                <Image
                  src="/annaboiko.png"
                  alt="Anna Boiko"
                  width={250} // Increased size
                  height={250}
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </Box>
            </Box>

            <Typography variant="h1" sx={{ fontSize: '3rem', fontWeight: 350, mb: 6, lineHeight: 1 }}>
              name is <strong>Anna</strong><span style={{ color: 'var(--blue)' }}>.</span>
            </Typography>

            <Typography variant="h3" sx={{ fontSize: '1.2rem', color: 'text', mb: 2, maxWidth: 600 }}>
              I&apos;m an independent, creative <strong>full-stack web developer</strong> and designer from Ukraine, currently based in Germany.
            </Typography>
          </Box>

          {/* === DESKTOP LAYOUT === */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', width: '100%', gap: 8 }}>
            {/* Top Row: Name + Image */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              {/* Left Names */}
              <Box>
                <Typography variant="h1" sx={{ fontSize: '7rem', fontWeight: 350, mb: 1, lineHeight: 1.2 }}>
                  Hi, my
                </Typography>
                <Typography variant="h1" sx={{ fontSize: '7rem', fontWeight: 350, lineHeight: 1, whiteSpace: 'nowrap' }}>
                  name is <strong>Anna</strong><span style={{ color: 'var(--blue)' }}>.</span>
                </Typography>
              </Box>
              {/* Right Image */}
              <Box>
                <Image
                  src="/annaboiko.png"
                  alt="Anna Boiko"
                  width={600}
                  height={600}
                  style={{ objectFit: 'contain', maxWidth: '100%', height: 'auto' }}
                  priority
                />
              </Box>
            </Box>
            {/* Bottom Row: Bio */}
            <Box>
              <Typography variant="h3" sx={{ fontSize: '1.5rem', color: 'text', maxWidth: 800 }}>
                I&apos;m an independent, creative <strong>full-stack web developer</strong> and designer from Ukraine, based in Toronto.
              </Typography>
            </Box>
          </Box>
        </Container>

        <Container sx={{
          minHeight: '100vh',
          scrollSnapAlign: 'start',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start'
        }}>
          <Typography variant='h3' sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
            <strong>Let&apos;s work together</strong><span style={{ color: 'var(--blue)' }}>.</span>
          </Typography>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, position: 'relative', top: -16, lineHeight: 1 }}><span style={{ color: 'var(--blue)' }}>____</span></Typography>
          <Typography variant='h5' sx={{ fontSize: { xs: '1rem', md: '1.5rem' } }}>
            From crafting intuitive user experiences to building scalable web systems and dynamic single-page applications, I collaborate with passionate people <strong>to bring ambitious ideas to life</strong>, ensuring they are both innovative and accessible.
          </Typography>

          <Button
            href="/cv.pdf"
            download="Anna-Boiko-CV.pdf"
            sx={{
              mt: 4,
              px: 6,
              py: 1,
              mb: 15,
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              fontWeight: 600,
              color: 'var(--purple)',
              bgcolor: 'transparent',
              textTransform: 'none',
              display: 'inline-flex',
              textShadow: `
                1px 1px 1px rgba(0,0,0,0.3),        
                0 0 3px rgba(255,255,255,0.4)
                `,
              backgroundImage: `linear-gradient(
                45deg, 
                transparent 25%, 
                var(--blue) 25%, 
                var(--blue)50%, 
                transparent 50%, 
                transparent 75%, 
                var(--blue) 75%
              )`,
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
                background: 'linear-gradient(45deg, #9333ea, #8e24aa)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                pointerEvents: 'none',
              },
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 10px 30px var(--red)',
                bgcolor: 'var(--red)',
              }
            }}
          >
            Download résumé
          </Button>
        </Container>
      </Box>


    </>
  );
}
