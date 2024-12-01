import React, { useEffect, useRef } from 'react';
import { fadeInAnimation } from '../animation';


const ScrollTopPercentage = () => {
    const scrollElementRef = useRef(null);
    const scrollValueRef = useRef(null);

    useEffect(() => {
        const updateScrollPercentage = () => {
            const scrollTopPos = document.documentElement.scrollTop;
            const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollValue = Math.round((scrollTopPos / calcHeight) * 100);

            if (scrollElementRef.current) {
                scrollElementRef.current.style.background = `conic-gradient(var(--rr-color-theme-primary) ${scrollValue}%, var(--rr-color-common-white) ${scrollValue}%)`;
                
                // Add or remove 'active' class based on scroll position
                if (scrollTopPos > 100) {
                    scrollElementRef.current.classList.add('active');
                } else {
                    scrollElementRef.current.classList.remove('active');
                }
            }

            // Update the scroll percentage value or show an icon
            if (scrollValueRef.current) {
                if (scrollValue < 96) {
                    scrollValueRef.current.textContent = `${scrollValue}%`;
                } else {
                    scrollValueRef.current.innerHTML = '<img src="./images/p.png"></img>';
                    fadeInAnimation(scrollValueRef.current.querySelector('img'));
                }
            }
        };

        // Function to scroll back to top
        const scrollToTop = () => {
            document.documentElement.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };

        // Add event listeners
        window.addEventListener('scroll', updateScrollPercentage);
        window.addEventListener('load', updateScrollPercentage);

        if (scrollElementRef.current) {
            scrollElementRef.current.addEventListener('click', scrollToTop);
        }

        // Cleanup event listeners on component unmount
        return () => {
            window.removeEventListener('scroll', updateScrollPercentage);
            window.removeEventListener('load', updateScrollPercentage);
            if (scrollElementRef.current) {
                scrollElementRef.current.removeEventListener('click', scrollToTop);
            }
        };
    }, []);

    return (
        <div id="scroll-percentage" ref={scrollElementRef} style={{ width: '50px', height: '50px', borderRadius: '50%', position: 'fixed', bottom: '20px', right: '20px', cursor: 'pointer' }}>
            <span id="scroll-percentage-value" ref={scrollValueRef}></span>
        </div>
    );
};

export default ScrollTopPercentage;
