import React, { useEffect, useRef, useState } from 'react';
import { Odometer } from './odometer.jsx';
import { slideInFromLeft} from '../animation.jsx';
import useAnimateOnScroll from '../hooks/TextScrollAnimation.jsx';

const Skills = () => {

    const textRef = useAnimateOnScroll(slideInFromLeft);
    return (
        <section id="skills">
            <h1 className='heading' ref={textRef}>MY SKILLS</h1>
            <div id="skillsection">
            <Odometer icon={"./images/net.png"} value={85} />
            <Odometer icon={"./images/react.png"} value={65} />
            <Odometer icon={"./images/s.png"} value={60} />
            <Odometer icon={"./images/js.png"} value={72} />
            <Odometer icon={"./images/py.png"} value={40} />
            <Odometer icon={"./images/Postman.png"} value={80} />
            <Odometer icon={"./images/git.png"} value={80} />
            <Odometer icon={"./images/figma.png"} value={60} />
            </div>
        </section>
    );
}
export default Skills;