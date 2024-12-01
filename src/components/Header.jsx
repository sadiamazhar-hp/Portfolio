import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Import hooks
import { gsap } from 'gsap';
import { toggleNavbar } from './reducer'; // Import the action

const Header = () => {
    const dispatch = useDispatch(); // To dispatch actions
    const isOpen = useSelector((state) => state.navbar.isOpen); // To access the isOpen state

    const toggleNavbarHandler = () => {
        dispatch(toggleNavbar()); // Dispatch the action to toggle navbar
    };

    useEffect(() => {
        if (isOpen) {
            gsap.to('.hamburger .line:nth-child(1)', { rotate: 45, y: 8, duration: 0.3 });
            gsap.to('.hamburger .line:nth-child(2)', { opacity: 0, duration: 0.3 });
            gsap.to('.hamburger .line:nth-child(3)', { rotate: -45, y: -8, duration: 0.3 });
            
            // Delay the navbar display by 10 seconds
            setTimeout(() => {
                gsap.to('.navbar', { opacity: 1, duration: 0.2 });
                document.querySelector('.navbar').classList.add('show');
                document.querySelector('.navbar').classList.remove('hide');
            },0); // 10-second delay
        } else {
            gsap.to('.hamburger .line:nth-child(1)', { rotate: 0, y: 0, duration: 0.3 });
            gsap.to('.hamburger .line:nth-child(2)', { opacity: 1, duration: 0.3 });
            gsap.to('.hamburger .line:nth-child(3)', { rotate: 0, y: 0, duration: 0.3 });

            // Hide the navbar immediately
            gsap.to('.navbar', { opacity: 0, duration: 0 });
            document.querySelector('.navbar').classList.add('hide');
            document.querySelector('.navbar').classList.remove('show');

            
        }
    }, [isOpen]);

    return (
        <header>
            <button className={`hamburger ${isOpen ? ' ' : ''}`} onClick={toggleNavbarHandler}>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </button>
            <nav className={`navbar`}>
                <ul>
                    <li><a href="#aboutus">About Us</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#social">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
