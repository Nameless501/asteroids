'use client';

import { FC, useState } from 'react';
import WeatherList from '@/components/WeatherList';
import styles from '@/styles/weather.module.css';
import utilsStyles from '@/styles/utils.module.css';
import { INotification } from '@/types/types';
import useScreenSize from '@/hooks/useScreenSize';

interface IWeatherSection {
    notificationsData: INotification[];
}

const WeatherSection: FC<IWeatherSection> = ({ notificationsData }) => {
    const { isMobile } = useScreenSize();

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <section
            className={`${utilsStyles['gap-m']} ${styles.section} ${
                isOpen ? styles['section_opened'] : ''
            }`}
        >
            {isMobile ? (
                <div
                    className={`${utilsStyles['flex-row']} ${utilsStyles['gap-s']}`}
                    onClick={() => setIsOpen((cur) => !cur)}
                >
                    <h2
                        className={`${utilsStyles['text-h3']} ${utilsStyles['align-self-center']} ${utilsStyles['text-center']}`}
                    >
                        Погода в космосе за неделю
                    </h2>
                    <button
                        type="button"
                        className={`${styles.button} ${
                            isOpen ? styles['button_active'] : ''
                        }`}
                    />
                </div>
            ) : (
                <h2
                    className={`${utilsStyles['text-h3']} ${utilsStyles['align-self-center']} ${utilsStyles['text-center']}`}
                >
                    Погода в космосе за неделю
                </h2>
            )}
            <WeatherList notificationsData={notificationsData} />
        </section>
    );
};

export default WeatherSection;
