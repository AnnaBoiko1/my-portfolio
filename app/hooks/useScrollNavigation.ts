import { useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export function useScrollNavigation(nextPath: string | null, prevPath: string | null) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const containerRef = useRef<HTMLDivElement>(null);
    const isNavigating = useRef(false);

    // Restore scroll position if coming from "next" page (scrolling up)
    useEffect(() => {
        const direction = searchParams.get('direction');
        if (direction === 'up') {
            isNavigating.current = true; // Block navigation immediately to prevent inertia from triggering prev page nav

            if (containerRef.current) {
                // Use timeout to ensure content is loaded/rendered and layout is settled
                setTimeout(() => {
                    if (containerRef.current) {
                        containerRef.current.scrollTop = 0;

                        // Unlock navigation after restoration and a buffer for inertia to dissipate
                        setTimeout(() => {
                            isNavigating.current = false;
                        }, 500);
                    } else {
                        isNavigating.current = false;
                    }
                }, 10);
            } else {
                isNavigating.current = false;
            }
        }
    }, [searchParams]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Throttle navigation to prevent multiple pushes
        const navigate = (path: string, direction: 'up' | 'down') => {
            if (isNavigating.current) return;
            isNavigating.current = true;

            if (direction === 'up') {
                router.push(`${path}?direction=up`);
            } else {
                router.push(path);
            }

            // Reset navigation lock after a bit in case navigation fails or cancels
            // But usually unmount happens first
            setTimeout(() => {
                isNavigating.current = false;
            }, 1000);
        };

        const handleWheel = (e: WheelEvent) => {
            const { scrollTop, scrollHeight, clientHeight } = container;
            // Buffer (1px) to handle fractional pixels or zoom levels
            const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 2;
            const isAtTop = scrollTop <= 0;

            if (e.deltaY > 0 && isAtBottom && nextPath) {
                navigate(nextPath, 'down');
            } else if (e.deltaY < 0 && isAtTop && prevPath) {
                // Need to verify if the scroll is actually trying to go "past" the top
                // Standard wheel deltaY is enough indication
                navigate(prevPath, 'up');
            }
        };

        // Touch handling
        let touchStartY = 0;

        const handleTouchStart = (e: TouchEvent) => {
            touchStartY = e.touches[0].clientY;
        }

        const handleTouchEnd = (e: TouchEvent) => {
            const touchEndY = e.changedTouches[0].clientY;
            const deltaY = touchStartY - touchEndY; // Positive = swipe up (scroll down)
            const { scrollTop, scrollHeight, clientHeight } = container;
            const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 2;
            const isAtTop = scrollTop <= 0;

            if (deltaY > 50 && isAtBottom && nextPath) {
                navigate(nextPath, 'down');
            } else if (deltaY < -50 && isAtTop && prevPath) {
                navigate(prevPath, 'up');
            }
        }

        container.addEventListener('wheel', handleWheel);
        container.addEventListener('touchstart', handleTouchStart);
        container.addEventListener('touchend', handleTouchEnd);

        return () => {
            container.removeEventListener('wheel', handleWheel);
            container.removeEventListener('touchstart', handleTouchStart);
            container.removeEventListener('touchend', handleTouchEnd);
        };
    }, [nextPath, prevPath, router]);

    return containerRef;
}
