"use client";
import * as React from 'react';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const NavigationSeparator = ({ sx }: { sx?: any }) => (
    <Typography sx={sx} component="span">|</Typography>
);

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();

    // --- Theme State ---
    const [theme, setTheme] = useState<'light' | 'dark' | 'auto'>('auto');
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Load saved theme or specific preference
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'auto' | null;
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        const applyTheme = () => {
            let documentClass = '';
            if (theme === 'auto') {
                const hour = new Date().getHours();
                // 6am to 6pm is Light, otherwise Dark
                const isDayTime = hour >= 6 && hour < 18;
                if (isDayTime) {
                    documentClass = 'light';
                    setIsDarkMode(false);
                } else {
                    documentClass = 'dark';
                    setIsDarkMode(true);
                }
            } else {
                if (theme === 'dark') {
                    documentClass = 'dark';
                    setIsDarkMode(true);
                } else {
                    documentClass = 'light';
                    setIsDarkMode(false);
                }
            }

            // Apply to document (simplified for now, assuming global css handles class='dark' or we just toggle variables)
            // For this specific project, let's assume we toggle a class on body or html
            // Disable dark mode application as per user request, but keep logic in case we need it back
            // if (documentClass === 'dark') {
            //     document.documentElement.classList.add('dark');
            // } else {
            //     document.documentElement.classList.remove('dark');
            // }
            document.documentElement.classList.remove('dark');
        };

        applyTheme();
        // Save to local storage
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        if (theme === 'auto') setTheme('light');
        else if (theme === 'light') setTheme('dark');
        else setTheme('auto');
    };

    // --- Auth State ---
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // --- Language State ---
    const [languageAnchorEl, setLanguageAnchorEl] = useState<null | HTMLElement>(null);
    const [language, setLanguage] = useState('EN');
    const openLanguageMenu = Boolean(languageAnchorEl);

    const handleLanguageClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setLanguageAnchorEl(event.currentTarget);
    };
    const handleLanguageClose = (lang?: string) => {
        setLanguageAnchorEl(null);
        if (lang) setLanguage(lang);
    };

    // --- Styles ---
    const navLinkStyle = (path: string) => ({
        fontSize: '1.4rem',
        color: pathname === path ? 'var(--purple)' : 'var(--text)',
        textTransform: 'none',
        minWidth: 0,
        p: 0,
        '&:hover': { bgcolor: 'transparent', color: 'var(--purple)' }
    });

    const mobileNavLinkStyle = (path: string) => ({
        fontSize: '1rem',
        fontWeight: 600,
        color: pathname === path ? 'var(--purple)' : 'var(--text)',
        textTransform: 'none',
        minWidth: 0,
        p: 0,
        whiteSpace: 'nowrap'
    });

    // Prevent hydration errors by not rendering until mounted
    if (!mounted) {
        return null;
    }

    return (
        <>
            {/* Desktop Navbar (Sticky) */}
            <Box sx={{
                position: 'sticky',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                display: { xs: 'none', md: 'grid' },
                gridTemplateColumns: '1fr auto 1fr',
                alignItems: 'center',
                p: 4,
                pt: 6,
                backgroundColor: 'transparent',
                backdropFilter: 'blur(5px)', // Optional: Adds a nice glass effect
                transition: 'background-color 0.3s ease'
            }}>
                {/* Left: Auth Button */}
                <Box>
                    <Button
                        onClick={() => setIsLoggedIn(!isLoggedIn)}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: 'transparent',
                            p: 0,
                            minWidth: 0,
                            '&:hover': {
                                bgcolor: 'transparent',
                                opacity: 0.8
                            }
                        }}
                    >
                        <img
                            src={isLoggedIn ? "/log_out.png" : "/log_in.png"}
                            alt={isLoggedIn ? "Log Out" : "Log In"}
                            width={32}
                            height={32}
                            style={{ borderRadius: '50%', marginBottom: '4px' }}
                        />
                        <Typography
                            sx={{
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                textTransform: 'none',
                                lineHeight: 1,
                                background: isLoggedIn ? 'var(--purple)' : 'var(--purple)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                color: 'transparent' // Fallback
                            }}
                        >
                            {isLoggedIn ? 'Sign out' : 'Sign in'}
                        </Typography>
                    </Button>
                </Box>

                {/* Center: Navigation */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'center' }}>
                    <Button onClick={() => router.push('/')} sx={navLinkStyle('/')}>Home</Button>
                    <NavigationSeparator sx={{ fontSize: '1.4rem', color: 'var(--text)', lineHeight: 1 }} />
                    <Button onClick={() => router.push('/about')} sx={navLinkStyle('/about')}>About me</Button>
                    <NavigationSeparator sx={{ fontSize: '1.4rem', color: 'var(--text)', lineHeight: 1 }} />
                    <Button onClick={() => router.push('/projects')} sx={navLinkStyle('/projects')}>Projects</Button>
                    <NavigationSeparator sx={{ fontSize: '1.4rem', color: 'var(--text)', lineHeight: 1 }} />
                    <Button onClick={() => router.push('/contact')} sx={navLinkStyle('/contact')}>Contact</Button>
                </Box>

                {/* Right: Theme & Language */}
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', alignItems: 'center' }}>
                    {/* Theme Toggle */}
                    <Box
                        onClick={toggleTheme}
                        sx={{
                            width: 32,
                            height: 32,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer',
                            transition: 'transform 0.2s',
                            '&:hover': { transform: 'scale(1.1)' }
                        }}
                    >
                        {theme === 'light' ? (
                            <span style={{ fontSize: '3rem', marginBottom: '6px' }}>☀</span>
                        ) : theme === 'dark' ? (
                            <span style={{ fontSize: '2.4rem', marginBottom: '6px' }}>☾</span>
                        ) : (
                            <img src="/theme_auto2.png" alt="Auto" style={{ width: '28px', height: '28px' }} />
                        )}
                    </Box>

                    {/* Language Dropdown */}
                    <Button
                        onClick={handleLanguageClick}
                        sx={{
                            fontSize: '1.4rem',
                            fontWeight: '900',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5,
                            color: 'var(--text)',
                            minWidth: 0,
                            textTransform: 'none',
                            p: 0
                        }}
                    >
                        {language} <span style={{ fontSize: '0.8em' }}>▼</span>
                    </Button>
                    <Menu
                        anchorEl={languageAnchorEl}
                        open={openLanguageMenu}
                        onClose={() => handleLanguageClose()}
                        PaperProps={{
                            sx: {
                                mt: 1,
                                bgcolor: 'var(--background)',
                                color: 'var(--text)',
                                border: '1px solid var(--blue)',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                            }
                        }}
                    >
                        {['EN', 'FR', 'UA', 'DE'].map((lang) => (
                            <MenuItem
                                key={lang}
                                onClick={() => handleLanguageClose(lang)}
                                sx={{
                                    fontWeight: language === lang ? 900 : 400,
                                    color: language === lang ? 'var(--purple)' : 'var(--text)'
                                }}
                            >
                                {lang}
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </Box>

            {/* Mobile Navbar (Bottom Fixed) */}
            <Box sx={{
                width: '100%',
                bottom: 0,
                position: "fixed",
                left: 0,
                right: 0,
                display: { xs: 'flex', md: 'none' },
                justifyContent: 'center',
                pb: 6,
                alignItems: 'center',
                gap: 2,
                zIndex: 100,
                // background: 'linear-gradient(to top, var(--background) 80%, transparent)',
                backgroundColor: 'transparent',
                backdropFilter: 'blur(5px)',
                pt: 2
            }}>
                <Button onClick={() => router.push('/')} sx={mobileNavLinkStyle('/')}>Home</Button>
                <NavigationSeparator sx={{ fontSize: '1rem', fontWeight: 300, color: 'var(--text)', lineHeight: 1 }} />
                <Button onClick={() => router.push('/about')} sx={mobileNavLinkStyle('/about')}>About me</Button>
                <NavigationSeparator sx={{ fontSize: '1rem', fontWeight: 300, color: 'var(--text)', lineHeight: 1 }} />
                <Button onClick={() => router.push('/projects')} sx={mobileNavLinkStyle('/projects')}>Projects</Button>
                <NavigationSeparator sx={{ fontSize: '1rem', fontWeight: 300, color: 'var(--text)', lineHeight: 1 }} />
                <Button onClick={() => router.push('/contact')} sx={mobileNavLinkStyle('/contact')}>Contact</Button>
            </Box>

            {/* Mobile Top Bar for Auth/Theme/Lang (Optional, adding since users asked for these features and desktop only shows them) */}
            <Box sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                display: { xs: 'flex', md: 'none' },
                justifyContent: 'space-between',
                alignItems: 'center',
                p: 2,
                backgroundColor: 'transparent',
                backdropFilter: 'blur(5px)',
            }}>
                <Button
                    onClick={() => setIsLoggedIn(!isLoggedIn)}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'transparent',
                        p: 0,
                        minWidth: 0,
                        '&:hover': {
                            bgcolor: 'transparent',
                            opacity: 0.8
                        }
                    }}
                >
                    <img
                        src={isLoggedIn ? "/log_out.png" : "/log_in.png"}
                        alt={isLoggedIn ? "Log Out" : "Log In"}
                        width={28}
                        height={28}
                        style={{ borderRadius: '50%', marginBottom: '2px' }}
                    />
                    <Typography
                        sx={{
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            textTransform: 'none',
                            lineHeight: 1,
                            background: isLoggedIn ? 'var(--purple)' : 'linear-gradient(90deg, var(--purple), var(--blue))',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            color: 'transparent' // Fallback
                        }}
                    >
                        {isLoggedIn ? 'Sign out' : 'Sign in'}
                    </Typography>
                </Button>

                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Box
                        onClick={toggleTheme}
                        sx={{ width: 28, height: 28, display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}
                    >
                        {theme === 'light' ? '☀' : theme === 'dark' ? '☾' : 'A'}
                    </Box>
                    <Button
                        onClick={handleLanguageClick}
                        sx={{ fontSize: '1rem', fontWeight: '900', color: 'var(--text)', minWidth: 0, p: 0 }}
                    >
                        {language}
                    </Button>
                </Box>
            </Box>
        </>
    );
}
