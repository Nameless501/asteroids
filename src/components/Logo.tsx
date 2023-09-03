import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { logoIconConfig, routesConfig } from '@/configs/configs';
import styles from '@/styles/logo.module.css';
import utilsStyles from '@/styles/utils.module.css';

const Logo: FC = () => {
    return (
        <Link
            href={routesConfig.getMainRoute()}
            className={`${utilsStyles['flex-row']} ${utilsStyles['align-center']}`}
        >
            <span className={styles.logo}>space</span>
            <Image
                src={logoIconConfig.src}
                alt={logoIconConfig.alt}
                width={40}
                height={40}
            />
            <span className={styles.logo}>monitor</span>
        </Link>
    );
};

export default Logo;
