"use client";
import * as React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

import Navbar from '@/components/Navbar';
import { useScrollNavigation } from '../hooks/useScrollNavigation';

export default function AboutPage() {
  const pathname = usePathname();
  const router = useRouter();
  const containerRef = useScrollNavigation('/projects', '/');

  return (
    <>
      {/* Головний scroll container з snap */}
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
          <Typography variant='h3' sx={{ marginTop: '-8px' }}>
            <strong>About me</strong>
          </Typography>
          <Typography variant="h4" sx={{ mb: 0.5, fontWeight: 600, position: 'relative', top: -30, lineHeight: 1 }}>
            <span style={{ color: 'var(--blue)' }}>____</span>
          </Typography>
          <Typography variant='h5' sx={{ fontSize: { xs: '1rem', md: '1.5rem' } }}>
            Hi, I’m Anna Boiko, a web developer and designer with a background in <strong>philosophy</strong>, which has shaped my approach to problem-solving and critical thinking. Passionate about innovation and user experience, I’ve developed my skills through <strong>full-stack projects</strong> and <strong>UI/UX design</strong>, blending creativity with technical expertise.
          </Typography>
          <Typography variant='h5' sx={{ fontSize: { xs: '1rem', md: '1.5rem' } }}>
            My experience in <strong>sales</strong> and <strong>administration</strong> has sharpened my communication and organizational skills, allowing me to thrive in <strong>team environments</strong>. I’m eager to collaborate on projects that push boundaries and create accessible, user-friendly web solutions.
          </Typography>
        </Container>

        {/* Секція TOOLBELT - друга snap точка */}
        <Container maxWidth="lg" sx={{
          scrollSnapAlign: 'start',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          pb: 20
        }}>
          <Typography variant='h3' sx={{ marginTop: { xs: 5, md: 10 } }}>
            <strong>TOOLBELT</strong>
          </Typography>
          <Typography variant="h4" sx={{ mb: 0.5, fontWeight: 600, position: 'relative', top: -50, lineHeight: 1 }}>
            <span style={{ color: 'var(--blue)' }}>____</span>
          </Typography>

          {/* ✅ Ряд 1: Бокси 1-2 */}
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 3, mt: -2
          }}>
            {/* Languages */}
            <Box sx={{
              p: { xs: 2, md: 4 }, minHeight: 350, width: '100%', bgcolor: 'var(--blue-light)', borderRadius: 3, border: '2px solid var(--blue)', mt: -5, mb: 6,
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 3,
              transition: 'all 0.3s ease',
              '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 12px 30px rgba(236, 231, 243, 0.5)' }
            }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'var(--text)', mt: 1 }}>Languages</Typography>
              <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', justifyContent: 'center' }}>
                <Typography sx={{ bgcolor: 'var(--blue)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>HTML</Typography>
                <Typography sx={{ bgcolor: 'var(--blue)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>CSS</Typography>
                <Typography sx={{ bgcolor: 'var(--blue)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>JavaScript</Typography>
                <Typography sx={{ bgcolor: 'var(--blue)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>Ruby</Typography>
                <Typography sx={{ bgcolor: 'var(--blue)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>Python</Typography>
                <Typography sx={{ bgcolor: 'var(--blue)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>TypeScript</Typography>
              </Box>
            </Box>

            {/* Languages */}
            <Box sx={{
              p: { xs: 2, md: 4 }, minHeight: 350, width: '100%', bgcolor: 'var(--blue-light)', borderRadius: 3, border: '2px solid var(--blue)', mt: -5, mb: 6,
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 3,
              transition: 'all 0.3s ease',
              '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 12px 30px rgba(236, 231, 243, 0.5)' }
            }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'var(--text)', mt: 1 }}>Frontend</Typography>
              <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', justifyContent: 'center' }}>
                <Typography sx={{ bgcolor: 'var(--blue)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>React</Typography>
                <Typography sx={{ bgcolor: 'var(--blue)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>Next.js</Typography>
                <Typography sx={{ bgcolor: 'var(--blue)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>Tailwind</Typography>
                <Typography sx={{ bgcolor: 'var(--blue)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>Bootstrap</Typography>
                <Typography sx={{ bgcolor: 'var(--blue)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>MUI</Typography>
                <Typography sx={{ bgcolor: 'var(--blue)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>Responsive</Typography>
              </Box>
            </Box>
            {/* Languages */}
            <Box sx={{
              p: { xs: 2, md: 4 }, minHeight: 350, width: '100%', bgcolor: 'var(--blue-light)', borderRadius: 3, border: '2px solid var(--blue)', mt: -5, mb: 6,
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 3,
              transition: 'all 0.3s ease',
              '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 12px 30px rgba(236, 231, 243, 0.5)' }
            }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'var(--text)', mt: 1 }}>Backend</Typography>
              <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', justifyContent: 'center' }}>
                <Typography sx={{ bgcolor: 'var(--blue)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>Ruby on Rails</Typography>
                <Typography sx={{ bgcolor: 'var(--blue)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>ActiveRecord</Typography>
                <Typography sx={{ bgcolor: 'var(--blue)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>OOP</Typography>
                <Typography sx={{ bgcolor: 'var(--blue)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>APIs</Typography>
                <Typography sx={{ bgcolor: 'var(--blue)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>SQL</Typography>
              </Box>
            </Box>
            {/* Languages */}
            <Box sx={{
              p: { xs: 2, md: 4 }, minHeight: 350, width: '100%', bgcolor: 'var(--blue-light)', borderRadius: 3, border: '2px solid var(--blue)', mt: -5, mb: 6,
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 3,
              transition: 'all 0.3s ease',
              '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 12px 30px rgba(236, 231, 243, 0.5)' }
            }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'var(--text)', mt: 1 }}>DevOps</Typography>
              <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', justifyContent: 'center' }}>
                <Typography sx={{ bgcolor: 'var(--blue)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>Git</Typography>
                <Typography sx={{ bgcolor: 'var(--blue)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>GitHub</Typography>
              </Box>
            </Box>
            {/* Languages */}
            <Box sx={{
              p: { xs: 2, md: 4 }, minHeight: 350, width: '100%', bgcolor: 'var(--blue-light)', borderRadius: 3, border: '2px solid var(--blue)', mt: -5, mb: 6,
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 3,
              transition: 'all 0.3s ease',
              '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 12px 30px rgba(236, 231, 243, 0.5)' }
            }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'var(--text)', mt: 1 }}>Data</Typography>
              <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', justifyContent: 'center' }}>
                <Typography sx={{ bgcolor: 'var(--blue)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>Pandas</Typography>
                <Typography sx={{ bgcolor: 'var(--blue)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>Power BI</Typography>
                <Typography sx={{ bgcolor: 'var(--blue)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>Tableau</Typography>
                <Typography sx={{ bgcolor: 'var(--blue)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>Matplotlib</Typography>
                <Typography sx={{ bgcolor: 'var(--blue)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>PostgreSQL</Typography>
              </Box>
            </Box>
            {/* Languages */}
            <Box sx={{
              p: { xs: 2, md: 4 }, minHeight: 350, width: '100%', bgcolor: 'var(--blue-light)', borderRadius: 3, border: '2px solid var(--blue)', mt: -5, mb: 6,
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 3,
              transition: 'all 0.3s ease',
              '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 12px 30px rgba(236, 231, 243, 0.5)' }
            }}>
              {/* Certificates */}
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'var(--text)', mt: 1 }}>Certificates</Typography>

              <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', justifyContent: 'center' }}>
                {/* BA Philosophy */}
                <Tooltip title={<Box sx={{ p: 1, fontSize: '0.875rem' }}><a href="https://partner.kubg.edu.ua" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}><strong>BA Philosophy</strong></a><br />Borys Grinchenko Kyiv Univ, 2020<br />Critical thinking & analysis<br /><a href="/certs/university-diploma.pdf%20.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}><em>Diploma PDF</em></a></Box>} arrow placement="top" componentsProps={{ tooltip: { sx: { bgcolor: 'var(--purple)', color: 'white', maxWidth: 250 } } }}>
                  <Typography sx={{ bgcolor: 'var(--blue)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.1rem' }, border: '2px solid var(--purple)', transition: 'all 0.2s ease', '&:hover': { transform: 'scale(1.1)', bgcolor: 'var(--purple)', cursor: 'pointer' } }}>Philosophy BA (critical thinking)</Typography>
                </Tooltip>
                <Tooltip title={<Box sx={{ p: 1, fontSize: '0.875rem' }}><a href="https://npowercanada.ca" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}><strong>NPower Data Analytics</strong></a><br />Junior Data Analyst Program<br />Python, SQL, Power BI<br /><em>[In Progress]</em></Box>} arrow placement="top" componentsProps={{ tooltip: { sx: { bgcolor: 'var(--purple)', color: 'white', maxWidth: 250 } } }}>
                  <Typography sx={{ bgcolor: 'var(--blue)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)', transition: 'all 0.2s ease', '&:hover': { transform: 'scale(1.1)', bgcolor: 'var(--purple)', cursor: 'pointer' } }}>NPower Data Analytics</Typography>
                </Tooltip>
                <Tooltip title={<Box sx={{ p: 1, fontSize: '0.875rem' }}><a href="https://www.lewagon.com/montreal" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}><strong>Le Wagon Bootcamp</strong></a><br />Full Stack Web Dev<br />Ruby on Rails, JS, SQL<br /><a href="/certs/%20lewagon-fullstack.pdf%20.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}><em>Batch #1698</em></a></Box>} arrow placement="top" componentsProps={{ tooltip: { sx: { bgcolor: 'var(--purple)', color: 'white', maxWidth: 250 } } }}>
                  <Typography sx={{ bgcolor: 'var(--blue)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)', transition: 'all 0.2s ease', '&:hover': { transform: 'scale(1.1)', bgcolor: 'var(--purple)', cursor: 'pointer' } }}>Le Wagon Full Stack</Typography>
                </Tooltip>
                <Tooltip title={<Box sx={{ p: 1, fontSize: '0.875rem' }}><a href="https://firstaid4everyone.ca" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}><strong>First Aid & CPR/AED</strong></a><br />Level C (BL)<br />Valid until 2026<br /><a href="/certs/%20first-aid-cpr.pdf%20.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}><em>Safety Certification</em></a></Box>} arrow placement="top" componentsProps={{ tooltip: { sx: { bgcolor: 'var(--purple)', color: 'white', maxWidth: 250 } } }}>
                  <Typography sx={{ bgcolor: 'var(--blue)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)', transition: 'all 0.2s ease', '&:hover': { transform: 'scale(1.1)', bgcolor: 'var(--purple)', cursor: 'pointer' } }}>First Aid CPR/AED Level C</Typography>
                </Tooltip>
              </Box>
            </Box>
          </Box>
        </Container >


        <Container sx={{
          minHeight: '100vh',
          scrollSnapAlign: 'start',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start'
        }}>
          <Typography variant='h3' sx={{ mt: -6, fontSize: { xs: '1.75rem', md: '2.5rem' } }}>
            <strong>Let&apos;s Create Something Meaningful</strong><span style={{ color: 'var(--blue)' }}>.</span>
          </Typography>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, position: 'relative', top: -16, lineHeight: 1 }}><span style={{ color: 'var(--blue)' }}>____</span></Typography>
          <Typography variant='h5' sx={{ mt: -3, fontSize: { xs: '1rem', md: '1.5rem' } }}>
            As a developer and designer, I believe that the products we create should contribute positively to the world. I aim to work on projects that align with ethical values and have a lasting impact. If your project involves industries such as online gambling, high-interest loans, or companies that harm the environment through pollution like irresponsible corporations, corporate criminals, corporate predators, or greenwashers I may not be the right fit for your team.
            However, if your project focuses on sustainability, diversity, or aims to drive positive change, I would love to collaborate with you.
            Feel free to reach out, and let&apos;s build something impactful together!
          </Typography>
          <Button
            onClick={() => {
              window.location.href = 'mailto:annaboiko1@icloud.com?subject=Let%27s%20work%20together&body=Hi%20Anna,%0A%0AI%20am%20interested%20in%20working%20together.%0A%0ABest%20regards';
            }}
            sx={{
              mt: 2,
              px: 6,
              py: 1,
              mb: 15,
              fontSize: '1.3rem',
              fontWeight: 550,
              width: 300,
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
            Get in touch
          </Button>
        </Container>
      </Box >





    </>
  );
}