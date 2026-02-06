'use client';
import { Box, Container } from '@mui/material';

export default function BackgroundCanva({ children }: { children: React.ReactNode }) {
  return (
    <Box 
      sx={{ 
        height: '100%', // Fit within body
        width: '100%',
        bgcolor: 'rgba(31, 167, 188, 0.15)',  
        overflow: 'hidden', // Ensure it contains its children
        position: 'relative'
      }}
    >
      <Container maxWidth="lg" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        {children}
      </Container>
    </Box>
  );
}
