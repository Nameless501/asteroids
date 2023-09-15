import { FC } from 'react';
import { useUnitsContext } from '@/contexts/UnitsContext';
import Distance from '@/components/Distance';
import OrbitBodyIcon from '@/components/OrbitBodyIcon';
import utilsStyles from '@/styles/utils.module.css';
import { CloseApproachData } from '@/types/types';
import { getFormattedDate } from '@/utils/utils';
import { orbitBodiesNamesConfig } from '@/configs/configs';

const ApproachCard: FC<CloseApproachData> = (props) => {
    const { epoch_date_close_approach, relative_velocity, orbiting_body } =
        props;

    const { units } = useUnitsContext();

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
                    {getFormattedDate(epoch_date_close_approach, true)}
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
                <Distance approachData={props} units={units} rowGap={false} />
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
                    {parseInt(relative_velocity.kilometers_per_hour) + ' км/ч'}
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
                    {orbitBodiesNamesConfig[orbiting_body] ?? orbiting_body}
                </p>
                <OrbitBodyIcon orbit={orbiting_body} />
            </div>
        </div>
    );
};

export default ApproachCard;
