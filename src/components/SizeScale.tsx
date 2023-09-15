import { FC } from 'react';
import Diameter from '@/components/Diameter';
import utilsStyles from '@/styles/utils.module.css';
import { EstimatedDiameter } from '@/types/types';
import Image from 'next/image';

const SizeScale: FC<EstimatedDiameter> = ({ meters }) => {
    const diameter = Math.trunc(meters.estimated_diameter_max);

    return (
        <div
            className={`${utilsStyles['flex-column']} ${utilsStyles['gap-s']}`}
        >
            <div
                className={`${utilsStyles['flex-row']} ${utilsStyles['gap-xs']}`}
            >
                <p
                    className={`${utilsStyles['text-h3']} ${utilsStyles['text-gray']}`}
                >
                    Диаметр:
                </p>
                <Diameter diameter={diameter} fontSize="big" />
            </div>
        </div>
    );
};

export default SizeScale;
