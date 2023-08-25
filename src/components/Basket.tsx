import { FC } from 'react';
import { useBasketContext } from '@/contexts/BasketContext';
import { useUnitsContext } from '@/contexts/UnitsContext';
import Button from '@/components/Button';
import styles from '@/styles/basket.module.css';
import utilsStyles from '@/styles/utils.module.css';
import { pluralBasketConfig } from '@/configs/configs';
import { getLocalePlural } from '@/utils/utils';

const Basket: FC = () => {
    const { currentBasket, submitBasket } = useBasketContext();

    const { units } = useUnitsContext();

    return (
        <section
            className={`${styles.section} ${utilsStyles['flex-column']} ${utilsStyles['gap-l']}`}
        >
            <div className={utilsStyles['flex-column']}>
                <h3 className={utilsStyles['text-h3']}>Корзина</h3>
                <p className={utilsStyles['text-body-regular']}>
                    {`${currentBasket.length} ${
                        pluralBasketConfig[
                            getLocalePlural(currentBasket.length)
                        ]
                    }`}
                </p>
            </div>
            <Button
                place="basket"
                text="Отправить"
                handleClick={() => submitBasket(units)}
                disabled={currentBasket.length < 1}
            />
        </section>
    );
};

export default Basket;
