import { useState, useEffect } from 'react';
import { SCREEN_SIZE_MOBILE, SCREEN_SIZE_TABLET } from '@/configs/constants';

function useScreenSize() {
    const [isDesktop, setIsDesktop] = useState<boolean>(false);

    const [isTablet, setIsTablet] = useState<boolean>(false);

    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        function handleResize() {
            setIsDesktop(() => window.innerWidth >= SCREEN_SIZE_TABLET);
            setIsTablet(
                () =>
                    window.innerWidth >= SCREEN_SIZE_MOBILE &&
                    window.innerWidth < SCREEN_SIZE_TABLET
            );
            setIsMobile(() => window.innerWidth < SCREEN_SIZE_MOBILE);
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return { isDesktop, isTablet, isMobile };
}

export default useScreenSize;
