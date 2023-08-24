import { FC } from 'react';
import { useUnitsContext } from '@/contexts/UnitsContext';
import styles from '@/styles/select.module.css';
import utilsStyles from '@/styles/utils.module.css';
import { UnitsTypes } from '@/types/types';

const UnitsSelect: FC = () => {
    const { units, handleUnitsChange } = useUnitsContext();

    return (
        <div className={utilsStyles['flex-row']}>
            <label
                htmlFor='kilometers-units'
                className={`
                    ${styles.label}
                    ${utilsStyles['text-control-regular']}
                    ${units === UnitsTypes.kilometers ? utilsStyles['text-bold'] : utilsStyles['text-underline']}
                `}
            >
                в километрах
            </label>
            <input
                type='radio'
                id='kilometers-units'
                name='units'
                className={styles.radio}
                checked={units === UnitsTypes.kilometers}
                value={UnitsTypes.kilometers}
                onChange={() => handleUnitsChange(UnitsTypes.kilometers)}
            />

            <span className={utilsStyles['text-control-regular']}>
                &nbsp;|&nbsp;
            </span>

            <label
                htmlFor='lunar-units'
                className={`
                    ${styles.label}
                    ${utilsStyles['text-control-regular']}
                    ${units === UnitsTypes.lunar ? utilsStyles['text-bold'] : utilsStyles['text-underline']}
                `}
            >
                в лунных орбитах
            </label>
            <input
                type='radio'
                id='lunar-units'
                name='units'
                className={styles.radio}
                checked={units === UnitsTypes.lunar}
                value={UnitsTypes.lunar}
                onChange={() => handleUnitsChange(UnitsTypes.lunar)}
            />
        </div>
    );
};

export default UnitsSelect;