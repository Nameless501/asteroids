import { FC } from 'react';
import SizeScale from '@/components/SizeScale';
import HazardBadge from '@/components/HazardBadge';
import utilsStyles from '@/styles/utils.module.css';
import { IAsteroid } from '@/types/types';
import { getFormattedDate } from '@/utils/utils';

const AsteroidInfo: FC<IAsteroid> = ({
    estimated_diameter,
    is_potentially_hazardous_asteroid,
    orbital_data,
}) => {
    return (
        <article
            className={`${utilsStyles['flex-column']} ${utilsStyles['gap-s']}`}
        >
            <SizeScale {...estimated_diameter} />
            <div
                className={`${utilsStyles['flex-row']} ${utilsStyles['gap-xs']}`}
            >
                <p
                    className={`${utilsStyles['text-h3']} ${utilsStyles['text-gray']}`}
                >
                    Опасность:
                </p>
                <HazardBadge
                    isHazardous={is_potentially_hazardous_asteroid}
                    fontSize="big"
                />
            </div>
            <div
                className={`${utilsStyles['flex-row']} ${utilsStyles['gap-xs']}`}
            >
                <p
                    className={`${utilsStyles['text-h3']} ${utilsStyles['text-gray']}`}
                >
                    Впервые обнаружен:
                </p>
                <p className={utilsStyles['text-h3']}>
                    {getFormattedDate(orbital_data.first_observation_date)}
                </p>
            </div>
        </article>
    );
};

export default AsteroidInfo;
