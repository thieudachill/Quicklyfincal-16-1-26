import { useRef, useState, useEffect } from 'react';

export default function useScrollAnimation(threshold: number = 0.1) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Once visible, we can disconnect to avoid re-triggering (or triggering again when scrolling up)
                    // If we want it to trigger every time, remove observer.disconnect()
                    if (ref.current) {
                        observer.unobserve(ref.current);
                    }
                }
            },
            {
                threshold,
                rootMargin: '50px', // Optional: triggers a bit earlier
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold]);

    return { ref, isVisible };
}
