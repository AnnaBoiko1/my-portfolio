"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark' | 'auto';

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setThemeState] = useState<Theme>('auto');
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem('theme') as Theme | null;
        if (savedTheme) {
            setThemeState(savedTheme);
        }
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const applyTheme = () => {
            let documentClass = '';
            if (theme === 'auto') {
                const hour = new Date().getHours();
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

            if (documentClass === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        };

        applyTheme();
        localStorage.setItem('theme', theme);
    }, [theme, mounted]);

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
    };

    const toggleTheme = () => {
        if (theme === 'auto') setThemeState('light');
        else if (theme === 'light') setThemeState('dark');
        else setThemeState('auto');
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme, isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        return {
            theme: 'auto' as Theme,
            setTheme: () => { },
            isDarkMode: false,
            toggleTheme: () => { }
        };
    }
    return context;
};
