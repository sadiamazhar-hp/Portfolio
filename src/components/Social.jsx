import { React, useEffect, useState } from 'react';
import { slideInFromLeft } from '../animation';
import useAnimateOnScroll from '../hooks/TextScrollAnimation';


const Social = () => {
    const textref = useAnimateOnScroll(slideInFromLeft);

    return (
        <>
           <section id="social">
            <h2 ref={textref} className="heading ">Connect</h2>
            <div className="socialsection relative z-50">
            <div className='social-box hover:shadow-sh'>
                <a href="mailto:sadiamazhar114@gmail.com?subject=Your">
                    <img src='images/GM.png'/>
                    </a></div>
            <div className='social-box hover:shadow-sh'>
                <a href="https://www.linkedin.com/in/sadia-mazhar-a847a9208/">
                <img src='images/LI.png'/>
                </a></div>

            <div className='social-box hover:shadow-sh'>
                <a href="https://www.instagram.com/khansadia114/">
                <img src='images/IG.png'/></a></div>
             
            </div>


        </section>
        </>
    );
}

export default Social;
