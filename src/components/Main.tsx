import { FC } from 'react';
import AsteroidsFeed from '@/components/AsteroidsFeed';
import Weather from '@/components/Weather';

const Main: FC = () => {
    return (
        <>
            <AsteroidsFeed />
            <Weather />
        </>
    );
};

export default Main;
