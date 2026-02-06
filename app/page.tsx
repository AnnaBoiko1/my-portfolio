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
        height: '100vh', 
        overflowY: 'scroll', 
        scrollSnapType: 'y mandatory',
        scrollBehavior: 'smooth',
        '&::-webkit-scrollbar': { display: 'none' },
        msOverflowStyle: 'none',
        scrollbarWidth: 'none'
      }}>
        <Container maxWidth="md" sx={{ 
          py:8, 
          mt: 4, 
          minHeight:"100vh", 
          scrollSnapAlign: 'start',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center' 
        }}>

          <Container maxWidth="md" sx={{ display:'flex', alignItems: 'flex-end'}}>
            <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '3.5rem' }, fontWeight: 500, mb: 2, lineHeight: 1.3 }}>
              Hi, my 
            </Typography>
            <Box sx={{ mb: 4 }}>
              <Image 
                src="/annaboiko.png"  
                alt="Anna Boiko"
                width={300}
                height={300}
                className=""
                priority
              />
            </Box>
          </Container>
        
          <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '3.5rem' }, fontWeight: 20, mb: 10, lineHeight: 0.5, px:2 }}>
            name is <strong>Anna</strong><span style={{ color: 'var(--blue)' }}>.</span>
          </Typography>

          <Typography variant="h3" sx={{ fontSize: { xs: '1.5rem', md: '1.25rem' }, color: 'text', mb: 2, maxWidth: 600,px:2 }}>
            I&apos;m an independent, creative <strong>full-stack web developer</strong> and designer from Ukraine, based in Toronto.
          </Typography>
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
            Let&apos;s work together<span style={{ color: 'var(--blue)' }}>.</span>
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
              py: 0.5,
              mb: 15,
              fontSize: '1.1rem',
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
              
              borderRadius: 50,
              
              '&::before': {
                content: '""',
                position: 'absolute',
                inset: 0,
                borderRadius: 50, 
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
        display: { xs: 'none', md: 'flex' },
        justifyContent: 'flex-end',
        p: 4,
        gap: 4
      }}>
        <Button onClick={() => router.push('/')} sx={{ fontSize: '1.2rem', color: pathname === '/' ? 'var(--purple)' : 'var(--text)', textTransform: 'none', '&:hover': { bgcolor: 'transparent', color: 'var(--purple)' } }}>Home</Button>
        <NavigationSeparator sx={{ fontSize: '1.2rem', color: 'var(--text)' }} />
        <Button onClick={() => router.push('/about')} sx={{ fontSize: '1.2rem', color: pathname === '/about' ? 'var(--purple)' : 'var(--text)', textTransform: 'none', '&:hover': { bgcolor: 'transparent', color: 'var(--purple)' } }}>About</Button>
        <NavigationSeparator sx={{ fontSize: '1.2rem', color: 'var(--text)' }} />
        <Button onClick={() => router.push('/projects')} sx={{ fontSize: '1.2rem', color: pathname === '/projects' ? 'var(--purple)' : 'var(--text)', textTransform: 'none', '&:hover': { bgcolor: 'transparent', color: 'var(--purple)' } }}>Projects</Button>
        <NavigationSeparator sx={{ fontSize: '1.2rem', color: 'var(--text)' }} />
        <Button onClick={() => router.push('/contact')} sx={{ fontSize: '1.2rem', color: pathname === '/contact' ? 'var(--purple)' : 'var(--text)', textTransform: 'none', '&:hover': { bgcolor: 'transparent', color: 'var(--purple)' } }}>Contact</Button>
      </Box>

      {/* Navigation (Mobile) */}
      <Box sx={{ width: '100%', bottom: 0, position: "fixed", left: 0, right: 0, display: { xs: 'block', md: 'none' } }}>
        <BottomNavigation 
          value={pathname} 
          onChange={(e, newValue) => router.push(newValue)} 
          showLabels 
          sx={{ 
            bgcolor: 'transparent', 
            '& .MuiBottomNavigationAction-root': {
              color: 'var(--text)',  // Сірий для неактивних (включає текст та іконку)
              '& .MuiBottomNavigationAction-label': {
                fontSize: '1.2rem', 
                letterSpacing: '0.05em',
                paddingBottom: 10,
                color: 'inherit'
              }
            },
            '& .MuiBottomNavigationAction-root.Mui-selected': {
              color: 'purple !important',  // Фіолетовий для активної (текст + іконка)
              '& .MuiBottomNavigationAction-label': {
                color: 'purple !important'
              },
              '& svg': {
                color: 'var(--purple) !important'  // Окремо для іконки
              }
            }
          }}
        >
          <BottomNavigationAction label="Home" value="/" />
          <NavigationSeparator sx={{fontSize: '1.2rem', pb: 10}} />
          <BottomNavigationAction label="About" value="/about" />
          <NavigationSeparator sx={{fontSize: '1.2rem', pb: 10}} />
          <BottomNavigationAction label="Projects" value="/projects" />
          <NavigationSeparator sx={{}} />
          <BottomNavigationAction label="Contact" value="/contact" /> 
        </BottomNavigation>
      </Box>
    </>
  );
}
