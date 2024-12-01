import React from 'react';
import useAnimateOnScroll from '../hooks/TextScrollAnimation';
import { slideInFromLeft } from '../animation';
import Timeline from './Timeline';


const Experience = () => {

    const text = useAnimateOnScroll(slideInFromLeft);
    return (
        <section id="experience">
            <h2 ref={text} className="heading">Education And Experience</h2>
            <div className="expsection">
                <Timeline/>
            </div>
        </section>
    );
}

export default Experience;
