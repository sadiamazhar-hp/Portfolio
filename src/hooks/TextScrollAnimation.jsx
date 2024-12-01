// useAnimateOnScroll.js
import { useEffect, useRef, useState } from 'react';
import { isElementInViewport } from '../components/utitlity'; // Assuming you have this utility function

const useAnimateOnScroll = (animation) => {
    const elementRef = useRef(null);
    const [isVisible, setVisible] = useState(false);

    const handleScroll = () => {
        if (isElementInViewport(elementRef)) {
            setVisible(true);
            window.removeEventListener('scroll', handleScroll);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // Cleanup
    }, []);

    useEffect(() => {
        if (isVisible && elementRef.current && animation) {
            animation(elementRef.current);
        }
    }, [isVisible, animation]);

    return elementRef;
};

export default useAnimateOnScroll;
