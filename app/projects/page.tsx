"use client";
import * as React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Grid from '@mui/material/Grid';

import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ImageCarousel from '@/components/ImageCarousel';

import Navbar from '@/components/Navbar';
import { useLanguage } from '@/context/LanguageContext';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import StarRating from '@/components/StarRating';

import { useScrollNavigation } from '../hooks/useScrollNavigation';


const ProjectLinksDropdown = ({ figmaUrl, githubUrl }: { figmaUrl: string, githubUrl: string }) => {
  const { t } = useLanguage();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const hasFigma = Boolean(figmaUrl && figmaUrl.trim() !== '' && figmaUrl !== '#');
  const hasGithub = Boolean(githubUrl && githubUrl.trim() !== '' && githubUrl !== '#');
  const linkCount = (hasFigma ? 1 : 0) + (hasGithub ? 1 : 0);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    timeoutRef.current = setTimeout(() => {
      setAnchorEl(null);
    }, 150); // Small delay to allow moving to the menu
  };

  const handleMenuEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const buttonStyles = (isOpen: boolean) => ({
    mt: { xs: 1, md: 4 },
    width: { xs: "40vh", md: 350 },
    py: 1,
    fontSize: '1rem',
    fontWeight: 600,
    color: 'var(--purple)',
    bgcolor: isOpen ? 'var(--blue)' : 'transparent',
    backgroundImage: isOpen ? 'none' : `linear-gradient(45deg, transparent 25%, var(--blue) 25%, var(--blue)50%, transparent 50%, transparent 75%, var(--blue) 75%)`,
    textTransform: 'none',
    display: 'inline-flex',
    justifyContent: 'center',
    textShadow: '1px 1px 1px rgba(0,0,0,0.3), 0 0 3px rgba(255,255,255,0.4)',
    backgroundSize: '15px 15px',
    position: 'relative',
    backgroundOrigin: 'padding-box',
    borderRadius: 3,
    boxShadow: isOpen ? '0 10px 30px var(--red)' : 'none',
    transform: isOpen ? 'translateY(-2px)' : 'none',
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
    }
  });

  if (linkCount === 0) return null;

  if (linkCount === 1) {
    const singleUrl = hasFigma ? figmaUrl : githubUrl;
    const singleLabel = hasFigma ? "Figma" : "GitHub";

    return (
      <Box sx={{ display: 'inline-block' }}>
        <Button
          onClick={() => window.open(singleUrl, '_blank', 'noopener,noreferrer')}
          sx={buttonStyles(false)}
        >
          {singleLabel}
        </Button>
      </Box>
    );
  }

  return (
    <Box
      onMouseLeave={handleClose}
      sx={{ display: 'inline-block' }}
    >
      <Button
        onMouseEnter={handleOpen}
        onClick={handleOpen}
        sx={buttonStyles(open)}
      >
        {t('projects_link_to_project')}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        onMouseEnter={handleMenuEnter}
        onMouseLeave={handleClose}
        MenuListProps={{
          onMouseEnter: handleMenuEnter,
          sx: { py: 0 } // Optional: remove default padding if needed
        }}
        PaperProps={{
          sx: {
            mt: 0.5,
            bgcolor: 'transparent',
            backdropFilter: 'blur(10px)',
            border: 'none',
            boxShadow: 'none',
            borderRadius: 2,
            minWidth: 350,
            pointerEvents: 'auto'
          }
        }}
        sx={{ pointerEvents: isMobile ? 'auto' : 'none' }}
      >
        <MenuItem
          onClick={() => { window.open(figmaUrl, '_blank', 'noopener,noreferrer'); setAnchorEl(null); }}
          disableRipple
          sx={{
            color: 'var(--text)',
            gap: 2,
            bgcolor: 'transparent',
            // Ensure no background on potential focus/active states
            '&:focus, &:active, &.Mui-selected, &.Mui-selected:hover': {
              bgcolor: 'transparent'
            },
            // Only apply purple color on hover
            '&:hover': {
              color: 'var(--purple)',
              bgcolor: 'transparent'
            }
          }}
        >
          <svg width="24" height="24" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 28.5C19 25.8478 20.0536 23.3043 21.9289 21.4289C23.8043 19.5536 26.3478 18.5 29 18.5C31.6522 18.5 34.1957 19.5536 36.0711 21.4289C37.9464 23.3043 39 25.8478 39 28.5C39 31.1522 37.9464 33.6957 36.0711 35.5711C34.1957 37.4464 31.6522 38.5 29 38.5C26.3478 38.5 23.8043 37.4464 21.9289 35.5711C20.0536 33.6957 19 31.1522 19 28.5Z" fill="#1ABCFE" />
            <path d="M0 47.5C0 44.8478 1.05357 42.3043 2.92893 40.4289C4.8043 38.5536 7.34784 37.5 10 37.5C12.6522 37.5 15.1957 38.5536 17.0711 40.4289C18.9464 42.3043 20 44.8478 20 47.5C20 50.1522 18.9464 52.6957 17.0711 54.5711C15.1957 56.4464 12.6522 57.5 10 57.5C7.34784 57.5 4.8043 56.4464 2.92893 54.5711C1.05357 52.6957 0 50.1522 0 47.5Z" fill="#0ACF83" />
            <path d="M0 28.5C0 25.8478 1.05357 23.3043 2.92893 21.4289C4.8043 19.5536 7.34784 18.5 10 18.5H20V38.5H10C7.34784 38.5 4.8043 37.4464 2.92893 35.5711C1.05357 33.6957 0 31.1522 0 28.5Z" fill="#A259FF" />
            <path d="M0 9.5C0 6.84784 1.05357 4.3043 2.92893 2.42893C4.8043 0.553571 7.34784 -4.76837e-07 10 0H20V19H10C7.34784 19 4.8043 18.4464 2.92893 16.5711C1.05357 14.6957 0 12.1522 0 9.5Z" fill="#F24E1E" />
            <path d="M20 0H30C32.6522 -4.76837e-07 35.1957 0.553571 37.0711 2.42893C38.9464 4.3043 40 6.84784 40 9.5C40 12.1522 38.9464 14.6957 37.0711 16.5711C35.1957 18.4464 32.6522 19 30 19H20V0Z" fill="#FF7262" />
          </svg>
          <Typography sx={{ fontSize: '1.2rem', fontWeight: 500 }}>Figma</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => { window.open(githubUrl, '_blank', 'noopener,noreferrer'); setAnchorEl(null); }}
          disableRipple
          sx={{
            color: 'var(--text)',
            gap: 2,
            bgcolor: 'transparent',
            // Ensure no background on potential focus/active states
            '&:focus, &:active, &.Mui-selected, &.Mui-selected:hover': {
              bgcolor: 'transparent'
            },
            // Only apply purple color on hover
            '&:hover': {
              color: 'var(--purple)',
              bgcolor: 'transparent'
            },
            '&:hover svg': { fill: 'var(--purple)' }
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815V20.73C5.685 21.465 4.98 19.125 4.98 19.125C4.425 17.73 3.63 17.355 3.63 17.355C2.535 16.605 3.72 16.62 3.72 16.62C4.935 16.71 5.58 17.865 5.58 17.865C6.66 19.725 8.415 19.185 9.105 18.87C9.21 18.09 9.525 17.565 9.87 17.265C7.185 16.965 4.365 15.93 4.365 11.295C4.365 9.975 4.83 8.895 5.61 8.055C5.475 7.74 5.07 6.51 5.73 4.86C5.73 4.86 6.735 4.545 9.03 6.09C9.99 5.82 11.01 5.685 12.03 5.685C13.05 5.685 14.07 5.82 15.03 6.09C17.325 4.545 18.33 4.86 18.33 4.86C18.99 6.51 18.585 7.74 18.45 8.055C19.23 8.895 19.695 9.975 19.695 11.295C19.695 15.945 16.86 16.95 14.175 17.25C14.61 17.625 15 18.36 15 19.485V22.815C15 23.13 15.225 23.505 15.825 23.385C20.58 21.795 24 17.31 24 12C24 5.37 18.63 0 12 0Z" />
          </svg>
          <Typography sx={{ fontSize: '1.2rem', fontWeight: 500 }}>GitHub</Typography>
        </MenuItem>
      </Menu>
    </Box >
  );
};


export default function ProjectsPage() {
  const pathname = usePathname();
  const router = useRouter();
  const containerRef = useScrollNavigation('/contact', '/about');
  const { t } = useLanguage();

  const [projects, setProjects] = React.useState<any[]>([]);

  React.useEffect(() => {
    async function fetchProjects() {
      // @ts-ignore
      const { supabaseClient } = await import('@/lib/supabaseClient');
      const { data, error } = await supabaseClient
        .from('projects')
        .select('*')
        .order('position', { ascending: true });
      if (data) {
        setProjects(data);
      }
    }
    fetchProjects();
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

        {projects.map((project, index) => {
          // == LAYOUT 0 (Ping It style) ==
          if (index === 0) {
            return (
              <Container key={project.id} maxWidth="lg" sx={{
                scrollSnapAlign: 'start',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: 2,
                pb: 20
              }}>
                <Typography variant='h3' sx={{ marginTop: { xs: '60px', md: 15 } }}>
                  <strong>{t('projects_title')}</strong>
                </Typography>
                <Typography variant="h4" sx={{ mb: 0.5, fontWeight: 600, position: 'relative', top: { xs: -40, md: -20 }, lineHeight: 1 }}>
                  <span style={{ color: 'var(--blue)' }}>____</span>
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'flex-start', gap: { xs: 0, md: 4 }, mt: -2 }}>
                  {/* MOBILE ONLY: Side-by-side layout */}
                  <Box sx={{ display: { xs: 'flex', md: 'none' }, width: '100%', gap: 1, mt: -5, alignItems: 'center' }}>
                    <Box sx={{ width: '50%', ml: -1 }}>
                      <ImageCarousel images={project.images} alt={project.name} slideWidth="100%" />
                    </Box>
                    <Box sx={{ width: '60%' }}>
                      <Typography variant='h6' sx={{ mb: 1, fontWeight: 700 }}>
                        {project.name}
                      </Typography>
                      <Typography variant='body2' sx={{ fontSize: '1rem', mr: -2 }} dangerouslySetInnerHTML={{ __html: project.description }} />
                    </Box>
                  </Box>

                  {/* DESKTOP: Grid Images */}
                  <Box sx={{ display: { xs: 'none', md: 'block' }, flex: 1, maxWidth: { md: 600 } }}>
                    <Grid container spacing={0} columns={{ xs: 6, md: 6 }}>
                      {project.images?.map((src: string, i: number) => (
                        <Grid size={{ xs: 2, md: 2 }} key={i}>
                          <Image src={src} alt={project.name} width={200} height={200}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} priority />
                        </Grid>
                      ))}
                    </Grid>
                  </Box>

                  {/* Content Text (Right on Desktop) */}
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography variant='h4' sx={{ display: { xs: 'none', md: 'block' } }}>
                      <strong>{project.name}</strong>
                    </Typography>
                    <Typography variant='h5' sx={{ display: { xs: 'none', md: 'block' }, mt: 2, fontSize: { xs: '1rem', md: '1.5rem' } }} dangerouslySetInnerHTML={{ __html: project.description }} />
                    {/* Feedback Stars Section */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: { xs: 1, md: 3 }, mb: 1 }}>
                      <Typography variant="h5" sx={{ fontWeight: 500, color: 'var(--text)', fontSize: { xs: '1rem', md: '1.5rem' } }}>
                        {t('projects_feedback')}
                      </Typography>
                      <StarRating projectId={project.id} />
                    </Box>
                    <ProjectLinksDropdown figmaUrl={project.figma_url} githubUrl={project.github_url} />
                  </Box>
                </Box >
              </Container>
            );
          }

          // == LAYOUT 1 (Lingoda style) ==
          if (index === 1) {
            return (
              <Container key={project.id} maxWidth="lg" sx={{
                scrollSnapAlign: 'start', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 2, pb: 20
              }}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'flex-start', gap: 4, mt: 15 }}>
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography variant='h4' sx={{ mt: 5 }}>
                      <strong>{project.name}</strong>
                    </Typography>
                    <Typography variant='h5' sx={{ mt: 2, fontSize: { xs: '1rem', md: '1.5rem' } }} dangerouslySetInnerHTML={{ __html: project.description }} />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 3, mb: 1 }}>
                      <Typography variant="h5" sx={{ fontWeight: 500, color: 'var(--text)', fontSize: { xs: '1rem', md: '1.5rem' } }}>
                        {t('projects_feedback')}
                      </Typography>
                      <StarRating projectId={project.id} />
                    </Box>
                    <ProjectLinksDropdown figmaUrl={project.figma_url} githubUrl={project.github_url} />
                  </Box>

                  <Box sx={{ flex: 1, maxWidth: { md: 600 }, mt: -2, width: '100%' }}>
                    {/* MOBILE: Carousel */}
                    <Box sx={{ display: { xs: 'block', md: 'none' }, width: '100%', mt: 2 }}>
                      <ImageCarousel images={project.images} alt={project.name} objectFit="contain" />
                    </Box>
                    {/* DESKTOP: Grid */}
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                      <Grid container spacing={0} columns={6}>
                        {project.images?.map((src: string, i: number) => (
                          <Grid size={6} key={i}>
                            <Image src={src} alt={project.name} width={300} height={300} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} priority />
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  </Box>
                </Box>
              </Container>
            );
          }

          // == LAYOUT >= 2 (Watch List style - single full image or defaults) ==
          return (
            <Container key={project.id} maxWidth="lg" sx={{
              scrollSnapAlign: 'start', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 2, pb: 20
            }}>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', md: index % 2 === 0 ? 'row' : 'row-reverse' }, alignItems: 'flex-start', gap: 4, mt: 15 }}>
                <Box sx={{ flex: 1, maxWidth: { md: 600 }, mt: { xs: 2, md: 7 }, width: '100%' }}>
                  <Image src={project.images?.[0] || '/img_placeholder.png'} alt={project.name} width={300} height={300} priority style={{
                    width: '100%', height: '100%', maxHeight: '50vh', objectFit: 'cover', display: 'block'
                  }} />
                </Box>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography variant='h4'>
                    <strong>{project.name}</strong>
                  </Typography>
                  <Typography variant='h5' sx={{ mt: 2, fontSize: { xs: '1rem', md: '1.5rem' } }} dangerouslySetInnerHTML={{ __html: project.description }} />
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 3, mb: 1 }}>
                    <Typography variant="h5" sx={{ fontWeight: 500, color: 'var(--text)', fontSize: { xs: '1rem', md: '1.5rem' } }}>
                      {t('projects_feedback')}
                    </Typography>
                    <StarRating projectId={project.id} />
                  </Box>
                  <ProjectLinksDropdown figmaUrl={project.figma_url} githubUrl={project.github_url} />
                </Box>
              </Box>
            </Container>
          );
        })}
      </Box>
    </>
  );
}