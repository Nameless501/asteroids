import { FC } from 'react';
import { useUnitsContext } from '@/contexts/UnitsContext';
import ApproachCard from '@/components/ApproachCard';
import utilsStyles from '@/styles/utils.module.css';
import { CloseApproachData } from '@/types/types';

interface IApproachesList {
    closeApproaches: CloseApproachData[];
}

const ApproachesList: FC<IApproachesList> = ({ closeApproaches }) => {
    const { units } = useUnitsContext();

    return (
        <ul
            className={`${utilsStyles['flex-column']} ${utilsStyles['gap-m']} ${utilsStyles.list}`}
        >
            {closeApproaches.map((approachData, ind) => (
                <li key={ind}>
                    <ApproachCard approachData={approachData} units={units} />
                </li>
            ))}
        </ul>
    );
};

export default ApproachesList;
