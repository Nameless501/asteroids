import { FC, useState, useRef, useCallback } from 'react';
import { useBasketContext } from '@/contexts/BasketContext';
import { useUnitsContext } from '@/contexts/UnitsContext';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import CardsList from '@/components/CardsList';
import UnitsSelect from '@/components/UnitsSelect';
import Spinner from './Spinner';
import { IApiResponse, IAsteroid } from '@/types/types';
import styles from '@/styles/feed.module.css';
import utilsStyles from '@/styles/utils.module.css';
import { CARDS_COUNT } from '@/configs/constants';
import { getApiURL, getCurrentFormattedDate } from '@/utils/utils';

const CardsFeed: FC = () => {
    const listEndRef = useRef<HTMLDivElement>(null);

    const nextDateRef = useRef<string>(getCurrentFormattedDate());

    const [asteroidsData, setAsteroidsData] = useState<IAsteroid[]>([]);

    const [renderedData, setRenderedData] = useState<IAsteroid[]>([]);

    const [isObservable, setIsObservable] = useState<boolean>(true);

    const { toggleBasketItem, currentBasket } = useBasketContext();

    const { units } = useUnitsContext();

    const formatData = useCallback((data: IApiResponse): IAsteroid[] => {
        const formattedData = Object.values(data.near_earth_objects).flat();
        formattedData.sort((a,b) => a.close_approach_data[0].epoch_date_close_approach - b.close_approach_data[0].epoch_date_close_approach);
        return formattedData;
    }, [])

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

    const saveData = useCallback((data: IApiResponse): void => {
        setAsteroidsData(cur => [...cur, ...formatData(data)]);
        getNextDate(data);
        setIsObservable(true);
    }, [getNextDate, formatData]);

    const fetchAsteroidsData = useCallback(async () => {
        try {
            const res = await fetch(getApiURL(nextDateRef.current));
            const data = await res.json();
            saveData(data);
        } catch (err) {
            console.log(err);
        }
    }, [saveData]);

    const renderNextBatch = useCallback(() => {
        const start = renderedData.length > 0 ? renderedData.length + 1 : 0;
        const end = start + CARDS_COUNT;
        setRenderedData(cur => [...cur, ...asteroidsData.slice(start, end)]);
        setIsObservable(true);
    }, [renderedData, asteroidsData]);

    const renderMoreData = useCallback(async () => {
        if (renderedData.length >= asteroidsData.length - CARDS_COUNT) {
            await fetchAsteroidsData();
        }
        renderNextBatch();
    }, [renderedData, asteroidsData, renderNextBatch, fetchAsteroidsData]);

    useIntersectionObserver(listEndRef, ([{ isIntersecting }]) => {
        if (isIntersecting && isObservable) {
            setIsObservable(false);
            renderMoreData();
        };
    });

    return (
        <section className={`${styles.section} ${utilsStyles['flex-column']}`}>
            <div className={`${utilsStyles['flex-column']} ${utilsStyles['gap-xs']}`}>
                <h1 className={utilsStyles['text-h1']}>
                    Ближайшие подлёты астероидов
                </h1>
                <UnitsSelect />
            </div>
            <CardsList
                asteroidsData={renderedData}
                toggleBasketItem={toggleBasketItem}
                currentBasket={currentBasket}
                showButton={true}
                units={units}
            />
            <div ref={listEndRef} className={styles.spinner}>
                <Spinner />
            </div>
        </section>
    );
};

export default CardsFeed;