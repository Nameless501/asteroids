import { FC, ReactNode } from 'react';
import styles from '@/styles/tooltip.module.css';
import utilsStyles from '@/styles/utils.module.css';

interface ITooltip {
    text: string;
    isOpen: boolean;
    children: ReactNode;
}

const Tooltip: FC<ITooltip> = ({ text, isOpen, children }) => {
    return (
        <div className={styles.wrapper}>
            {children}
            <span
                className={`${styles.tooltip} ${
                    isOpen ? styles.tooltip_active : ''
                } ${utilsStyles['text-body-micro']} ${
                    utilsStyles['text-bold']
                }`}
            >
                {text}
            </span>
        </div>
    );
};

export default Tooltip;
