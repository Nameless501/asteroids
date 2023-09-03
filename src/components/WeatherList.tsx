import { FC } from 'react';
import WeatherListRow from '@/components/WeatherListRow';
import utilsStyles from '@/styles/utils.module.css';
import { IFlare, IHighSpeedStream } from '@/types/types';

interface IWeatherList {
    flaresData: IFlare[];
    highSpeedStreamData: IHighSpeedStream[];
}

const WeatherList: FC<IWeatherList> = ({ flaresData, highSpeedStreamData }) => {
    const today = new Date();
    const pastWeek = Array.from({ length: 7 }, (_, ind) =>
        new Date().setDate(today.getDate() - ind)
    );

    return (
        <ul
            className={`${utilsStyles['flex-column']} ${utilsStyles['gap-s']} ${utilsStyles.list}`}
        >
            {pastWeek.map((day, ind) => (
                <li key={ind}>
                    <WeatherListRow
                        date={day}
                        flaresData={flaresData}
                        highSpeedStreamData={highSpeedStreamData}
                    />
                </li>
            ))}
        </ul>
    );
};

export default WeatherList;
