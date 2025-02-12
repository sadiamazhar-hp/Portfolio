import React, { useEffect, useState, useRef } from 'react';
import TimelineElement from '../assets';
import Ring from './ring';
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer'; // Import useInView hook for a simpler approach

const Timeline = () => {
    const [activeElement, setActiveElement] = useState(false);
    const textRef = useRef([]);
    const timelineRef = useRef(null);

    // Using Intersection Observer
    const { ref, inView } = useInView({
        threshold: 0.2, // Trigger when 10% of the component is visible
    });

    const animation = (elements) => {
        elements.forEach((element, index) => {
            if (element) {
                gsap.fromTo(
                    element,
                    { x: -100, opacity: 0 },
                    { x: 0, opacity: 1, delay: index * 0.3 } // Stagger animations by 0.3s
                );
            }
        });
    };
    
    useEffect(() => {
        if (inView && textRef.current.length) {
            animation(textRef.current);
            setActiveElement(true);
        }
    }, [inView]); // Run animation when the element is in view

    return (
        <div ref={(el) => {
            timelineRef.current = el; // Set reference to main div
            ref(el); // Attach ref to the Intersection Observer
        }} className="flex flex-col justify-start items-start sm:text-lg p-4 relative ml-20 flex-wrap expsec">
            {TimelineElement.map((element, index) => (
                <div key={index} className="flex items-center w-full h-lineheight">
                    <div className=""><Ring active={inView} /></div>
                    {/* Card */}
                    <div ref={(el) => (textRef.current[index] = el)} className='relative shadow-sh hover:shadow-sh-light transition-shadow duration-300 bg-gray-300 w-80 p-4 rounded-lg shadow-lg exp'>
                        <div className='text-lg font-bold text-gray-800 uppercase'>{element.title}</div>
                        <div className="text-sm text-gray-400 relative">{element.date}</div>
                        <div className='text-sm text-gray-700 mt-2 mb-2'>{element.description}</div>
                        <div className="flex flex-wrap mt-2">
                            {element.teckstack.map((tech, index) => (
                               <span key={index} style={{ backgroundColor: '#bdb9b9' }} className='text-xs text-gray-200 rounded-md shadow-lg m-1 px-2 py-1'>
                                {tech}
                            </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
