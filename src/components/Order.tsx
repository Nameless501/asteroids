'use client';

import { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import CardsList from '@/components/AsteroidsList';
import styles from '@/styles/feed.module.css';
import utilsStyles from '@/styles/utils.module.css';
import { ORDER_STORAGE_KEY, UNITS_PARAM_KEY } from '@/configs/constants';
import { IAsteroid, UnitsTypes } from '@/types/types';

const Order: FC = () => {
    const [orderedItems, setOrderItems] = useState<IAsteroid[]>([]);

    const [units, setUnits] = useState<UnitsTypes>(UnitsTypes.kilometers);

    const searchParams = useSearchParams();

    useEffect(() => {
        const order = sessionStorage.getItem(ORDER_STORAGE_KEY);
        setOrderItems(order ? JSON.parse(order) : []);
    }, []);

    useEffect(() => {
        const unitsParam = searchParams.get(UNITS_PARAM_KEY);
        if (unitsParam) {
            setUnits(UnitsTypes[unitsParam as keyof typeof UnitsTypes]);
        }
    }, [searchParams]);

    return (
        <section className={`${styles.section} ${utilsStyles['flex-column']}`}>
            <div
                className={`${utilsStyles['flex-column']} ${utilsStyles['gap-xs']}`}
            >
                <h1 className={utilsStyles['text-h1']}>Заказ отправлен!</h1>
            </div>
            <CardsList
                asteroidsData={orderedItems}
                showButton={false}
                units={units}
            />
        </section>
    );
};

export default Order;
