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
            className={`${utilsStyles['flex-row']} ${utilsStyles['align-center']} ${utilsStyles['gap-xxs']} ${styles.logo}`}
        >
            <span className={styles.text}>space</span>
            <Image
                src={logoIconConfig.src}
                alt={logoIconConfig.alt}
                width={50}
                height={50}
            />
            <span className={styles.text}>monitor</span>
        </Link>
    );
};

export default Logo;
