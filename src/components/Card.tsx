import { FC, memo } from 'react';
import Button from '@/components/Button';
import AsteroidIcon from '@/components/AsteroidIcon';
import styles from '@/styles/card.module.css';
import utilsStyles from '@/styles/utils.module.css';
import HazardBadge from './HazardBadge';
import { IAsteroid, UnitsTypes } from '@/types/types';
import { getFormattedDate, getLocalePlural } from '@/utils/utils';
import { ASTEROID_NAME_REGEX } from '@/configs/constants';
import { pluralDistanceConfig } from '@/configs/configs';

interface ICard extends IAsteroid {
    units: UnitsTypes,
    showButton: boolean,
    handleClick?: () => void,
    inBasket?: boolean,
}

const Card: FC<ICard> = memo(function Card({ name, estimated_diameter, is_potentially_hazardous_asteroid, close_approach_data, units, showButton, handleClick, inBasket }) {
    const diameter = Math.trunc(estimated_diameter.meters.estimated_diameter_max);

    const distance = Number.parseInt(close_approach_data[0].miss_distance[units]);

    const date = getFormattedDate(close_approach_data[0].close_approach_date);

    const formattedName = name.match(ASTEROID_NAME_REGEX);

    return (
        <article className={`${styles.card} ${utilsStyles['flex-column']} ${utilsStyles['gap-xs']}`}>
            <h2 className={utilsStyles['text-h2']}>
                {date}
            </h2>
            <div className={`${utilsStyles['flex-row']} ${utilsStyles['gap-xs']}`}>
                <div className={`${utilsStyles['flex-column']} ${utilsStyles['gap-xs']}`}>
                    <p className={utilsStyles['text-body-regular']}>
                        {`${distance.toLocaleString()} ${pluralDistanceConfig[units][getLocalePlural(distance)]}`}
                    </p>
                    <span className={styles.arrow} />
                </div>
                <AsteroidIcon size={diameter > 500 ? 'big' : 'small'} />
                <div className={utilsStyles['flex-column']}>
                    <p className={`${utilsStyles['text-body-regular']} ${utilsStyles['text-bold']} ${utilsStyles['text-underline']}`}>
                        {formattedName}
                    </p>
                    <p className={utilsStyles['text-body-micro']}>
                        {`Ø ${diameter} м`}
                    </p>
                </div>
            </div>
            <div className={`${utilsStyles['flex-row']} ${utilsStyles['gap-s']}`}>
                {
                    showButton &&
                    <Button
                        place='card'
                        inBasket={inBasket}
                        text={inBasket ? 'В корзине' : 'Заказать'}
                        handleClick={handleClick}
                    />
                }
                <HazardBadge isHazardous={is_potentially_hazardous_asteroid} />
            </div>
        </article>
    );
})

export default Card;