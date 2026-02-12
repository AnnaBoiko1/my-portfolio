'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';


interface ImageCarouselProps {
    images: string[];
    alt: string;
    slideWidth?: string | number;
    objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

export default function ImageCarousel({ images, alt, slideWidth = '85vw', objectFit = 'cover' }: ImageCarouselProps) {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleOpen = (src: string) => {
        setSelectedImage(src);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    return (
        <>
            <Box sx={{
                display: 'flex',
                overflowX: 'auto',
                scrollSnapType: 'x mandatory',
                gap: 2,
                pb: 2,
                '::-webkit-scrollbar': { display: 'none' }, // Hide scrollbar
                scrollbarWidth: 'none'
            }}>
                {images.map((src, index) => (
                    <Box key={index} sx={{
                        minWidth: slideWidth, // Use prop
                        height: '40vh',
                        scrollSnapAlign: 'center',
                        position: 'relative',
                        borderRadius: 3,
                        overflow: 'hidden',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                        flexShrink: 0
                    }}
                        onClick={() => handleOpen(src)}
                    >
                        <Image
                            src={src}
                            alt={`${alt} ${index + 1}`}
                            fill
                            style={{ objectFit: objectFit }} // Use prop
                        />
                    </Box>
                ))}
            </Box>

            {/* Full Screen Modal */}
            <Modal
                open={open}
                onClose={handleClose}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'rgba(0,0,0,0.9)' }}
            >
                <Box sx={{ position: 'relative', maxWidth: '100vw', maxHeight: '100vh', outline: 'none' }}>
                    <IconButton
                        onClick={handleClose}
                        sx={{ position: 'absolute', top: 10, right: 10, color: 'white', zIndex: 2000 }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </IconButton>
                    {selectedImage && (
                        <Image
                            src={selectedImage}
                            alt="Full screen view"
                            width={1200}
                            height={800}
                            style={{ maxWidth: '100vw', maxHeight: '100vh', objectFit: 'contain' }}
                        />
                    )}
                </Box>
            </Modal>
        </>
    );
}
