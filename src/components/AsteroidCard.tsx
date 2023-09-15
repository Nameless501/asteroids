import { FC, memo } from 'react';
import { useRouter } from 'next/navigation';
import { useUnitsContext } from '@/contexts/UnitsContext';
import Button from '@/components/Button';
import Distance from '@/components/Distance';
import Diameter from '@/components/Diameter';
import AsteroidIcon from '@/components/AsteroidIcon';
import styles from '@/styles/card.module.css';
import utilsStyles from '@/styles/utils.module.css';
import HazardBadge from '@/components/HazardBadge';
import { IAsteroid } from '@/types/types';
import { getFormattedDate } from '@/utils/utils';
import {
    ASTEROID_NAME_REGEX,
    ASTEROID_SIZE_THRESHOLD,
} from '@/configs/constants';
import { routesConfig } from '@/configs/configs';

const AsteroidCard: FC<IAsteroid> = memo(function Card({
    id,
    name,
    estimated_diameter,
    is_potentially_hazardous_asteroid,
    close_approach_data,
}) {
    const router = useRouter();

    const { units } = useUnitsContext();

    const diameter = Math.trunc(
        estimated_diameter.meters.estimated_diameter_max
    );

    const date = getFormattedDate(close_approach_data[0].close_approach_date);

    const formattedName = name.match(ASTEROID_NAME_REGEX);

    return (
        <article
            className={`${styles.card} ${utilsStyles['flex-column']} ${utilsStyles['gap-xs']}`}
        >
            <h2 className={utilsStyles['text-h2']}>{date}</h2>
            <div
                className={`${utilsStyles['flex-row']} ${utilsStyles['gap-xs']}`}
            >
                <Distance units={units} approachData={close_approach_data[0]} />
                <AsteroidIcon
                    size={diameter > ASTEROID_SIZE_THRESHOLD ? 'big' : 'small'}
                />
                <div className={utilsStyles['flex-column']}>
                    <p
                        className={`${utilsStyles['text-body-regular']} ${utilsStyles['text-bold']} ${utilsStyles['text-underline']}`}
                    >
                        {formattedName}
                    </p>
                    <Diameter diameter={diameter} fontSize="small" />
                </div>
            </div>
            <div
                className={`${utilsStyles['flex-row']} ${utilsStyles['gap-s']}`}
            >
                <Button
                    place="card"
                    text="Подробнее"
                    handleClick={() =>
                        router.push(routesConfig.getAsteroidRoute(id), {
                            scroll: false,
                        })
                    }
                />
                <HazardBadge
                    isHazardous={is_potentially_hazardous_asteroid}
                    fontSize="small"
                />
            </div>
        </article>
    );
});

export default AsteroidCard;
