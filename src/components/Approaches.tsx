'use client';

import { FC, useState } from 'react';
import { UnitsContextProvider } from '@/contexts/UnitsContext';
import UnitsSelect from '@/components/UnitsSelect';
import CardsFeed from '@/components/CardsFeed';
import ApproachCard from '@/components/ApproachCard';
import { CloseApproachData } from '@/types/types';
import styles from '@/styles/feed.module.css';
import utilsStyles from '@/styles/utils.module.css';
import { CARDS_COUNT } from '@/configs/constants';

interface IApproaches {
    closeApproaches: CloseApproachData[];
}

const Approaches: FC<IApproaches> = ({ closeApproaches }) => {
    const [renderedCards, setRenderedCards] = useState<CloseApproachData[]>(
        closeApproaches.slice(0, CARDS_COUNT)
    );

    const renderNextBatch = () => {
        const start = renderedCards.length + 1;
        setRenderedCards((cur) =>
            closeApproaches.length <= start + CARDS_COUNT
                ? closeApproaches
                : [...cur, ...closeApproaches.slice(start, start + CARDS_COUNT)]
        );
    };

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
                <CardsFeed
                    list={renderedCards}
                    renderCard={(props) => (
                        <ApproachCard {...(props as CloseApproachData)} />
                    )}
                    isDone={closeApproaches.length <= renderedCards.length}
                    renderNextBatch={renderNextBatch}
                />
            </UnitsContextProvider>
        </section>
    );
};

export default Approaches;
