"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const StarRating = () => {
    const [rating, setRating] = React.useState(0);
    const [hoverRating, setHoverRating] = React.useState(0);
    const [isVisible, setIsVisible] = React.useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
                        width={isMobile ? "30px" : "44px"}
                        height={isMobile ? "30px" : "44px"}
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
                    fontSize: { xs: '0.7rem', md: '1.2rem' },
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

export default StarRating;
