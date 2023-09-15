import { apiRoutesConfig } from '@/configs/configs';
import { INotification } from '@/types/types';

export const fetchWeatherNotificationData = async (): Promise<
    INotification[]
> => {
    try {
        const res = await fetch(apiRoutesConfig.getWeatherNotificationsURL(), {
            cache: 'no-store',
        });
        const data = await res.json();
        return data;
    } catch (e) {
        throw new Error();
    }
};
