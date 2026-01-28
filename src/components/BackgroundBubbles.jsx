import React, { useEffect, useState } from 'react';

const BackgroundBubbles = () => {
    const [bubbles, setBubbles] = useState([]);

    useEffect(() => {
        // Soap bubble colors: Transparent with hints of cyan, pink, purple, blue
        const colors = [
            'rgba(6, 182, 212, 0.3)', // Cyan
            'rgba(139, 92, 246, 0.3)', // Purple
            'rgba(236, 72, 153, 0.3)', // Pink
            'rgba(59, 130, 246, 0.3)'  // Blue
        ];

        const generateBubble = (id, type) => {
            let size, duration, opacity;

            if (type === 'big') {
                size = 100 + Math.random() * 60; // 100-160px
                duration = 20 + Math.random() * 10;
                opacity = 0.2;
            } else if (type === 'medium') {
                size = 40 + Math.random() * 30; // 40-70px
                duration = 15 + Math.random() * 8;
                opacity = 0.3;
            } else { // small
                size = 15 + Math.random() * 15; // 15-30px
                duration = 10 + Math.random() * 5;
                opacity = 0.4;
            }

            return {
                id,
                type,
                left: `${Math.random() * 100}%`,
                animationDuration: `${duration}s`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: opacity,
                size: `${size}px`,
                color: colors[Math.floor(Math.random() * colors.length)],
                blur: type === 'big' ? 'blur-sm' : 'blur-none'
            };
        };

        const bigBubbles = Array.from({ length: 8 }).map((_, i) => generateBubble(`big-${i}`, 'big'));
        const mediumBubbles = Array.from({ length: 15 }).map((_, i) => generateBubble(`med-${i}`, 'medium'));
        const smallBubbles = Array.from({ length: 30 }).map((_, i) => generateBubble(`sm-${i}`, 'small'));

        setBubbles([...bigBubbles, ...mediumBubbles, ...smallBubbles]);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
            {bubbles.map((bubble) => (
                <div
                    key={bubble.id}
                    className={`bubble absolute rounded-full ${bubble.blur}`}
                    style={{
                        left: bubble.left,
                        width: bubble.size,
                        height: bubble.size,
                        backgroundColor: bubble.color, // Slight tint
                        opacity: bubble.opacity,
                        animation: `floatUp ${bubble.animationDuration} linear infinite`,
                        animationDelay: bubble.animationDelay,
                        bottom: '-150px',
                        // Soap bubble effect: Inner shine and border
                        boxShadow: 'inset 0 0 10px rgba(255, 255, 255, 0.5), 0 0 2px rgba(255, 255, 255, 0.3)',
                        border: '1px solid rgba(255, 255, 255, 0.4)'
                    }}
                />
            ))}
            <style jsx>{`
                @keyframes floatUp {
                    0% {
                        transform: translateY(0) translateX(0) rotate(0deg);
                    }
                    33% {
                         transform: translateY(-40vh) translateX(20px) rotate(45deg);
                    }
                    66% {
                         transform: translateY(-70vh) translateX(-20px) rotate(90deg);
                    }
                    100% {
                        transform: translateY(-120vh) translateX(0) rotate(180deg);
                    }
                }
            `}</style>
        </div>
    );
};

export default BackgroundBubbles;
