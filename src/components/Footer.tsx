import { FC } from 'react';
import styles from '@/styles/layout.module.css';
import utilsStyles from '@/styles/utils.module.css';

const Footer: FC = () => {
    return (
        <footer className={`${styles.footer} ${utilsStyles['flex-row']}`}>
            <p className={utilsStyles['text-control-regular']}>
                © Все права и планета защищены
            </p>
        </footer>
    );
};

export default Footer;
