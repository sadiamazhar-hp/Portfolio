import React, { useEffect, useRef } from 'react';
import TimelineElement from '../assets';
import Ring from './ring';
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';

const Timeline = () => {
    const textRef = useRef([]);
    const timelineRef = useRef(null);

    const { ref, inView } = useInView({
        threshold: 0.2,
    });

    const animation = (elements) => {
        elements.forEach((element, index) => {
            if (element) {
                gsap.fromTo(
                    element,
                    { x: -100, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1.6,
                        delay: index * 1.0,
                        ease: 'power2.out',
                    }
                );
            }
        });
    };

    useEffect(() => {
        if (inView && textRef.current.length) {
            animation(textRef.current);
        }
    }, [inView]);

    return (
        <div
            ref={(el) => {
                timelineRef.current = el;
                ref(el);
            }}
            className="flex flex-col justify-start items-start sm:text-lg p-4 relative ml-4 md:ml-20 flex-wrap expsec"
        >
            {TimelineElement.map((element, index) => (
                <div key={element.id ?? index} className="flex items-center w-full h-lineheight">
                    <div className="flex-shrink-0">
                        <Ring active={inView} index={index} />
                    </div>
                    <div
                        ref={(el) => (textRef.current[index] = el)}
                        className="relative w-full max-w-sm md:w-80 p-4 exp exp-card"
                    >
                        <div className="text-lg font-bold uppercase exp-title">{element.title}</div>
                        <div className="text-sm relative exp-date">{element.date}</div>
                        <div className="text-sm mt-2 mb-2 exp-description">{element.description}</div>
                        <div className="flex flex-wrap mt-2">
                            {element.teckstack.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className="text-xs rounded-md m-1 px-2 py-1 exp-tech"
                                >
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
