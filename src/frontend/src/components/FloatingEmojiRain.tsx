import { useEffect, useRef } from 'react';

const emojis = ['🤗', '💗', '💖', '💞', '🌹', '🌸', '✨', '🤍', '🌷'];

function FloatingEmojiRain() {
    const containerRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<number | null>(null);

    const createFloatingEmoji = () => {
        if (!containerRef.current) return;

        const emoji = document.createElement('div');
        emoji.className = 'floating-emoji';
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = `${Math.random() * 100}vw`;
        emoji.style.fontSize = `${16 + Math.random() * 30}px`;
        emoji.style.animationDuration = `${4 + Math.random() * 5}s`;
        emoji.style.opacity = `${0.45 + Math.random() * 0.55}`;

        containerRef.current.appendChild(emoji);

        emoji.addEventListener('animationend', () => {
            emoji.remove();
        });
    };

    const burst = (count: number) => {
        for (let i = 0; i < count; i++) {
            createFloatingEmoji();
        }
    };

    useEffect(() => {
        // Initial burst
        burst(100);

        // Continuous rain
        intervalRef.current = window.setInterval(() => {
            burst(2);
        }, 110);

        // Click handler for burst
        const handleClick = () => {
            burst(60);
        };

        document.body.addEventListener('click', handleClick);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
            document.body.removeEventListener('click', handleClick);
        };
    }, []);

    return <div ref={containerRef} className="floating-emoji-container" />;
}

export default FloatingEmojiRain;
