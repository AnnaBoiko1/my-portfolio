"use client";
import * as React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Grid from '@mui/material/Grid';

const NavigationSeparator = ({ sx }: { sx?: any }) => (
  <Typography sx={sx} component="span">|</Typography>
);

export default function ProjectsPage() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <>
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
          <Typography variant='h3' sx={{ marginTop: { xs: '-8px', md: 15 } }}>
            <strong>Projects</strong>
          </Typography>
          <Typography variant="h4" sx={{ mb: 0.5, fontWeight: 600, position: 'relative', top: { xs: -30, md: -20 }, lineHeight: 1 }}>
            <span style={{ color: 'var(--blue)' }}>____</span>
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'flex-start', gap: 4 }}>
            <Box sx={{ flex: 1, maxWidth: { md: 600 } }}>
              <Grid container spacing={0} columns={{ xs: 6, md: 6 }}>  {/* gap: 0 = spacing={0} */}
                {[
                  '/ping_it_1.png', '/ping_it_2.png', '/ping_it_3.png',
                  '/ping_it_4.png', '/ping_it_5.png', '/ping_it_6.png'
                ].map((src, i) => (
                  <Grid size={{ xs: 2, md: 2 }} key={i}>  {/* xs:2 = 3 фото/ряд (6/2=3) */}
                    <Image
                      src={src}
                      alt="Ping It Project"
                      width={200} height={200}  // Фіксований розмір
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                      priority
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Текст ПРАВОРУЧ */}
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography variant='h4'>
                <strong>Ping It</strong>
              </Typography>
              <Typography variant='h5' sx={{ mt: 2 }}>
                A responsive web app for table tennis enthusiasts to discover and book nearby tables, manage reservations, and connect with local players in real time. <br />Built with <strong>React</strong> and <strong>Ruby on Rails</strong>, it integrates <strong>APIs</strong> for live map updates and seamless match coordination. I implemented user <strong>authentication</strong>, <strong>UI/UX improvements</strong>, and <strong>mobile-first design</strong> to enhance accessibility and user engagement.
              </Typography>
            </Box>
          </Box>

          {/* feedback */}
          {/* btn link */}

        </Container>
        {/* Секція  - 2 snap точка */}
        <Container maxWidth="lg" sx={{
          scrollSnapAlign: 'start',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 2,
          pb: 20 // ✅ Така ж відстань перед наступною секцією як у Home
        }}>

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
          <Typography variant='h5' sx={{}}>
            <strong>project2</strong>
          </Typography>
          <Typography variant='h5' sx={{}}>
            Info
          </Typography>

          {/* feedback */}
          {/* btn link */}

        </Container>
        {/* Секція  - 3 snap точка */}
        <Container maxWidth="lg" sx={{
          scrollSnapAlign: 'start',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 2,
          pb: 20 // ✅ Така ж відстань перед наступною секцією як у Home
        }}>
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

          <Typography variant='h5' sx={{}}>
            <strong>projrct3</strong>
          </Typography>
          <Typography variant='h5' sx={{}}>
            Info
          </Typography>

          {/* feedback */}
          {/* btn link */}

        </Container>
        {/* Секція  - 4 snap точка */}

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

          <Typography variant='h5' sx={{}}>
            <strong>projrct3</strong>
          </Typography>
          <Typography variant='h5' sx={{}}>
            Info
          </Typography>

          {/* feedback */}
          {/* btn link */}

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
          <Button onClick={() => router.push('/contact')} sx={{ fontSize: '1.4rem', color: pathname === '/contact' ? 'var(--purple)' : 'var(--text)', textTransform: 'none', minWidth: 0, p: 0, '&:hover': { bgcolor: 'transparent', color: 'var(--purple)' } }}>Contact</Button>
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
        <Button onClick={() => router.push('/contact')} sx={{ fontSize: '1.2rem', fontWeight: 400, color: pathname === '/contact' ? 'var(--purple)' : 'var(--text)', textTransform: 'none', minWidth: 0, p: 0 }}>Contact</Button>
      </Box>
    </>
  );
}