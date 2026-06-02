import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { isElementInViewport } from './utitlity.jsx';
import './odometer.css';

export const Odometer = ({ icon, value, index = 0 }) => {
    const containerRef = useRef(null);
    const lineRef = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            if (hasAnimated.current || !containerRef.current || !lineRef.current) return;

            if (isElementInViewport(containerRef)) {
                hasAnimated.current = true;

                gsap.fromTo(
                    containerRef.current,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: 'power2.out',
                    }
                );

                gsap.fromTo(
                    lineRef.current,
                    { width: '0%' },
                    {
                        width: `${value}%`,
                        duration: 1.2,
                        delay: index * 0.1 + 0.2,
                        ease: 'power2.out',
                    }
                );

                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [value, index]);

    return (
        <div className="odometer-container" ref={containerRef}>
            {icon && <img src={icon} alt="skill-icon" className="odometer-icon" />}
            <div className="odometer">
                <span className="line" ref={lineRef}></span>
            </div>
        </div>
    );
};
