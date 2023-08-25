import { FC } from 'react';
import styles from '@/styles/distance.module.css';
import utilsStyles from '@/styles/utils.module.css';
import { CloseApproachData, UnitsTypes } from '@/types/types';
import { getLocalePlural } from '@/utils/utils';
import { pluralDistanceConfig } from '@/configs/configs';
import { RU_LOCALE } from '@/configs/constants';

interface IDistance {
    approachData: CloseApproachData;
    units: UnitsTypes;
}

const Distance: FC<IDistance> = ({ approachData, units }) => {
    const distance = Number.parseInt(approachData.miss_distance[units]);

    const formattedDistance = distance.toLocaleString(RU_LOCALE);

    const distanceUnits =
        pluralDistanceConfig[units][getLocalePlural(distance)];

    return (
        <div
            className={`${utilsStyles['flex-column']} ${utilsStyles['gap-xs']}`}
        >
            <p className={utilsStyles['text-body-regular']}>
                {`${formattedDistance} ${distanceUnits}`}
            </p>
            <span className={styles.arrow} />
        </div>
    );
};

export default Distance;
