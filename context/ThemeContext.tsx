"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setThemeState] = useState<Theme | null>(null);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem('theme') as Theme | null;

        if (savedTheme) {
            setThemeState(savedTheme);
        } else {
            // Default based on current time
            const hour = new Date().getHours();
            const isDayTime = hour >= 6 && hour < 18;
            const initialTheme = isDayTime ? 'light' : 'dark';
            setThemeState(initialTheme);
            localStorage.setItem('theme', initialTheme);
        }
    }, []);

    useEffect(() => {
        if (!mounted || !theme) return;

        const applyTheme = () => {
            if (theme === 'dark') {
                document.documentElement.classList.add('dark');
                setIsDarkMode(true);
            } else {
                document.documentElement.classList.remove('dark');
                setIsDarkMode(false);
            }
        };

        applyTheme();
        localStorage.setItem('theme', theme);
    }, [theme, mounted]);

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
    };

    const toggleTheme = () => {
        setThemeState(prev => prev === 'light' ? 'dark' : 'light');
    };

    // Prevent hydration mismatch: render children only after theme is determined on client
    if (!mounted || !theme) {
        return null; // Or a loading skeleton if preferred, but null prevents flickering
    }

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
            theme: 'light' as Theme,
            setTheme: () => { },
            isDarkMode: false,
            toggleTheme: () => { }
        };
    }
    return context;
};
