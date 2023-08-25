import { FC, ReactNode, useState } from 'react';
import { useRouter } from 'next/navigation';
import BasketContext from '@/contexts/BasketContext/context/BasketContext';
import { IAsteroid, UnitsTypes } from '@/types/types';
import { routesConfig } from '@/configs/configs';
import { ORDER_STORAGE_KEY } from '@/configs/constants';

interface IBasketContextProvider {
    children: ReactNode;
}

export const BasketContextProvider: FC<IBasketContextProvider> = ({
    children,
}) => {
    const router = useRouter();

    const [currentBasket, setCurrentBasket] = useState<IAsteroid[]>([]);

    const toggleBasketItem = (asteroid: IAsteroid): void => {
        if (currentBasket.some((el) => el.id === asteroid.id)) {
            setCurrentBasket((cur) =>
                cur.filter((el) => el.id !== asteroid.id)
            );
        } else {
            setCurrentBasket((cur) => [...cur, asteroid]);
        }
    };

    const submitBasket = (units: UnitsTypes) => {
        sessionStorage.setItem(
            ORDER_STORAGE_KEY,
            JSON.stringify(currentBasket)
        );
        setCurrentBasket([]);
        router.push(routesConfig.getOrderRoute(units));
    };

    return (
        <BasketContext.Provider
            value={{
                currentBasket,
                toggleBasketItem,
                submitBasket,
            }}
        >
            {children}
        </BasketContext.Provider>
    );
};
