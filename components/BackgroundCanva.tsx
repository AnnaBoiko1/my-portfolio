'use client';
import { Box, Container } from '@mui/material';

export default function BackgroundCanva({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        height: '99.5%', // Fit within body
        width: '99.5%',
        bgcolor: 'rgba(31, 167, 188, 0.15)',
        overflow: 'hidden', // Ensure it contains its children
        position: 'relative'
      }}
    >
      {children}
    </Box>
  );
}
