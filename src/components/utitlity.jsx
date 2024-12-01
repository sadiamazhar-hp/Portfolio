// utils.js or another utility file
export const isElementInViewport = (elementRef) => {
    if (!elementRef.current) return false;

    const rect = elementRef.current.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
