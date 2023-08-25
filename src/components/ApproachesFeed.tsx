'use client';

import { FC, useState, useRef } from 'react';
import { UnitsContextProvider } from '@/contexts/UnitsContext';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import UnitsSelect from '@/components/UnitsSelect';
import ApproachesList from '@/components/ApproachesList';
import Spinner from '@/components/Spinner';
import { CloseApproachData } from '@/types/types';
import styles from '@/styles/feed.module.css';
import utilsStyles from '@/styles/utils.module.css';
import { CARDS_COUNT } from '@/configs/constants';

interface IApproachesFeed {
    closeApproaches: CloseApproachData[];
}

const ApproachesFeed: FC<IApproachesFeed> = ({ closeApproaches }) => {
    const listEndRef = useRef<HTMLDivElement>(null);

    const [renderedCards, setRenderedCards] = useState<CloseApproachData[]>(
        closeApproaches.slice(0, CARDS_COUNT)
    );

    const renderNextCards = () => {
        const start = renderedCards.length + 1;
        setRenderedCards((cur) =>
            closeApproaches.length <= start + CARDS_COUNT
                ? closeApproaches
                : [...cur, ...closeApproaches.slice(start, start + CARDS_COUNT)]
        );
    };

    useIntersectionObserver(listEndRef, renderNextCards);

    return (
        <section
            className={`${styles.section} ${utilsStyles['flex-column']} ${utilsStyles['gap-l']}`}
        >
            <UnitsContextProvider>
                <div
                    className={`${utilsStyles['flex-column']} ${utilsStyles['gap-xs']}`}
                >
                    <h2 className={utilsStyles['text-h2']}>
                        Сближения с Землей:
                    </h2>
                    <UnitsSelect />
                </div>
                <ApproachesList closeApproaches={renderedCards} />
            </UnitsContextProvider>
            {renderedCards.length < closeApproaches.length && (
                <div ref={listEndRef} className={styles.spinner}>
                    <Spinner />
                </div>
            )}
        </section>
    );
};

export default ApproachesFeed;
