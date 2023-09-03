import { FC } from 'react';
import Logo from './Logo';
import styles from '@/styles/layout.module.css';
import utilsStyles from '@/styles/utils.module.css';

const Header: FC = () => {
    return (
        <header className={`${styles.header} ${utilsStyles['flex-row']}`}>
            <Logo />
        </header>
    );
};

export default Header;
