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
import { useLanguage } from '@/context/LanguageContext';
import { useScrollNavigation } from '../hooks/useScrollNavigation';

export default function AboutPage() {
  const pathname = usePathname();
  const router = useRouter();
  const containerRef = useScrollNavigation('/projects', '/');
  const { t } = useLanguage();

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
            <strong>{t('about_about_me')}</strong>
          </Typography>
          <Typography variant="h4" sx={{ mb: 0.5, fontWeight: 600, position: 'relative', top: -30, lineHeight: 1 }}>
            <span style={{ color: 'var(--blue)' }}>____</span>
          </Typography>
          <Typography variant='h5' sx={{ fontSize: { xs: '1rem', md: '1.5rem' } }} dangerouslySetInnerHTML={{ __html: t('about_bio_1') }} />
          <Typography variant='h5' sx={{ fontSize: { xs: '1rem', md: '1.5rem' } }} dangerouslySetInnerHTML={{ __html: t('about_bio_2') }} />
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
            <strong>{t('about_toolbelt')}</strong>
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
              p: { xs: 2, md: 4 }, minHeight: 350, width: '100%', bgcolor: 'var(--toolbelt-cat-bg)', borderRadius: 3, border: '2px solid var(--blue)', mt: -5, mb: 6,
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 3,
              transition: 'all 0.3s ease',
              '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 12px 30px rgba(236, 231, 243, 0.5)' }
            }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'var(--text)', mt: 1 }}>{t('about_languages')}</Typography>
              <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', justifyContent: 'center' }}>
                <Typography sx={{ bgcolor: 'var(--toolbelt-item-bg)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>HTML</Typography>
                <Typography sx={{ bgcolor: 'var(--toolbelt-item-bg)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>CSS</Typography>
                <Typography sx={{ bgcolor: 'var(--toolbelt-item-bg)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>JavaScript</Typography>
                <Typography sx={{ bgcolor: 'var(--toolbelt-item-bg)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>Ruby</Typography>
                <Typography sx={{ bgcolor: 'var(--toolbelt-item-bg)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>Python</Typography>
                <Typography sx={{ bgcolor: 'var(--toolbelt-item-bg)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>TypeScript</Typography>
              </Box>
            </Box>

            {/* Languages */}
            <Box sx={{
              p: { xs: 2, md: 4 }, minHeight: 350, width: '100%', bgcolor: 'var(--toolbelt-cat-bg)', borderRadius: 3, border: '2px solid var(--blue)', mt: -5, mb: 6,
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 3,
              transition: 'all 0.3s ease',
              '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 12px 30px rgba(236, 231, 243, 0.5)' }
            }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'var(--text)', mt: 1 }}>{t('about_frontend')}</Typography>
              <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', justifyContent: 'center' }}>
                <Typography sx={{ bgcolor: 'var(--toolbelt-item-bg)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>React</Typography>
                <Typography sx={{ bgcolor: 'var(--toolbelt-item-bg)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>Next.js</Typography>
                <Typography sx={{ bgcolor: 'var(--toolbelt-item-bg)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>Tailwind</Typography>
                <Typography sx={{ bgcolor: 'var(--toolbelt-item-bg)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>Bootstrap</Typography>
                <Typography sx={{ bgcolor: 'var(--toolbelt-item-bg)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>MUI</Typography>
                <Typography sx={{ bgcolor: 'var(--toolbelt-item-bg)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>Responsive</Typography>
              </Box>
            </Box>
            {/* Languages */}
            <Box sx={{
              p: { xs: 2, md: 4 }, minHeight: 350, width: '100%', bgcolor: 'var(--toolbelt-cat-bg)', borderRadius: 3, border: '2px solid var(--blue)', mt: -5, mb: 6,
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 3,
              transition: 'all 0.3s ease',
              '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 12px 30px rgba(236, 231, 243, 0.5)' }
            }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'var(--text)', mt: 1 }}>{t('about_backend')}</Typography>
              <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', justifyContent: 'center' }}>
                <Typography sx={{ bgcolor: 'var(--toolbelt-item-bg)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>Ruby on Rails</Typography>
                <Typography sx={{ bgcolor: 'var(--toolbelt-item-bg)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>ActiveRecord</Typography>
                <Typography sx={{ bgcolor: 'var(--toolbelt-item-bg)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>OOP</Typography>
                <Typography sx={{ bgcolor: 'var(--toolbelt-item-bg)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>APIs</Typography>
                <Typography sx={{ bgcolor: 'var(--toolbelt-item-bg)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>SQL</Typography>
              </Box>
            </Box>
            {/* Languages */}
            <Box sx={{
              p: { xs: 2, md: 4 }, minHeight: 350, width: '100%', bgcolor: 'var(--toolbelt-cat-bg)', borderRadius: 3, border: '2px solid var(--blue)', mt: -5, mb: 6,
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 3,
              transition: 'all 0.3s ease',
              '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 12px 30px rgba(236, 231, 243, 0.5)' }
            }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'var(--text)', mt: 1 }}>{t('about_devops')}</Typography>
              <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', justifyContent: 'center' }}>
                <Typography sx={{ bgcolor: 'var(--toolbelt-item-bg)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>Git</Typography>
                <Typography sx={{ bgcolor: 'var(--toolbelt-item-bg)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>GitHub</Typography>
              </Box>
            </Box>
            {/* Languages */}
            <Box sx={{
              p: { xs: 2, md: 4 }, minHeight: 350, width: '100%', bgcolor: 'var(--toolbelt-cat-bg)', borderRadius: 3, border: '2px solid var(--blue)', mt: -5, mb: 6,
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 3,
              transition: 'all 0.3s ease',
              '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 12px 30px rgba(236, 231, 243, 0.5)' }
            }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'var(--text)', mt: 1 }}>{t('about_data')}</Typography>
              <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', justifyContent: 'center' }}>
                <Typography sx={{ bgcolor: 'var(--toolbelt-item-bg)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>Pandas</Typography>
                <Typography sx={{ bgcolor: 'var(--toolbelt-item-bg)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>Power BI</Typography>
                <Typography sx={{ bgcolor: 'var(--toolbelt-item-bg)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>Tableau</Typography>
                <Typography sx={{ bgcolor: 'var(--toolbelt-item-bg)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>Matplotlib</Typography>
                <Typography sx={{ bgcolor: 'var(--toolbelt-item-bg)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)' }}>PostgreSQL</Typography>
              </Box>
            </Box>
            {/* Languages */}
            <Box sx={{
              p: { xs: 2, md: 4 }, minHeight: 350, width: '100%', bgcolor: 'var(--toolbelt-cat-bg)', borderRadius: 3, border: '2px solid var(--blue)', mt: -5, mb: 6,
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 3,
              transition: 'all 0.3s ease',
              '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 12px 30px rgba(236, 231, 243, 0.5)' }
            }}>
              {/* Certificates */}
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'var(--text)', mt: 1 }}>{t('about_certificates')}</Typography>

              <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', justifyContent: 'center' }}>
                {/* BA Philosophy */}
                <Tooltip title={<Box sx={{ p: 1, fontSize: '0.875rem' }} dangerouslySetInnerHTML={{ __html: t('cert_philo_tooltip') }} />} arrow placement="top" componentsProps={{ tooltip: { sx: { bgcolor: 'var(--purple)', color: 'white', maxWidth: 250 } } }}>
                  <Typography sx={{ bgcolor: 'var(--toolbelt-item-bg)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.1rem' }, border: '2px solid var(--purple)', transition: 'all 0.2s ease', '&:hover': { transform: 'scale(1.1)', bgcolor: 'var(--purple)', cursor: 'pointer' } }}>{t('cert_philo_chip')}</Typography>
                </Tooltip>
                <Tooltip title={<Box sx={{ p: 1, fontSize: '0.875rem' }} dangerouslySetInnerHTML={{ __html: t('cert_npower_tooltip') }} />} arrow placement="top" componentsProps={{ tooltip: { sx: { bgcolor: 'var(--purple)', color: 'white', maxWidth: 250 } } }}>
                  <Typography sx={{ bgcolor: 'var(--toolbelt-item-bg)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)', transition: 'all 0.2s ease', '&:hover': { transform: 'scale(1.1)', bgcolor: 'var(--purple)', cursor: 'pointer' } }}>{t('cert_npower_chip')}</Typography>
                </Tooltip>
                <Tooltip title={<Box sx={{ p: 1, fontSize: '0.875rem' }} dangerouslySetInnerHTML={{ __html: t('cert_lewagon_tooltip') }} />} arrow placement="top" componentsProps={{ tooltip: { sx: { bgcolor: 'var(--purple)', color: 'white', maxWidth: 250 } } }}>
                  <Typography sx={{ bgcolor: 'var(--toolbelt-item-bg)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)', transition: 'all 0.2s ease', '&:hover': { transform: 'scale(1.1)', bgcolor: 'var(--purple)', cursor: 'pointer' } }}>{t('cert_lewagon_chip')}</Typography>
                </Tooltip>
                <Tooltip title={<Box sx={{ p: 1, fontSize: '0.875rem' }} dangerouslySetInnerHTML={{ __html: t('cert_firstaid_tooltip') }} />} arrow placement="top" componentsProps={{ tooltip: { sx: { bgcolor: 'var(--purple)', color: 'white', maxWidth: 250 } } }}>
                  <Typography sx={{ bgcolor: 'var(--toolbelt-item-bg)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: { xs: '1rem', md: '1.2rem' }, border: '2px solid var(--purple)', transition: 'all 0.2s ease', '&:hover': { transform: 'scale(1.1)', bgcolor: 'var(--purple)', cursor: 'pointer' } }}>{t('cert_firstaid_chip')}</Typography>
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
            <strong>{t('about_create_meaningful')}</strong><span style={{ color: 'var(--blue)' }}>.</span>
          </Typography>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, position: 'relative', top: -16, lineHeight: 1 }}><span style={{ color: 'var(--blue)' }}>____</span></Typography>
          <Typography variant='h5' sx={{ mt: -3, fontSize: { xs: '1rem', md: '1.5rem' } }} dangerouslySetInnerHTML={{ __html: t('about_create_description') }} />
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
              color: 'var(--btn-text)',
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
                var(--btn-stripes) 25%, 
                var(--btn-stripes) 50%, 
                transparent 50%, 
                transparent 75%, 
                var(--btn-stripes) 75%
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
                bgcolor: 'var(--btn-hover-bg)',
              }
            }}
          >
            {t('about_get_in_touch')}
          </Button>
        </Container>
      </Box >





    </>
  );
}