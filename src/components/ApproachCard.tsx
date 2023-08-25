import { FC } from 'react';
import Distance from '@/components/Distance';
import utilsStyles from '@/styles/utils.module.css';
import { CloseApproachData, UnitsTypes } from '@/types/types';
import { getFormattedDate } from '@/utils/utils';

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
                <span className={utilsStyles['text-body-regular']}>
                    Дата:&nbsp;
                </span>
                <span className={utilsStyles['text-h3']}>
                    {getFormattedDate(approachData.close_approach_date)}
                </span>
            </h3>
            <div
                className={`${utilsStyles['flex-row']} ${utilsStyles['gap-xs']}`}
            >
                <p className={utilsStyles['text-body-regular']}>Расстояние:</p>
                <Distance approachData={approachData} units={units} />
            </div>
        </div>
    );
};

export default ApproachCard;
