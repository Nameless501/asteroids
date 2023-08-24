import { createContext } from 'react';
import { IBasketContext } from '@/types/types';

const BasketContext = createContext<IBasketContext | null>(
    null
);

export default BasketContext;
