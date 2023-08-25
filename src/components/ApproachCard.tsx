import { FC } from 'react';
import Distance from '@/components/Distance';
import OrbitBodyIcon from '@/components/OrbitBodyIcon';
import utilsStyles from '@/styles/utils.module.css';
import { CloseApproachData, UnitsTypes } from '@/types/types';
import { getFormattedDate } from '@/utils/utils';
import { orbitBodiesNamesConfig } from '@/configs/configs';

interface IApproachCard {
    approachData: CloseApproachData;
    units: UnitsTypes;
}

const ApproachCard: FC<IApproachCard> = ({ approachData, units }) => {
    return (
        <div
            className={`${utilsStyles['flex-column']} ${utilsStyles['gap-xs']}`}
        >
            <h3>
                <span
                    className={`${utilsStyles['text-body-regular']} ${utilsStyles['text-gray']}`}
                >
                    Дата:&nbsp;
                </span>
                <span className={utilsStyles['text-h3']}>
                    {getFormattedDate(
                        approachData.close_approach_date_full,
                        true
                    )}
                </span>
            </h3>
            <div
                className={`${utilsStyles['flex-row']} ${utilsStyles['gap-xs']}`}
            >
                <span
                    className={`${utilsStyles['text-body-regular']} ${utilsStyles['text-gray']}`}
                >
                    Расстояние:
                </span>
                <Distance
                    approachData={approachData}
                    units={units}
                    rowGap={false}
                />
            </div>
            <div
                className={`${utilsStyles['flex-row']} ${utilsStyles['gap-xs']}`}
            >
                <span
                    className={`${utilsStyles['text-body-regular']} ${utilsStyles['text-gray']}`}
                >
                    Скорость:
                </span>
                <p
                    className={`${utilsStyles['text-text-body-regular']} ${utilsStyles['text-bold']}`}
                >
                    {parseInt(
                        approachData.relative_velocity.kilometers_per_hour
                    ) + ' км/ч'}
                </p>
            </div>
            <div
                className={`${utilsStyles['flex-row']} ${utilsStyles['gap-xs']}`}
            >
                <span
                    className={`${utilsStyles['text-body-regular']} ${utilsStyles['text-gray']}`}
                >
                    Орбита:
                </span>
                <p
                    className={`${utilsStyles['text-text-body-regular']} ${utilsStyles['text-bold']}`}
                >
                    {orbitBodiesNamesConfig[approachData.orbiting_body] ??
                        approachData.orbiting_body}
                </p>
                <OrbitBodyIcon orbit={approachData.orbiting_body} />
            </div>
        </div>
    );
};

export default ApproachCard;
