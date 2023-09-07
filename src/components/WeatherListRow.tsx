import { FC } from 'react';
import WeatherIcon from '@/components/WeatherIcon';
import utilsStyles from '@/styles/utils.module.css';
import { INotification, NotificationTypes } from '@/types/types';
import {
    geomagneticStormIconConfig,
    radiationEnhancementIconConfig,
    solarFlareIconConfig,
    solarWindIconConfig,
} from '@/configs/configs';
import { getFormattedDate } from '@/utils/utils';

interface IWeatherListRow {
    notificationsData: INotification[];
    date: number;
}

const WeatherListRow: FC<IWeatherListRow> = ({ notificationsData, date }) => {
    const formattedDate = new Intl.DateTimeFormat('ru', {
        weekday: 'short',
        day: '2-digit',
        month: '2-digit',
    }).format(date);

    const compareDates = (value: string | number): boolean =>
        getFormattedDate(value) === getFormattedDate(date);

    const checkNotificationTypeAndDay = (
        notification: INotification,
        checkType: NotificationTypes
    ): boolean => {
        const { messageType, messageIssueTime } = notification;
        return messageType === checkType && compareDates(messageIssueTime);
    };

    const isSolarFlare = notificationsData.some((notification) =>
        checkNotificationTypeAndDay(notification, NotificationTypes.flr)
    );

    const isGeomagneticStorm = notificationsData.some((notification) =>
        checkNotificationTypeAndDay(notification, NotificationTypes.gst)
    );

    const isSolarWind = notificationsData.some((notification) =>
        checkNotificationTypeAndDay(notification, NotificationTypes.cme)
    );

    const isRadiationEnhancement = notificationsData.some((notification) =>
        checkNotificationTypeAndDay(notification, NotificationTypes.rbe)
    );

    return (
        <div className={`${utilsStyles['flex-row']} ${utilsStyles['gap-xxs']}`}>
            <p
                className={`${utilsStyles['text-body-regular']} ${utilsStyles['text-gray']} ${utilsStyles['text-center']}`}
            >
                {formattedDate}:
            </p>
            <WeatherIcon {...solarFlareIconConfig} isActive={isSolarFlare} />
            <WeatherIcon
                {...geomagneticStormIconConfig}
                isActive={isGeomagneticStorm}
            />
            <WeatherIcon {...solarWindIconConfig} isActive={isSolarWind} />
            <WeatherIcon
                {...radiationEnhancementIconConfig}
                isActive={isRadiationEnhancement}
            />
        </div>
    );
};

export default WeatherListRow;
