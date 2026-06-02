import React from 'react';
import { Odometer } from './odometer.jsx';
import { slideInFromLeft } from '../animation.jsx';
import useAnimateOnScroll from '../hooks/TextScrollAnimation.jsx';

const skills = [
    { icon: './images/net.png', value: 82 },
    { icon: './images/react.png', value: 55 },
    { icon: './images/s.png', value: 60 },
    { icon: './images/js.png', value: 72 },
    { icon: './images/py.png', value: 40 },
    { icon: './images/Postman.png', value: 61 },
    { icon: './images/git.png', value: 75 },
    { icon: './images/figma.png', value: 40 },
    { icon: './images/jira.png', value: 60 },
    { icon: './images/programing.png', value: 85 },
];

const Skills = () => {
    const textRef = useAnimateOnScroll(slideInFromLeft);

    return (
        <section id="skills">
            <h1 className='heading' ref={textRef}>MY SKILLS</h1>
            <div id="skillsection">
                {skills.map((skill, index) => (
                    <Odometer
                        key={skill.icon}
                        icon={skill.icon}
                        value={skill.value}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
};

export default Skills;
