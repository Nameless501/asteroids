import { FC } from 'react';
import Image from 'next/image';
import { orbitBodiesIconsConfig } from '@/configs/configs';
import { OrbitBodies } from '@/types/types';

interface IOrbitBodyIcon {
    orbit: OrbitBodies;
}

const OrbitBodyIcon: FC<IOrbitBodyIcon> = ({ orbit }) => {
    return (
        <Image
            src={orbitBodiesIconsConfig[orbit].src}
            width={30}
            height={30}
            alt={orbitBodiesIconsConfig[orbit].alt}
        />
    );
};

export default OrbitBodyIcon;
