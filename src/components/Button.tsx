import { FC, SyntheticEvent } from 'react';
import styles from '@/styles/button.module.css';
import utilsStyles from '@/styles/utils.module.css';

interface IButton {
    text: string;
    place: 'card' | 'basket';
    handleClick?: (evt: SyntheticEvent) => unknown;
    disabled?: boolean;
}

const Button: FC<IButton> = ({
    text,
    place,
    handleClick,
    disabled = false,
}) => {
    return (
        <button
            className={`
                ${styles.button} 
                ${styles[`button_place_${place}`]}
                ${place === 'card' && utilsStyles['text-control-small']}
                ${
                    place === 'basket' &&
                    `${utilsStyles['text-control-regular']} ${utilsStyles['text-bold']}`
                }
            `}
            onClick={handleClick}
            disabled={disabled}
        >
            {text}
        </button>
    );
};

export default Button;
