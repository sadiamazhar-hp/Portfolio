import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import "./ring.css";

const Ring = (active) => {
    {/*const text = dates;*/}
    const mycircle = useRef(null);
    const mycircle2 = useRef(null);
    const line1 = useRef(null);
    const line2 = useRef(null);
    const line3 = useRef(null);
    
    // Function to reset the ring to its initial state
    const resetRing = () => {
        gsap.set(mycircle.current, {
            borderTopColor: '#3498db',
            borderRightColor: '#3498db',
            borderBottomColor: '#3498db',
            borderLeftColor: '#3498db',
        });
        gsap.set(mycircle2.current, { opacity: 0 }); // Reset opacity of mycircle2
        gsap.set(line1.current, { opacity: 0 }); // Reset opacity of line1
        gsap.set(line2.current, { opacity: 0 }); // Reset opacity of line2
        gsap.set(line3.current, { opacity: 0 }); // Reset opacity of line3
    };

    const drawing = () => {
        resetRing(); // Reset the ring state first

        if (mycircle.current) {
            // Set the initial border colors
            gsap.set(mycircle.current, {
                borderTopColor: '#3498db',
                borderRightColor: 'transparent',
                borderBottomColor: 'transparent',
                borderLeftColor: 'transparent'
            });

            // GSAP animation for the ring
            gsap.to(mycircle.current, {
                duration: 0.2,
                borderTopColor: 'transparent',
                borderRightColor: '#3498db',
                onComplete: () => {
                    gsap.to(mycircle.current, {
                        duration: 0.2,
                        borderRightColor: 'transparent',
                        borderBottomColor: '#3498db',
                        onComplete: () => {
                            gsap.to(mycircle.current, {
                                duration: 0.2,
                                borderBottomColor: 'transparent',
                                borderLeftColor: '#3498db',
                                onComplete: () => {
                                    gsap.to(mycircle.current, {
                                        duration: 0.2,
                                        borderLeftColor: 'transparent',
                                        onComplete: () => {
                                            // Reset the ring colors for the next animation
                                            gsap.to(mycircle.current, {
                                                duration: 0.2,
                                                borderTopColor: '#3498db',
                                                borderRightColor: '#3498db',
                                                borderBottomColor: '#3498db',
                                                borderLeftColor: '#3498db',
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }

        // Animate mycircle2
        if (mycircle2.current) {
            gsap.to(mycircle2.current, {
                duration: 2,
                opacity: 1,
                ease:'sine.in'
            });
        }

        // Sequential line animations
        
            gsap.to(line1.current, {
                duration: 0.8,
                opacity: 1,
                onComplete: () => {
                    gsap.to(line2.current, {
                        duration: 0.8,
                        opacity: 1,
                        
                    });
                }
            });
        
        
        
    };
    useEffect(()=>{
        if(active){
            drawing();
        }
    },[active])

    return (
        <div className="ring-container">
            {/*<div className='left-24 top-6 relative w-24'>{text}</div>*/}
            {/*<button className="button" onClick={drawing}>Click to Draw Ring</button>*/}
            <div ref={mycircle} className="ring">
                <span ref={mycircle2} className='circle'></span>
            </div>
            <div ref={line1} className="w-1 h-24 bg-gray-400"></div>
            <div ref={line2} className="w-1 h-24 bg-gray-400"></div>
            
        </div>
    );
};

export default Ring;
