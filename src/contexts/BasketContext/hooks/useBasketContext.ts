import { useContext } from 'react';
import BasketContext from '@/contexts/BasketContext/context/BasketContext';
import { IBasketContext } from '@/types/types';

export const useBasketContext = (): IBasketContext => {
    const contextValue = useContext(BasketContext);
    return { ...(contextValue as IBasketContext) };
};
