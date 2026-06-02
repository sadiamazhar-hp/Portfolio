import { useEffect, useRef, useState } from 'react';
import { isElementInViewport } from '../components/utitlity';

const useAnimateOnScroll = (animation) => {
    const elementRef = useRef(null);
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (isElementInViewport(elementRef)) {
                setVisible(true);
                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isVisible && elementRef.current && animation) {
            animation(elementRef.current);
        }
    }, [isVisible, animation]);

    return elementRef;
};

export default useAnimateOnScroll;
