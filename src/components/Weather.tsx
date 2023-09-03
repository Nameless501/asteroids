import { FC } from 'react';
import WeatherList from '@/components/WeatherList';
import {
    fetchHighSpeedStreamData,
    fetchSolarFlareData,
} from '@/actions/weatherData';
import styles from '@/styles/weather.module.css';
import utilsStyles from '@/styles/utils.module.css';

const Weather: FC = async () => {
    const flaresData = await fetchSolarFlareData();

    const highSpeedStreamData = await fetchHighSpeedStreamData();

    return (
        <section className={`${utilsStyles['gap-m']} ${styles.section}`}>
            <h2
                className={`${utilsStyles['text-h3']} ${utilsStyles['align-self-center']} ${utilsStyles['text-center']}`}
            >
                Погода в космосе за неделю
            </h2>
            <WeatherList
                flaresData={flaresData}
                highSpeedStreamData={highSpeedStreamData}
            />
        </section>
    );
};

export default Weather;
