// animation.jsx
import { gsap } from 'gsap';

// Define a custom animation function for an element
export const fadeInAndScale = (element) => {
    gsap.fromTo(
        element,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
    );
};

// Another animation example
export const slideInFromLeft = (element) => {
    gsap.fromTo(
        element,
        { x: -200, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power2.out' }
    );
};
//animation from left
export const slidingfromleft = (element) => {
    gsap.fromTo(
        element,
        { x: -500, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.5, ease: 'power2.out' }
    );
};
export const fadeInAnimation = (element) => {
    gsap.fromTo(
        element,
        { opacity: 0 }, // Start with opacity 0
        { opacity: 1, duration: 2 } // Fade in to opacity 1 over 1 second
    );
};
export const bounceAnimation = (element) => {
    gsap.fromTo(element,
        { 
            y: 0, // Starting position
        },
        {
            y: -30, // Bounce height
            duration: 0.75,
            ease: "cubic-bezier(0.215, 0.61, 0.355, 1)", // Animation timing function
            yoyo: true, // Enable bounce effect by reversing animation
            repeat: -1, // Infinite bounce
            stagger: 0.1, // Delay between animations if applied to multiple elements
        }
    );
};
// GSAP clip-text animation
export const clipTextAnimation = (element) => {
    gsap.fromTo(element,
        { 
            clipPath: 'inset(0 100% 0 0)', // Start with clipping from the right
        },
        {
            clipPath: 'inset(0 0 0 0)', // Reveal text
            duration: 1, // Animation duration
            ease: 'power1.out', // Easing
        }
    );
};

// GSAP text-revealer animation
export const textRevealerAnimation = (element) => {
    gsap.fromTo(element,
        { 
            scaleX: 0, // Start with scaleX 0
            transformOrigin: '0% 50%', // Origin at the left
        },
        {
            scaleX: 1, // Full scale
            duration: 1, // Animation duration
            ease: 'power1.inOut', // Easing
            repeat: 1, // Repeat the animation once
            yoyo: true, // Reverse the animation
            transformOrigin: '100% 50%', // Origin at the right for the reverse
        }
    );
};

// GSAP border animation
export const borderAnimation = (topElement, rightElement, bottomElement, leftElement) => {
    // Animate the top border
    gsap.fromTo(topElement,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.5, delay: 0, ease: 'power1.out' }
    );
    // Animate the right border
    gsap.fromTo(rightElement,
        { scaleY: 0 },
        { scaleY: 1, duration: 0.5, delay: 0.5, ease: 'power1.out' }
    );
    // Animate the bottom border
    gsap.fromTo(bottomElement,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.5, delay: 1, ease: 'power1.out' }
    );
    // Animate the left border
    gsap.fromTo(leftElement,
        { scaleY: 0 },
        { scaleY: 1, duration: 0.5, delay: 1.5, ease: 'power1.out' }
    );
};
// GSAP rotation animation
export const rotationAnimation = (element) => {
    gsap.to(element, {
        rotation: 360, // Rotate 360 degrees
        duration: 2, // Animation duration
        ease: 'power1.inOut', // Easing
        repeat: -1, // Infinite rotation
    });
};
// GSAP tracking-in-expand animation
export const trackingInExpandAnimation = (element) => {
    gsap.fromTo(element,
        { 
            letterSpacing: '-8px', // Start with negative letter-spacing
            opacity: 0, // Start with opacity 0
        },
        {
            letterSpacing: '0px', // Expand to normal spacing
            opacity: 1, // Fade in
            duration: 1, // Animation duration
            ease: 'power1.out', // Easing
        }
    );
};
// GSAP tracking-in-expand-fwd animation
export const trackingInExpandFwdAnimation = (element) => {
    gsap.fromTo(element,
        {
            letterSpacing: '-0.5em', // Initial letter spacing
            z: -700, // Initial z position for 3D effect
            opacity: 0, // Start with opacity 0
        },
        {
            letterSpacing: '0em', // Expand letter-spacing
            z: 0, // Move to the original position
            opacity: 1, // Fade in
            duration: 1, // Animation duration
            ease: 'power1.out', // Easing
        }
    );
};
/* */
// Define more custom animations as needed
