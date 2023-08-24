import { FC } from 'react';
import utilsStyles from '@/styles/utils.module.css';

interface IHazardBadge {
    isHazardous: boolean,
}

const HazardBadge: FC<IHazardBadge> = ({ isHazardous }) => {
    return (
        <span className={`${utilsStyles['text-body-small']} ${utilsStyles['text-gray']}`}>
            {isHazardous ? '⚠️ Опасен' : 'Не опасен'}
        </span>
    );
};

export default HazardBadge;