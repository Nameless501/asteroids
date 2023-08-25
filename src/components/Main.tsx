'use client';

import { FC } from 'react';
import { UnitsContextProvider } from '@/contexts/UnitsContext';
import { BasketContextProvider } from '@/contexts/BasketContext';
import AsteroidsFeed from '@/components/AsteroidsFeed';
import Basket from '@/components/Basket';

const Main: FC = () => {
    return (
        <BasketContextProvider>
            <UnitsContextProvider>
                <AsteroidsFeed />
                <Basket />
            </UnitsContextProvider>
        </BasketContextProvider>
    );
};

export default Main;
