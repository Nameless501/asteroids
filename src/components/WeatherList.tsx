import { FC } from 'react';
import WeatherListRow from '@/components/WeatherListRow';
import utilsStyles from '@/styles/utils.module.css';
import { INotification } from '@/types/types';

interface IWeatherList {
    notificationsData: INotification[];
}

const WeatherList: FC<IWeatherList> = ({ notificationsData }) => {
    const today = new Date();
    const pastWeek = Array.from({ length: 7 }, (_, ind) =>
        new Date().setDate(today.getDate() - ind)
    );

    return (
        <ul
            className={`${utilsStyles['flex-column']} ${utilsStyles['gap-s']} ${utilsStyles['align-center']} ${utilsStyles.list}`}
        >
            {pastWeek.map((day, ind) => (
                <li key={ind}>
                    <WeatherListRow
                        date={day}
                        notificationsData={notificationsData}
                    />
                </li>
            ))}
        </ul>
    );
};

export default WeatherList;
