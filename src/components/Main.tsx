import { FC } from 'react';
import Asteroids from '@/components/Asteroids';
import Weather from '@/components/Weather';

const Main: FC = () => {
    return (
        <>
            <Asteroids />
            <Weather />
        </>
    );
};

export default Main;
