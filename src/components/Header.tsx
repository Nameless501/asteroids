import { FC } from 'react';
import Logo from './Logo';
import styles from '@/styles/layout.module.css';
import utilsStyles from '@/styles/utils.module.css';

const Header: FC = () => {
    return (
        <header className={`${styles.header} ${utilsStyles['flex-column']} ${utilsStyles['gap-xs']}`}>
            <Logo />
            <p className={utilsStyles['text-control-regular']}>
                ООО “Команда им. Б. Уиллиса”.
                <br/>
                Взрываем астероиды с 1998 года.
            </p>
        </header>
    );
};

export default Header;
