import { FC, ReactNode, useRef } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import Spinner from '@/components/Spinner';
import styles from '@/styles/feed.module.css';
import utilsStyles from '@/styles/utils.module.css';
import { IAsteroid, CloseApproachData } from '@/types/types';

interface ICardsList<T> {
    list: T[];
    renderCard: (props: unknown) => ReactNode;
    isDone: boolean;
    renderNextBatch: () => void;
}

type CardsListProps = ICardsList<IAsteroid> | ICardsList<CloseApproachData>;

const CardsFeed: FC<CardsListProps> = ({
    list,
    renderCard,
    isDone,
    renderNextBatch,
}) => {
    const listEndRef = useRef<HTMLDivElement>(null);

    useIntersectionObserver(listEndRef, renderNextBatch);

    return (
        <div className={`${utilsStyles['flex-column']}`}>
            <ul
                className={`${utilsStyles['flex-column']} ${utilsStyles['gap-m']} ${utilsStyles.list}`}
            >
                {list.map((props, ind) => (
                    <li key={ind}>{renderCard(props)}</li>
                ))}
            </ul>
            {!isDone && (
                <div ref={listEndRef} className={styles.spinner}>
                    <Spinner />
                </div>
            )}
        </div>
    );
};

export default CardsFeed;
