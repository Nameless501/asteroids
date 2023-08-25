import { FC } from 'react';
import AsteroidCard from '@/components/AsteroidCard';
import utilsStyles from '@/styles/utils.module.css';
import { IAsteroid, UnitsTypes } from '@/types/types';

interface IAsteroidsList {
    asteroidsData: IAsteroid[];
    toggleBasketItem?: (asteroid: IAsteroid) => void;
    currentBasket?: IAsteroid[];
    showButton: boolean;
    units: UnitsTypes;
}

const AsteroidsList: FC<IAsteroidsList> = ({
    asteroidsData,
    showButton,
    toggleBasketItem,
    units,
    currentBasket = [],
}) => {
    return (
        <ul
            className={`${utilsStyles['flex-column']} ${utilsStyles['gap-m']} ${utilsStyles.list}`}
        >
            {asteroidsData.map((asteroid, ind) => (
                <li key={asteroid.id + ind}>
                    <AsteroidCard
                        {...asteroid}
                        units={units}
                        handleClick={() => toggleBasketItem?.(asteroid)}
                        inBasket={currentBasket.some(
                            (el) => el.id === asteroid.id
                        )}
                        showButton={showButton}
                    />
                </li>
            ))}
        </ul>
    );
};

export default AsteroidsList;
