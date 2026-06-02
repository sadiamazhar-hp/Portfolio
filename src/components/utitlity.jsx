export const isElementInViewport = (elementRef) => {
    if (!elementRef.current) return false;

    const rect = elementRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    return rect.top < windowHeight && rect.bottom > 0;
};
