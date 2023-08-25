import { RefObject, useEffect } from 'react';

function useIntersectionObserver(
    target: RefObject<Element>,
    callback: IntersectionObserverCallback
) {
    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            const { isIntersecting } = entries[0];
            if (isIntersecting) callback(entries, observer);
        });
        target.current && observer.observe(target.current);
        return () => {
            target.current && observer.unobserve(target.current);
        };
    });
}

export default useIntersectionObserver;
