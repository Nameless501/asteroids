'use client';

import { FC, useState, useRef, useCallback } from 'react';
import { UnitsContextProvider } from '@/contexts/UnitsContext';
import CardsList from '@/components/CardsFeed';
import AsteroidCard from '@/components/AsteroidCard';
import UnitsSelect from '@/components/UnitsSelect';
import { IApiResponse, IAsteroid } from '@/types/types';
import styles from '@/styles/feed.module.css';
import utilsStyles from '@/styles/utils.module.css';
import { CARDS_COUNT, ERROR_MESSAGE } from '@/configs/constants';
import { getCurrentFormattedDate } from '@/utils/utils';
import { apiRoutesConfig } from '@/configs/configs';

const Asteroids: FC = () => {
    const nextDateRef = useRef<string>(getCurrentFormattedDate());

    const [asteroidsData, setAsteroidsData] = useState<IAsteroid[]>([]);

    const [renderedData, setRenderedData] = useState<IAsteroid[]>([]);

    const [isObservable, setIsObservable] = useState<boolean>(true);

    const [isError, setIsError] = useState<boolean>(false);

    const formatData = useCallback((data: IApiResponse): IAsteroid[] => {
        const formattedData = Object.values(data.near_earth_objects).flat();
        formattedData.sort(
            (a, b) =>
                a.close_approach_data[0].epoch_date_close_approach -
                b.close_approach_data[0].epoch_date_close_approach
        );
        return formattedData;
    }, []);

    const getNextDate = useCallback(({ links: { next } }: IApiResponse) => {
        const paramsString = next.split('?')[1];
        const searchParams = new URLSearchParams(paramsString);
        const newDate = searchParams.get('start_date');
        if (newDate) {
            nextDateRef.current = newDate;
        } else {
            setIsObservable(false);
        }
    }, []);

    const saveData = useCallback(
        (data: IApiResponse): void => {
            setAsteroidsData((cur) => [...cur, ...formatData(data)]);
            getNextDate(data);
            setIsObservable(true);
        },
        [getNextDate, formatData]
    );

    const fetchAsteroidsData = useCallback(async () => {
        try {
            const res = await fetch(
                apiRoutesConfig.getFeedURL(nextDateRef.current)
            );
            const data = await res.json();
            saveData(data);
        } catch (err) {
            setIsError(true);
        }
    }, [saveData]);

    const renderMoreData = useCallback(() => {
        const start = renderedData.length > 0 ? renderedData.length + 1 : 0;
        const end = start + CARDS_COUNT;
        setRenderedData((cur) => [...cur, ...asteroidsData.slice(start, end)]);
        setIsObservable(true);
    }, [renderedData, asteroidsData]);

    const renderNextBatch = useCallback(async () => {
        if (!isObservable) return;
        setIsObservable(false);
        if (renderedData.length >= asteroidsData.length - CARDS_COUNT) {
            await fetchAsteroidsData();
        }
        renderMoreData();
    }, [
        renderedData,
        asteroidsData,
        renderMoreData,
        fetchAsteroidsData,
        isObservable,
    ]);

    return (
        <UnitsContextProvider>
            <section
                className={`${styles.section} ${utilsStyles['flex-column']} ${utilsStyles['gap-m']}`}
            >
                <div
                    className={`${utilsStyles['flex-column']} ${utilsStyles['gap-xs']}`}
                >
                    <h1 className={utilsStyles['text-h1']}>
                        Ближайшие подлёты астероидов
                    </h1>
                    <UnitsSelect />
                </div>
                <CardsList
                    list={renderedData}
                    renderCard={(props) => (
                        <AsteroidCard {...(props as IAsteroid)} />
                    )}
                    isDone={isError}
                    renderNextBatch={renderNextBatch}
                />
                {isError && (
                    <p className={utilsStyles['text-body-regular']}>
                        {ERROR_MESSAGE}
                    </p>
                )}
            </section>
        </UnitsContextProvider>
    );
};

export default Asteroids;
