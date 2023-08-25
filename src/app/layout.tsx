import { FC, ReactNode } from 'react';
import Image from 'next/image';
import {
    earthImageConfig,
    metaDataConfig,
    passionOneFontConfig,
} from '@/configs/configs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/styles/layout.module.css';
import { RU_LOCALE } from '@/configs/constants';
import '@/styles/globals.css';

export const metadata = metaDataConfig;

interface IRootLayout {
    children: ReactNode;
}

const RootLayout: FC<IRootLayout> = ({ children }) => {
    return (
        <html lang={RU_LOCALE}>
            <body className={passionOneFontConfig.variable}>
                <div className={`${styles.layout}`}>
                    <Header />
                    <div className={styles['image-wrapper']}>
                        <div className={styles.image}>
                            <Image
                                src={earthImageConfig.src}
                                fill={true}
                                alt={earthImageConfig.alt}
                                sizes={earthImageConfig.sizes}
                                priority={true}
                            />
                        </div>
                    </div>
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
};

export default RootLayout;
