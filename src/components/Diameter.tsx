import { FC } from 'react';
import utilsStyles from '@/styles/utils.module.css';

interface IDiameter {
    diameter: number;
    fontSize: 'big' | 'small';
}

const Diameter: FC<IDiameter> = ({ diameter, fontSize }) => {
    return (
        <p
            className={
                fontSize === 'small'
                    ? utilsStyles['text-body-micro']
                    : utilsStyles['text-h3']
            }
        >
            {`Ø ${diameter} м`}
        </p>
    );
};

export default Diameter;
