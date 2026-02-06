"use client";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import * as React from "react";
import { Typography, Container, Box } from "@mui/material";
import { usePathname, useRouter } from 'next/navigation';

export default function AboutPage() {
    const pathname = usePathname();
    const router = useRouter();
  return (
    <div>
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Typography variant='h3' sx={{}}>
            <strong>About me</strong>
          </Typography>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, position: 'relative', top: -16, lineHeight: 1    }}><span style={{ color: 'var(--blue)' }}>____</span></Typography>
          <Typography variant='h5' sx={{}}>
            Hi, I’m Anna Boiko, a web developer and designer with a background in <strong>philosophy</strong>, which has shaped my approach to problem-solving and critical thinking. Passionate about innovation and user experience, I’ve developed my skills through <strong>full-stack projects</strong> and <strong>UI/UX design</strong>, blending creativity with technical expertise.
          </Typography>
          <Typography variant='h5' sx={{}}>
            My experience in <strong>sales</strong> and <strong>administration</strong> has sharpened my communication and organizational skills, allowing me to thrive in <strong>team environments</strong>. I’m eager to collaborate on projects that push boundaries and create accessible, user-friendly web solutions.
          </Typography>
        </Box>
      </Container>

      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Typography variant='h3' sx={{}}>
            <strong>TOOLBELT</strong>
          </Typography>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, position: 'relative', top: -16, lineHeight: 1    }}><span style={{ color: 'var(--blue)' }}>____</span></Typography>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',           // Телефон: 1 колонка
              sm: 'repeat(2, 1fr)', // Tablet: 2 колонки
              md: 'repeat(3, 1fr)'  // ПК: 3 колонки
            },
            gap: '5%',               // ✅ Відстань 5% між боксами
            maxWidth: '100%',
            mb: 4
          }}
        >
      {/* Бокс 1: Languages */}
      <Box
        sx={{
          p: { xs: 3, md: 4 },
          height: 200,             // ✅ Однаковий розмір
          bgcolor: 'var(--red)',
          // color: 'var(--text)',      
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
          <Typography variant="body2" sx={{ bgcolor: 'var(--blue)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: '1.5rem',border: '3px solid var(--purple)' }}>HTML</Typography>
          <Typography variant="body2" sx={{ bgcolor: 'var(--blue)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: '1.5rem',border: '3px solid var(--purple)' }}>CSS</Typography>
          <Typography variant="body2" sx={{ bgcolor: 'var(--blue)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: '1.5rem',border: '3px solid var(--purple)' }}>JavaScript</Typography>
          <Typography variant="body2" sx={{ bgcolor: 'var(--blue)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: '1.5rem',border: '3px solid var(--purple)' }}>Ruby</Typography>
          <Typography variant="body2" sx={{ bgcolor: 'var(--blue)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: '1.5rem',border: '3px solid var(--purple)' }}>Python</Typography>
          <Typography variant="body2" sx={{ bgcolor: 'var(--blue)', px: 1.5, py: 0.5, borderRadius: 2, fontSize: '1.5rem',border: '3px solid var(--purple)' }}>SQL</Typography>
        </Box>
      </Box>

      {/* Бокс 2: Front-end */}
      <Box sx={{ /* Ті ж стилі, інший колір */ p: { xs: 3, md: 4 }, height: 200, bgcolor: '#fce7f3', /* ... */ }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#be185d' }}>Front-end</Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Typography variant="body2" sx={{ bgcolor: 'white', px: 1.5, py: 0.5, borderRadius: 1, fontSize: '0.75rem' }}>HTML</Typography>
          <Typography variant="body2" sx={{ bgcolor: 'white', px: 1.5, py: 0.5, borderRadius: 1, fontSize: '0.75rem' }}>CSS</Typography>
          <Typography variant="body2" sx={{ bgcolor: 'white', px: 1.5, py: 0.5, borderRadius: 1, fontSize: '0.75rem' }}>JavaScript</Typography>
        </Box>
      </Box>

      {/* Бокс 3: Back-end */}
      <Box sx={{ /* копіюйте стилі */ }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#be185d' }}>Back-end</Typography>
        {/* Теги */}
      </Box>

      {/* Бокс 4: DevOps */}
      <Box sx={{ /* копіюйте */ }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#be185d' }}>DevOps</Typography>
        {/* Теги */}
      </Box>

      {/* Бокс 5: Database */}
      <Box sx={{ /* копіюйте */ }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#be185d' }}>Database</Typography>
        {/* Теги */}
      </Box>
        </Box>
      </Container>

      <Box sx={{ width: '100%', bottom: 0, position: "fixed", left: 0, right: 0 }}>
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
          color: 'inherit'    // Спадкує колір від root
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
          <Typography sx={{fontSize: '1.2rem', pb: 10}}>|</Typography>
          <BottomNavigationAction label="About" value="/about" />
          <Typography sx={{fontSize: '1.2rem', pb: 10}}>|</Typography>
          <BottomNavigationAction label="Projects" value="/projects" />
          <Typography sx={{}}>|</Typography>
          <BottomNavigationAction label="Contact" value="/contact" /> 
        </BottomNavigation>
      </Box>
    </div>
  );
}
