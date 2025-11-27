import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function useScrollAnimation(options = {}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px", ...options });

    return {
        ref,
        isInView,
        initial: { opacity: 0, y: 50 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    };
}

export function useStaggerAnimation(index: number) {
    return {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: {
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut"
        }
    };
}
