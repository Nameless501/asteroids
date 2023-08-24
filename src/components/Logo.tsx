import { FC } from 'react';
import styles from '@/styles/logo.module.css';
import Link from 'next/link';
import { routesConfig } from '@/configs/configs';

const Logo: FC = () => {
    return (
        <Link href={routesConfig.getMainRoute()}>
            <span className={styles.logo}>
                ARMAGEDDON 2023
            </span>
        </Link>
    );
};

export default Logo;