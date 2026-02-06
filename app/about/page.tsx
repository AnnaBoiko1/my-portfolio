"use client";
import * as React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Button from '@mui/material/Button';

const NavigationSeparator = ({ sx }: { sx?: any }) => (
  <Typography sx={sx} component="span">|</Typography>
);

export default function AboutPage() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      {/* Головний scroll container з snap */}
      <Box sx={{ 
        height: '100%', 
        overflowY: 'scroll', 
        scrollSnapType: 'y mandatory',
        scrollBehavior: 'smooth',
        '&::-webkit-scrollbar': { display: 'none' },
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        pb: 5 
      }}>
        {/* Секція "About me" - перша snap точка */}
        <Container maxWidth="lg" sx={{ 
          scrollSnapAlign: 'start',
          minHeight: '100vh',
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center',
          gap: 2,
          pb: 20 // ✅ Така ж відстань перед наступною секцією як у Home
        }}>
          <Typography variant='h3' sx={{marginTop: '-8px'}}>
            <strong>About me</strong>
          </Typography>
          <Typography variant="h4" sx={{ mb: 0.5, fontWeight: 600, position: 'relative', top: -30, lineHeight: 1 }}>
            <span style={{ color: 'var(--blue)' }}>____</span>
          </Typography>
          <Typography variant='h5' sx={{}}>
            Hi, I’m Anna Boiko, a web developer and designer with a background in <strong>philosophy</strong>, which has shaped my approach to problem-solving and critical thinking. Passionate about innovation and user experience, I’ve developed my skills through <strong>full-stack projects</strong> and <strong>UI/UX design</strong>, blending creativity with technical expertise.
          </Typography>
          <Typography variant='h5' sx={{}}>
            My experience in <strong>sales</strong> and <strong>administration</strong> has sharpened my communication and organizational skills, allowing me to thrive in <strong>team environments</strong>. I’m eager to collaborate on projects that push boundaries and create accessible, user-friendly web solutions.
          </Typography>
        </Container>

        {/* Секція TOOLBELT - друга snap точка */}
        <Container maxWidth="md" sx={{ 
          minHeight: '100vh', 
          scrollSnapAlign: 'start', 
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start'
        }}>
          <Box sx={{ my: 4 }}>
            <Typography variant='h3' sx={{}}>
              <strong>TOOLBELT</strong>
            </Typography>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, position: 'relative', top: -16, lineHeight: 1 }}>
              <span style={{ color: 'var(--blue)' }}>____</span>
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',           
                sm: 'repeat(2, 1fr)', 
                md: 'repeat(3, 1fr)'  
              },
              gap: '5%',               
              maxWidth: '100%',
              mb: 4
            }}
          >
            {/* Ваші бокси TOOLBELT - копіюйте сюди повний grid */}
            {/* Бокс 1: Languages */}
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                height: 200,             
                bgcolor: 'var(--red)',
                borderRadius: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 1.5,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 30px rgba(236, 231, 243, 0.5)'
                }
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, color: 'var(--text)' }}>
                Languages
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
                <Typography variant="body2" sx={{ bgcolor: 'var(--blue)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: '1.5rem', border: '3px solid var(--purple)' }}>HTML</Typography>
                <Typography variant="body2" sx={{ bgcolor: 'var(--blue)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: '1.5rem', border: '3px solid var(--purple)' }}>CSS</Typography>
                <Typography variant="body2" sx={{ bgcolor: 'var(--blue)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: '1.5rem', border: '3px solid var(--purple)' }}>JavaScript</Typography>
                <Typography variant="body2" sx={{ bgcolor: 'var(--blue)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: '1.5rem', border: '3px solid var(--purple)' }}>Ruby</Typography>
                <Typography variant="body2" sx={{ bgcolor: 'var(--blue)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: '1.5rem', border: '3px solid var(--purple)' }}>Python</Typography>
                <Typography variant="body2" sx={{ bgcolor: 'var(--blue)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: '1.5rem', border: '3px solid var(--purple)' }}>SQL</Typography>
              </Box>
            </Box>

            {/* Додайте інші бокси сюди аналогічно */}
          </Box>
        </Container>
      </Box>

      {/* ✅ Desktop Navbar (Top fixed) - ІДЕНТИЧНИЙ з Home */}
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
        pt: 6 
      }}>
        <Box />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'center' }}>
          <Button onClick={() => router.push('/')} sx={{ fontSize: '1.4rem', color: pathname === '/' ? 'var(--purple)' : 'var(--text)', textTransform: 'none', minWidth: 0, p: 0, '&:hover': { bgcolor: 'transparent', color: 'var(--purple)' } }}>Home</Button>
          <NavigationSeparator sx={{ fontSize: '1.4rem', color: 'var(--text)', lineHeight: 1 }} />
          <Button onClick={() => router.push('/about')} sx={{ fontSize: '1.4rem', color: pathname === '/about' ? 'var(--purple)' : 'var(--text)', textTransform: 'none', minWidth: 0, p: 0, '&:hover': { bgcolor: 'transparent', color: 'var(--purple)' } }}>About me</Button>
          <NavigationSeparator sx={{ fontSize: '1.4rem', color: 'var(--text)', lineHeight: 1 }} />
          <Button onClick={() => router.push('/projects')} sx={{ fontSize: '1.4rem', color: pathname === '/projects' ? 'var(--purple)' : 'var(--text)', textTransform: 'none', minWidth: 0, p: 0, '&:hover': { bgcolor: 'transparent', color: 'var(--purple)' } }}>Projects</Button>
          <NavigationSeparator sx={{ fontSize: '1.4rem', color: 'var(--text)', lineHeight: 1 }} />
          <Button onClick={() => router.push('/contact')} sx={{ fontSize: '1.4rem', color: pathname === '/contact' ? 'var(--purple)' : 'var(--text)', textTransform: 'none', minWidth: 0, p: 0, '&:hover': { bgcolor: 'transparent', color: 'var(--purple)' } }}>Contacts</Button>
        </Box>
        <Box sx={{ display: 'flex', gap: 3, justifyContent: 'flex-end', alignItems: 'center' }}>
          <Box sx={{ width: 32, height: 32, border: '2px solid currentColor', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--blue)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </Box>
          <Typography sx={{ fontSize: '1.4rem', fontWeight: 'bold' }}>☀</Typography>
          <Typography sx={{ fontSize: '1.4rem', fontWeight: '900', display: 'flex', alignItems: 'center', gap: 0.5 }}>EN <span style={{ fontSize: '0.8em' }}>▼</span></Typography>
        </Box>
      </Box>

      {/* Mobile Navigation (Bottom) - з pb:6 */}
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