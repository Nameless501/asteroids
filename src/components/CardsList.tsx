import { FC } from 'react';
import Card from '@/components/Card';
import utilsStyles from '@/styles/utils.module.css';
import { IAsteroid, UnitsTypes } from '@/types/types';

interface ICardsList {
    asteroidsData: IAsteroid[],
    toggleBasketItem?: (asteroid: IAsteroid) => void,
    currentBasket?: IAsteroid[],
    showButton: boolean,
    units: UnitsTypes,

}

const CardsList: FC<ICardsList> = ({ asteroidsData, showButton, toggleBasketItem, units, currentBasket = []}) => {
    return (
        <ul className={`${utilsStyles['flex-column']} ${utilsStyles['gap-m']} ${utilsStyles.list}`}>
            {
                asteroidsData.map((asteroid, ind) => (
                    <li key={asteroid.id + ind}>
                        <Card
                            {...asteroid}
                            units={units}
                            handleClick={() => toggleBasketItem?.(asteroid)}
                            inBasket={currentBasket.some(el => el.id === asteroid.id)}
                            showButton={showButton}
                        />
                    </li>
                ))
            }
        </ul>
    );
};

export default CardsList;