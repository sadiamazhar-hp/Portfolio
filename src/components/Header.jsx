import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gsap } from 'gsap';
import { toggleNavbar } from './reducer';

const hamburgerEase = 'power2.inOut';
const hamburgerDuration = 0.35;

const Header = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.navbar.isOpen);

    const toggleNavbarHandler = () => {
        dispatch(toggleNavbar());
    };

    useEffect(() => {
        const navbar = document.querySelector('.navbar');

        if (isOpen) {
            gsap.to('.hamburger .line:nth-child(1)', {
                rotate: 45,
                y: 11,
                duration: hamburgerDuration,
                ease: hamburgerEase,
            });
            gsap.to('.hamburger .line:nth-child(2)', {
                opacity: 0,
                duration: hamburgerDuration,
                ease: hamburgerEase,
            });
            gsap.to('.hamburger .line:nth-child(3)', {
                rotate: -45,
                y: -11,
                duration: hamburgerDuration,
                ease: hamburgerEase,
            });

            gsap.to('.navbar', { opacity: 1, duration: 0.2, ease: hamburgerEase });
            navbar?.classList.add('show');
            navbar?.classList.remove('hide');
        } else {
            gsap.to('.hamburger .line:nth-child(1)', {
                rotate: 0,
                y: 0,
                duration: hamburgerDuration,
                ease: hamburgerEase,
            });
            gsap.to('.hamburger .line:nth-child(2)', {
                opacity: 1,
                duration: hamburgerDuration,
                ease: hamburgerEase,
            });
            gsap.to('.hamburger .line:nth-child(3)', {
                rotate: 0,
                y: 0,
                duration: hamburgerDuration,
                ease: hamburgerEase,
            });

            gsap.to('.navbar', { opacity: 0, duration: 0.2, ease: hamburgerEase });
            navbar?.classList.add('hide');
            navbar?.classList.remove('show');
        }
    }, [isOpen]);

    return (
        <header>
            <button
                className="hamburger"
                onClick={toggleNavbarHandler}
                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isOpen}
            >
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </button>
            <nav className={`navbar ${isOpen ? 'show' : 'hide'}`}>
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
