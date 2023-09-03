'use client';

import { FC, useState } from 'react';
import Image from 'next/image';
import Tooltip from '@/components/Tooltip';

interface IWeatherIcon {
    src: string;
    alt: string;
    width: number;
    height: number;
    isActive: boolean;
}

const WeatherIcon: FC<IWeatherIcon> = ({
    src,
    alt,
    width,
    height,
    isActive,
}) => {
    const [isHover, setIsHover] = useState<boolean>(false);

    return (
        <Tooltip isOpen={isHover} text={alt}>
            <Image
                src={src}
                width={width}
                height={height}
                alt={alt}
                style={{ opacity: isActive ? 1 : 0.25 }}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            />
        </Tooltip>
    );
};

export default WeatherIcon;
