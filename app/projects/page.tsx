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

const NavigationSeparator = ({ sx }: { sx?: any }) => (
  <Typography sx={sx} component="span">|</Typography>
);

const StarRating = () => {
  const [rating, setRating] = React.useState(0);
  const [hoverRating, setHoverRating] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setIsVisible(false), 2000); // Start fading after 2s
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const handleRating = (i: number) => {
    setRating(i);
    setIsVisible(true);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Box sx={{ display: 'flex', gap: 0.5 }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <svg
            key={i}
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill={i <= (hoverRating || rating) ? 'var(--purple)' : 'var(--blue)'}
            xmlns="http://www.w3.org/2000/svg"
            style={{ cursor: 'pointer', transition: 'fill 0.2s' }}
            onMouseEnter={() => setHoverRating(i)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => handleRating(i)}
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </Box>
      <Box sx={{ minWidth: '60px' }}>
        <Typography sx={{
          color: 'var(--blue)',
          fontWeight: 500,
          fontSize: '1.2rem',
          whiteSpace: 'nowrap',
          opacity: isVisible ? 1 : 0,
          transition: isVisible ? 'none' : 'opacity 0.01s ease-in-out',
          pointerEvents: 'none'
        }}>
          Thank you!
        </Typography>
      </Box>
    </Box>
  );
};

const ProjectLinksDropdown = ({ figmaUrl, githubUrl }: { figmaUrl: string, githubUrl: string }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

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

  return (
    <Box
      onMouseLeave={handleClose}
      sx={{ display: 'inline-block' }}
    >
      <Button
        onMouseEnter={handleOpen}
        sx={{
          mt: 4,
          width: 350,
          py: 1,
          fontSize: '1.3rem',
          fontWeight: 600,
          color: 'var(--purple)',
          bgcolor: open ? 'var(--blue)' : 'transparent',
          backgroundImage: open ? 'none' : `linear-gradient(45deg, transparent 25%, var(--blue) 25%, var(--blue)50%, transparent 50%, transparent 75%, var(--blue) 75%)`,
          textTransform: 'none',
          display: 'inline-flex',
          justifyContent: 'center',
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
          }
        }}
      >
        Link to project
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        onMouseEnter={handleMenuEnter}
        onMouseLeave={handleClose}
        MenuListProps={{ onMouseEnter: handleMenuEnter }}
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
        sx={{ pointerEvents: 'none' }}
      >
        <MenuItem
          onClick={() => { window.open(figmaUrl, '_blank', 'noopener,noreferrer'); setAnchorEl(null); }}
          sx={{
            color: 'var(--text)',
            gap: 2,
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
          sx={{
            color: 'var(--text)',
            gap: 2,
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
                A responsive web app for table tennis enthusiasts to discover and book nearby tables, manage reservations, and connect with local players in real time.
              </Typography>
              <Typography variant='h5' sx={{ mt: 2 }}>
                Built with <strong>React</strong> and <strong>Ruby on Rails</strong>, it integrates <strong>APIs</strong> for live map updates and seamless match coordination. I implemented user <strong>authentication</strong>, <strong>UI/UX improvements</strong>, and <strong>mobile-first design</strong> to enhance accessibility and user engagement.
              </Typography>

              {/* Feedback Stars Section */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 3, mb: 1 }}>
                <Typography variant="h5" sx={{ fontWeight: 500, color: 'var(--text)' }}>
                  Feedback
                </Typography>
                <StarRating />
              </Box>

              <ProjectLinksDropdown figmaUrl="https://www.figma.com/design/IdMHUj0lHkEr4KxSYTvVUS/LW--1282-Ping-it?node-id=1-44&p=f&t=ifGl8TuZ8ROcOVUy-0" githubUrl="https://github.com/S00J1NK1M/ping_it" />
            </Box>
          </Box>

        </Container>



        {/* Секція  - 2 snap точка */}
        <Container maxWidth="lg" sx={{
          scrollSnapAlign: 'start',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 2,
          pb: 20,
        }}>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'flex-start', gap: 4, mt: 15 }}>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography variant='h4' sx={{ mt: 5 }}>
                <strong>Lingoda copy cat</strong>
              </Typography>
              <Typography variant='h5' sx={{ mt: 2 }}>
                A user-friendly web platform for discovering and booking language courses with ease. Learners can filter, view, and reserve lessons in just a few clicks while managing their bookings effortlessly.
              </Typography>
              <Typography variant='h5' sx={{ mt: 2 }}>
                Built with <strong>   Ruby on Rails</strong>, <strong>JavaScript (ES6)</strong>, and <strong>SCSS</strong>, the app features <strong> a responsive UI</strong>, <strong>secure user authentication (Devise)</strong>, and <strong>PostgreSQL</strong> for reliable data management. Integrated <strong>Cloudinary</strong> ensures smooth and scalable media storage.
              </Typography>
              {/* Feedback Stars Section */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 3, mb: 1 }}>
                <Typography variant="h5" sx={{ fontWeight: 500, color: 'var(--text)' }}>
                  Feedback
                </Typography>
                <StarRating />
              </Box>

              <ProjectLinksDropdown figmaUrl="https://www.figma.com/design/LoJSPqtZcWbeKD6hcOdo0x/Lingoda-Copycat?node-id=1-34&p=f&t=EYlDmZRuMQeVE1Hs-0" githubUrl="https://github.com/S00J1NK1M/lingoda_copycat" />
            </Box>

            <Box sx={{ flex: 1, maxWidth: { md: 600 } }}>
              <Grid container spacing={0} columns={6}>
                {[
                  '/lingoda_1.png', '/lingoda_2.png', '/lingoda_3.png'
                ].map((src, i) => (
                  <Grid size={6} key={i}>  {/* ✅ size=6 = 1 фото/рядок */}
                    <Image
                      src={src}
                      alt="Lingoda Project"
                      width={300} height={300}  // Більші фото вертикально
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
          </Box>
        </Container>

        {/* Watch List Project */}
        <Container maxWidth="lg" sx={{
          scrollSnapAlign: 'start',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 2,
          pb: 20,
        }}>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'flex-start', gap: 4, mt: 15 }}>
            <Box sx={{ flex: 1, maxWidth: { md: 600 }, mt: 7 }}>

              <Image
                src="/watch_list.png"
                alt="Watch List Project"
                width={300} height={300}  // Більші фото вертикально
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
                priority
              />

            </Box>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography variant='h4' >
                <strong>Watch List</strong>
              </Typography>
              <Typography variant='h5' sx={{ mt: 2 }}>
                A user-friendly web platform for discovering and booking language courses with ease. Learners can filter, view, and reserve lessons in just a few clicks while managing their bookings effortlessly.
              </Typography>
              <Typography variant='h5' sx={{ mt: 2 }}>
                Built with <strong> Ruby on Rails</strong>, <strong>JavaScript (ES6)</strong>, and <strong>SCSS</strong>, the app features <strong> a responsive UI</strong>, <strong>secure user authentication (Devise)</strong>, and <strong>PostgreSQL</strong> for reliable data management. Integrated <strong>Cloudinary</strong> ensures smooth and scalable media storage.
              </Typography>
              {/* Feedback Stars Section */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 3, mb: 1 }}>
                <Typography variant="h5" sx={{ fontWeight: 500, color: 'var(--text)' }}>
                  Feedback
                </Typography>
                <StarRating />
              </Box>
              <ProjectLinksDropdown figmaUrl="#" githubUrl="https://github.com/AnnaBoiko1/rails-watch-list" />
            </Box>
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
      }
      }>
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
      </Box >

      {/* Mobile Navigation (Bottom) - з pb:6 */}
      < Box sx={{ width: '100%', bottom: 0, position: "fixed", left: 0, right: 0, display: { xs: 'flex', md: 'none' }, justifyContent: 'center', pb: 6, alignItems: 'center', gap: 2 }}>
        <Button onClick={() => router.push('/')} sx={{ fontSize: '1.2rem', fontWeight: 400, color: pathname === '/' ? 'var(--purple)' : 'var(--text)', textTransform: 'none', minWidth: 0, p: 0 }}>Home</Button>
        <NavigationSeparator sx={{ fontSize: '1.2rem', fontWeight: 300, color: 'var(--text)', lineHeight: 1 }} />
        <Button onClick={() => router.push('/about')} sx={{ fontSize: '1.2rem', fontWeight: 400, color: pathname === '/about' ? 'var(--purple)' : 'var(--text)', textTransform: 'none', minWidth: 0, p: 0 }}>About me</Button>
        <NavigationSeparator sx={{ fontSize: '1.2rem', fontWeight: 300, color: 'var(--text)', lineHeight: 1 }} />
        <Button onClick={() => router.push('/projects')} sx={{ fontSize: '1.2rem', fontWeight: 400, color: pathname === '/projects' ? 'var(--purple)' : 'var(--text)', textTransform: 'none', minWidth: 0, p: 0 }}>Projects</Button>
        <NavigationSeparator sx={{ fontSize: '1.2rem', fontWeight: 300, color: 'var(--text)', lineHeight: 1 }} />
        <Button onClick={() => router.push('/contact')} sx={{ fontSize: '1.2rem', fontWeight: 400, color: pathname === '/contact' ? 'var(--purple)' : 'var(--text)', textTransform: 'none', minWidth: 0, p: 0 }}>Contact</Button>
      </Box >
    </>
  );
}