import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import "./ring.css";

const Ring = ({ active, index = 0 }) => {
    const mycircle = useRef(null);
    const mycircle2 = useRef(null);
    const line1 = useRef(null);
    const line2 = useRef(null);

    useEffect(() => {
        if (!active) return undefined;

        const resetRing = () => {
            gsap.set(mycircle.current, {
                borderTopColor: '#3498db',
                borderRightColor: '#3498db',
                borderBottomColor: '#3498db',
                borderLeftColor: '#3498db',
            });
            gsap.set(mycircle2.current, { opacity: 0 });
            gsap.set(line1.current, { opacity: 0 });
            gsap.set(line2.current, { opacity: 0 });
        };

        resetRing();

        const ringDelay = index * 0.25;
        const segmentDuration = 0.2;

        if (mycircle.current) {
            gsap.set(mycircle.current, {
                borderTopColor: '#3498db',
                borderRightColor: 'transparent',
                borderBottomColor: 'transparent',
                borderLeftColor: 'transparent',
            });

            gsap.to(mycircle.current, {
                duration: segmentDuration,
                delay: ringDelay,
                borderTopColor: 'transparent',
                borderRightColor: '#3498db',
                ease: 'power2.inOut',
                onComplete: () => {
                    gsap.to(mycircle.current, {
                        duration: segmentDuration,
                        borderRightColor: 'transparent',
                        borderBottomColor: '#3498db',
                        ease: 'power2.inOut',
                        onComplete: () => {
                            gsap.to(mycircle.current, {
                                duration: segmentDuration,
                                borderBottomColor: 'transparent',
                                borderLeftColor: '#3498db',
                                ease: 'power2.inOut',
                                onComplete: () => {
                                    gsap.to(mycircle.current, {
                                        duration: segmentDuration,
                                        borderLeftColor: 'transparent',
                                        ease: 'power2.inOut',
                                        onComplete: () => {
                                            gsap.to(mycircle.current, {
                                                duration: segmentDuration,
                                                borderTopColor: '#3498db',
                                                borderRightColor: '#3498db',
                                                borderBottomColor: '#3498db',
                                                borderLeftColor: '#3498db',
                                                ease: 'power2.inOut',
                                            });
                                        },
                                    });
                                },
                            });
                        },
                    });
                },
            });
        }

        if (mycircle2.current) {
            gsap.to(mycircle2.current, {
                duration: 0.6,
                delay: ringDelay + 0.15,
                opacity: 1,
                scale: 1.1,
                ease: 'power2.out',
            });
        }

        gsap.to(line1.current, {
            duration: 0.4,
            delay: ringDelay + 0.2,
            opacity: 1,
            ease: 'power2.out',
            onComplete: () => {
                gsap.to(line2.current, {
                    duration: 0.4,
                    opacity: 1,
                    ease: 'power2.out',
                });
            },
        });

        return undefined;
    }, [active, index]);

    return (
        <div className="ring-container">
            <div ref={mycircle} className="ring">
                <span ref={mycircle2} className='circle'></span>
            </div>
            <div ref={line1} className="w-1 h-24 bg-gray-400"></div>
            <div ref={line2} className="w-1 h-24 bg-gray-400"></div>
        </div>
    );
};

export default Ring;
