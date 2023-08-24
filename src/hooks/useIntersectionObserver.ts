import { RefObject, useEffect } from 'react';

function useIntersectionObserver(target: RefObject<Element>, callback: IntersectionObserverCallback) {
    useEffect(() => {
        const observer = new IntersectionObserver(callback);
        target.current && observer.observe(target.current);
        return () => {
            target.current && observer.unobserve(target.current);
        };
    });
}

export default useIntersectionObserver;
