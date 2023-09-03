import { FC } from 'react';
import styles from '@/styles/layout.module.css';
import utilsStyles from '@/styles/utils.module.css';

const Footer: FC = () => {
    return (
        <footer
            className={`${styles.footer} ${utilsStyles['flex-row']} ${utilsStyles['gap-l']}`}
        >
            <p className={utilsStyles['text-control-regular']}>© 2023</p>
            <a
                href="https://github.com/Nameless501/asteroids"
                target="_blank"
                className={utilsStyles['text-control-regular']}
            >
                GihHub
            </a>
        </footer>
    );
};

export default Footer;
