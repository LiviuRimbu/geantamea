'use client'
import { useEffect, useState } from "react";

export function useTextRotator(messages: string[], interval = 5000, fadeGap = 800) {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        if (messages.length <= 1) return;

        // Fade out just before the interval ends
        const fadeOut = setTimeout(() => setFade(false), interval - fadeGap);

        // Swap message and fade back in
        const swap = setTimeout(() => {
            setIndex((prev) => (prev + 1) % messages.length);
            setFade(true);
        }, interval);

        return () => {
            clearTimeout(fadeOut);
            clearTimeout(swap);
        };
    }, [index, messages.length, interval, fadeGap]);

    return { message: messages[index], fade };
}