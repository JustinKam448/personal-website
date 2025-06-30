import { useEffect, useState } from "react"


/**
 * Type definition for a star object
 */
interface Star {
  id: number;
  size: number;
  xCoord: number;
  yCoord: number;
  opacity: number;
  animationDuration: number;
}

/**
 * Returns a div that renders the stars and meteroids by making a list to keep track of the stars
 */
export const StarBackground = () => {
    const [stars, setStars] = useState<Star[]>([]);

    useEffect(() => {
        generateStars();
    }, [])

    /**
     * Format of a star object
     * id, size, xCoord, yCoord, opacity, animationDuration
     * Number of stars depends on the size of the window
     */
    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);

        const newStars : Star[] = [];

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                xCoord: Math.random() * 100,
                yCoord: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            })
        }

        setStars(newStars);
    };
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div 
                    key={star.id} className="star animate-pulse-subtle" 
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        left: `${star.xCoord}%`,
                        top: `${star.yCoord}%`,
                        opacity: `${star.opacity}`,
                        animationDuration: `${star.animationDuration}s`,
                    }}
                />
            ))}
        </div>
    )
}