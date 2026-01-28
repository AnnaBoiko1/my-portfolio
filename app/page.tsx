"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Home() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      {/* Hero Section з фото + текст */}
      <Container maxWidth="md" sx={{ py: 8, textAlign: 'center', mt: 4 }}>
        {/* Твоє фото */}
        <Box sx={{ mb: 4 }}>
          <Image 
            src="/annaboiko.png"  // ← Завантаж фото в public/anna-photo.jpg
            alt="Anna Boiko"
            width={300}
            height={300}
            className="object-cover shadow-2xl"
            priority
          />
        </Box>
        
        {/* Текст з скріншота */}
        <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 700, mb: 2, lineHeight: 1.1 }}>
          Hi, my name is <span style={{ color: 'var(--blue)' }}>Anna</span>.
        </Typography>
        <Typography variant="h5" sx={{ fontSize: { xs: '1.1rem', md: '1.25rem' }, color: 'text.secondary', mb: 6, maxWidth: 600, mx: 'auto' }}>
          I'm an independent, creative full-stack web developer and designer from Ukraine, currently based in Germany.
        </Typography>
      </Container>

      {/* Навбар знизу */}
      <Box sx={{ width: '100%', bottom: 0, position: "fixed", left: 0, right: 0 }}>
        <BottomNavigation
          value={pathname}
          onChange={(e, newValue) => router.push(newValue)}
          showLabels
          sx={{ bgcolor: 'background.paper' }}
        >
          <BottomNavigationAction label="Home" value="/" />
          <BottomNavigationAction label="About" value="/about" />
          <BottomNavigationAction label="Projects" value="/projects" />
          <BottomNavigationAction label="Contact" value="/contact" />
        </BottomNavigation>
      </Box>
    </>
  );
}
