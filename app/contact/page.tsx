"use client";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import * as React from "react";
import { Typography, Container, Box } from "@mui/material";
import { usePathname, useRouter } from 'next/navigation';

export default function ContactPage() {
    const pathname = usePathname();
    const router = useRouter();
  return (
    <div>
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Contact
          </Typography>
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
