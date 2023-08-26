import { FC, SyntheticEvent } from 'react';
import styles from '@/styles/button.module.css';
import utilsStyles from '@/styles/utils.module.css';

interface IButton {
    text: string;
    place: 'card' | 'basket';
    inBasket?: boolean;
    handleClick?: (evt: SyntheticEvent) => unknown;
    disabled?: boolean;
}

const Button: FC<IButton> = ({
    text,
    place,
    inBasket,
    handleClick,
    disabled = false,
}) => {
    return (
        <button
            className={`
                ${styles.button} 
                ${styles[`button_place_${place}`]}
                ${inBasket && styles['button_state_in-basket']}
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
