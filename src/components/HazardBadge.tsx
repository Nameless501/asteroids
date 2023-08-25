import { FC } from 'react';
import utilsStyles from '@/styles/utils.module.css';

interface IHazardBadge {
    isHazardous: boolean;
    fontSize: 'big' | 'small';
}

const HazardBadge: FC<IHazardBadge> = ({ isHazardous, fontSize }) => {
    return (
        <span
            className={
                fontSize === 'small'
                    ? `${utilsStyles['text-body-small']} ${utilsStyles['text-gray']}`
                    : utilsStyles['text-h3']
            }
        >
            {isHazardous ? '⚠️ Опасен' : 'Не опасен'}
        </span>
    );
};

export default HazardBadge;
