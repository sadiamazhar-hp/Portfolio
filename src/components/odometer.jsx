import React, { useEffect, useRef } from "react";
import $ from "jquery";
import { isElementInViewport } from './utitlity.jsx'; // Adjust the import path accordingly
import './odometer.css';

export const Odometer = ({ icon, value }) => {
    const lineRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (lineRef.current && isElementInViewport(lineRef)) {
                // Animate the width based on the value prop
                $(lineRef.current).animate(
                    {
                        width: `${value}%`,
                    },
                    300 // Animation duration in milliseconds
                );
                window.removeEventListener('scroll', handleScroll); // Remove listener after triggering
            }
        };

        window.addEventListener('scroll', handleScroll); // Add scroll listener
        handleScroll(); // Check immediately on mount

        return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup listener on component unmount
        };
    }, [value]); // Re-run the effect when the value changes

    return (
        <div className="odometer-container">
            {icon && <img src={icon} alt="skill-icon" className="odometer-icon" />}
            <div className="odometer">
                <span className="line" ref={lineRef}></span>
            </div>
        </div>
    );
};
