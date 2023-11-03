import { FC } from 'react';
import { fetchWeatherNotificationData } from '@/actions/weatherData';
import WeatherSection from './WeatherSection';

const Weather: FC = async () => {
    const notificationsData = await fetchWeatherNotificationData();

    return <WeatherSection notificationsData={notificationsData} />;
};

export default Weather;
