'use client';

import { FC } from 'react';
import { UnitsContextProvider } from '@/contexts/UnitsContext';
import { BasketContextProvider } from '@/contexts/BasketContext';
import CardsFeed from '@/components/CardsFeed';
import Basket from '@/components/Basket';

const Main: FC = () => {
    return (
        <BasketContextProvider>
            <UnitsContextProvider>
                <CardsFeed />
                <Basket />
            </UnitsContextProvider>
        </BasketContextProvider>
    );
};

export default Main;