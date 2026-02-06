"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from '@mui/material/Button';

const NavigationSeparator = ({ sx }: { sx?: any }) => (
  <Typography sx={sx} component="span">|</Typography>
);

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
            <Box sx={{ display:'flex', alignItems: 'flex-end', mb: 2 }}>
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

            <Typography variant="h3" sx={{ fontSize: '1.5rem', color: 'text', mb: 2, maxWidth: 600 }}>
              I&apos;m an independent, creative <strong>full-stack web developer</strong> and designer from Ukraine, currently based in Germany.
            </Typography>
          </Box>


          {/* === DESKTOP LAYOUT (New Request) === */}
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
                I&apos;m an independent, creative <strong>full-stack web developer</strong> and designer from Ukraine, currently based in Germany.
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
          <Typography variant='h3' sx={{}}>
            <strong>Let&apos;s work together</strong><span style={{ color: 'var(--blue)' }}>.</span>
          </Typography>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, position: 'relative', top: -16, lineHeight: 1    }}><span style={{ color: 'var(--blue)' }}>____</span></Typography>
          <Typography variant='h5' sx={{}}>
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
              fontSize: '1.3rem',
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
              
              borderRadius: 3, // Adjusted roundness
              
              '&::before': {
                content: '""',
                position: 'absolute',
                inset: 0,
                borderRadius: 3, // Match parent border-radius
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

      {/* Top Navbar (Desktop) */}
      <Box sx={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 10,
        display: { xs: 'none', md: 'grid' },
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        p: 4,
        pt: 6 // Extra top padding
      }}>
        {/* Left Spacer */}
        <Box />

        {/* Center Links */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'center' }}>
          <Button onClick={() => router.push('/')} sx={{ fontSize: '1.4rem', color: pathname === '/' ? 'var(--purple)' : 'var(--text)', textTransform: 'none', minWidth: 0, p: 0, '&:hover': { bgcolor: 'transparent', color: 'var(--purple)' } }}>Home</Button>
          <NavigationSeparator sx={{ fontSize: '1.4rem', color: 'var(--text)', lineHeight: 1 }} />
          <Button onClick={() => router.push('/about')} sx={{ fontSize: '1.4rem', color: pathname === '/about' ? 'var(--purple)' : 'var(--text)', textTransform: 'none', minWidth: 0, p: 0, '&:hover': { bgcolor: 'transparent', color: 'var(--purple)' } }}>About me</Button>
          <NavigationSeparator sx={{ fontSize: '1.4rem', color: 'var(--text)', lineHeight: 1 }} />
          <Button onClick={() => router.push('/projects')} sx={{ fontSize: '1.4rem', color: pathname === '/projects' ? 'var(--purple)' : 'var(--text)', textTransform: 'none', minWidth: 0, p: 0, '&:hover': { bgcolor: 'transparent', color: 'var(--purple)' } }}>Projects</Button>
          <NavigationSeparator sx={{ fontSize: '1.4rem', color: 'var(--text)', lineHeight: 1 }} />
          <Button onClick={() => router.push('/contact')} sx={{ fontSize: '1.4rem', color: pathname === '/contact' ? 'var(--purple)' : 'var(--text)', textTransform: 'none', minWidth: 0, p: 0, '&:hover': { bgcolor: 'transparent', color: 'var(--purple)' } }}>Contacts</Button>
        </Box>

        {/* Right Icons */}
        <Box sx={{ display: 'flex', gap: 3, justifyContent: 'flex-end', alignItems: 'center' }}>
          {/* User Icon Placeholder */}
          <Box sx={{ width: 32, height: 32, border: '2px solid currentColor', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--blue)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </Box>
           {/* Theme Toggle Placeholder */}
           <Typography sx={{ fontSize: '1.4rem', fontWeight: 'bold' }}>☀</Typography>
           <Typography sx={{ fontSize: '1.4rem', fontWeight: '900', display: 'flex', alignItems: 'center', gap: 0.5 }}>EN <span style={{ fontSize: '0.8em' }}>▼</span></Typography>
        </Box>
      </Box>

      {/* Navigation (Mobile) */}
      <Box sx={{ width: '100%', bottom: 0, position: "fixed", left: 0, right: 0, display: { xs: 'flex', md: 'none' }, justifyContent: 'center', pb: 6, alignItems: 'center', gap: 2 }}>
        <Button onClick={() => router.push('/')} sx={{ fontSize: '1.2rem', fontWeight: 400, color: pathname === '/' ? 'var(--purple)' : 'var(--text)', textTransform: 'none', minWidth: 0, p: 0 }}>Home</Button>
        <NavigationSeparator sx={{ fontSize: '1.2rem', fontWeight: 300, color: 'var(--text)', lineHeight: 1 }} />
        <Button onClick={() => router.push('/about')} sx={{ fontSize: '1.2rem', fontWeight: 400, color: pathname === '/about' ? 'var(--purple)' : 'var(--text)', textTransform: 'none', minWidth: 0, p: 0 }}>About me</Button>
        <NavigationSeparator sx={{ fontSize: '1.2rem', fontWeight: 300, color: 'var(--text)', lineHeight: 1 }} />
        <Button onClick={() => router.push('/projects')} sx={{ fontSize: '1.2rem', fontWeight: 400, color: pathname === '/projects' ? 'var(--purple)' : 'var(--text)', textTransform: 'none', minWidth: 0, p: 0 }}>Projects</Button>
        <NavigationSeparator sx={{ fontSize: '1.2rem', fontWeight: 300, color: 'var(--text)', lineHeight: 1 }} />
        <Button onClick={() => router.push('/contact')} sx={{ fontSize: '1.2rem', fontWeight: 400, color: pathname === '/contact' ? 'var(--purple)' : 'var(--text)', textTransform: 'none', minWidth: 0, p: 0 }}>Contacts</Button>
      </Box>
    </>
  );
}
