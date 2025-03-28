import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

import './BlockRevealPreloader.css';
import DecryptedText from '../DecryptedText/DecryptedText';

const BlockRevealPreloader = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        // Counter animation with more predictable progression
        const startTime = Date.now();
        const duration = 3500; // Total animation time in milliseconds

        const updateCounter = () => {
            const elapsedTime = Date.now() - startTime;
            const progress = Math.min(elapsedTime / duration, 1);

            // Use an easing function for more natural progression
            const easedProgress = 1 - Math.pow(1 - progress, 4);
            const newValue = Math.round(easedProgress * 100);

            setCounter(newValue);

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        };

        // Start counter
        requestAnimationFrame(updateCounter);

        // GSAP Animations
        const tl = gsap.timeline();

        // Counter fade out
        tl.to(".counter", {
            opacity: 0,
            duration: 0.25,
            delay: 3.5
        });

        // Decrypted text fade out
        tl.to(".decrypted-text-container", {
            opacity: 0,
            duration: 0.25,
            delay: -2
        });

        // Bar height reduction
        tl.to(".bar", {
            height: 0,
            duration: 1.5,
            delay: -2,
            stagger: {
                amount: 0.5
            },
            ease: "power4.inOut"
        });

        // Cleanup
        return () => {
            tl.kill(); // Ensure GSAP timeline is stopped
        };
    }, []);

    return (
        <>
            <div className="decrypted-text-container">
                <h4>
                <DecryptedText
                    speed={100}
                    className='preload-sami'
                    text="sami saoud"
                    sequential={true}
                    animateOn="view"
                    revealDirection="center"
                /></h4>
            </div>
            <div className="overlay">
                {[...Array(10)].map((_, index) => (
                    <div key={index} className="bar"></div>
                ))}
            </div>
        </>
    );
};

export default BlockRevealPreloader;