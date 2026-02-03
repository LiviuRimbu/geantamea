'use client'
import { useEffect, useState } from "react";

export function useTextRotator(messages: string[], interval = 3000) {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        if (messages.length <= 1) return;
        const timeout = setTimeout(() => setFade(false), interval - 300); // Start fade-out 300ms before change
        const timer = setTimeout(() => {
            setIndex((prev) => (prev + 1) % messages.length);
            setFade(true); // Fade in new message
        }, interval);

        return () => {
            clearTimeout(timeout);
            clearTimeout(timer);
        };
    }, [index, messages, interval]);

    return { message: messages[index], fade };
}
