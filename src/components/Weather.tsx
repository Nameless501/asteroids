import { FC } from 'react';
import WeatherList from '@/components/WeatherList';
import { fetchWeatherNotificationData } from '@/actions/weatherData';
import styles from '@/styles/weather.module.css';
import utilsStyles from '@/styles/utils.module.css';

const Weather: FC = async () => {
    const notificationsData = await fetchWeatherNotificationData();

    return (
        <section className={`${utilsStyles['gap-m']} ${styles.section}`}>
            <h2
                className={`${utilsStyles['text-h3']} ${utilsStyles['align-self-center']} ${utilsStyles['text-center']}`}
            >
                Погода в космосе за неделю
            </h2>
            <WeatherList notificationsData={notificationsData} />
        </section>
    );
};

export default Weather;
