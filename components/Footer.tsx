'use client';
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Box
      sx={{
        width: '100%',
        py: 0,
        px: 2,
        mt: 'auto',
        textAlign: 'right',
        position: 'fixed',
        bottom: 0,
        left: 0, right: 0,
        fontSize: '0.1rem'


      }}
    >
      <Typography variant="caption"
        sx={{ fontSize: '0.75rem', color: 'var(--footer-text)' }}>
        © {new Date().getFullYear()} {t('common_full_name')}. All rights reserved.
      </Typography>
    </Box>
  );
}
