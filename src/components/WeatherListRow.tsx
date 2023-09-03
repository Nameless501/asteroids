import { FC } from 'react';
import WeatherIcon from '@/components/WeatherIcon';
import utilsStyles from '@/styles/utils.module.css';
import { IFlare, IHighSpeedStream } from '@/types/types';
import {
    geomagneticStormIconConfig,
    solarFlareIconConfig,
} from '@/configs/configs';
import { getFormattedDate } from '@/utils/utils';

interface IWeatherListRow {
    flaresData: IFlare[];
    highSpeedStreamData: IHighSpeedStream[];
    date: number;
}

const WeatherListRow: FC<IWeatherListRow> = ({
    flaresData,
    highSpeedStreamData,
    date,
}) => {
    const formattedDate = new Intl.DateTimeFormat('ru', {
        weekday: 'short',
        day: '2-digit',
        month: '2-digit',
    }).format(date);

    const compareDates = (value: string | number): boolean =>
        getFormattedDate(value) === getFormattedDate(date);

    const isSolarFlare = flaresData.some(({ peakTime }) =>
        compareDates(peakTime)
    );

    const isGeomagneticStorm = highSpeedStreamData.some(({ eventTime }) =>
        compareDates(eventTime)
    );

    return (
        <div className={`${utilsStyles['flex-row']} ${utilsStyles['gap-s']}`}>
            <p
                className={`${utilsStyles['text-body-regular']} ${utilsStyles['text-gray']}`}
            >
                {formattedDate}:
            </p>
            <WeatherIcon {...solarFlareIconConfig} isActive={isSolarFlare} />
            <WeatherIcon
                {...geomagneticStormIconConfig}
                isActive={isGeomagneticStorm}
            />
        </div>
    );
};

export default WeatherListRow;
