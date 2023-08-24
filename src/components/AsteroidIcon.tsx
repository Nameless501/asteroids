import { FC } from 'react';
import Image from 'next/image';
import { asteroidImageConfig } from '@/configs/configs';

interface IAsteroidIcon {
    size: 'big' | 'small',
}

const AsteroidIcon: FC<IAsteroidIcon> = ({ size }) => {
    return (
        <Image
            src={asteroidImageConfig.src}
            width={asteroidImageConfig.width[size]}
            height={asteroidImageConfig.height[size]}
            alt={asteroidImageConfig.alt}
            style={asteroidImageConfig.styles}
        />
    );
};

export default AsteroidIcon;