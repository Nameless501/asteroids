import { FC } from 'react';
import Diameter from '@/components/Diameter';
import HazardBadge from '@/components/HazardBadge';
import utilsStyles from '@/styles/utils.module.css';
import { IAsteroid } from '@/types/types';
import { getFormattedDate } from '@/utils/utils';

const AsteroidInfo: FC<IAsteroid> = ({
    estimated_diameter,
    is_potentially_hazardous_asteroid,
    orbital_data,
}) => {
    const diameter = Math.trunc(
        estimated_diameter.meters.estimated_diameter_max
    );

    return (
        <article
            className={`${utilsStyles['flex-column']} ${utilsStyles['gap-s']}`}
        >
            <div
                className={`${utilsStyles['flex-row']} ${utilsStyles['gap-xs']}`}
            >
                <p className={utilsStyles['text-h3']}>Диаметр:</p>
                <Diameter diameter={diameter} fontSize="big" />
            </div>
            <div
                className={`${utilsStyles['flex-row']} ${utilsStyles['gap-xs']}`}
            >
                <p className={utilsStyles['text-h3']}>Опасность:</p>
                <HazardBadge
                    isHazardous={is_potentially_hazardous_asteroid}
                    fontSize="big"
                />
            </div>
            <div
                className={`${utilsStyles['flex-row']} ${utilsStyles['gap-xs']}`}
            >
                <p className={utilsStyles['text-h3']}>Впервые обнаружен:</p>
                <p className={utilsStyles['text-h3']}>
                    {getFormattedDate(orbital_data.first_observation_date)}
                </p>
            </div>
        </article>
    );
};

export default AsteroidInfo;
