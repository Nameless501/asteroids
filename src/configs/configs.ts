import { UnitsTypes } from '@/types/types';
import type { Metadata } from 'next';
import { Passion_One } from 'next/font/google';
import { BASE_URL_NEO, BASE_URL_DONKI, API_KEY } from './constants';

export const metaDataConfig: Metadata = {
    title: 'Space Monitor',
    description:
        'Онлайн-сервис по мониторингу опасных астероидов на основе данных API NASA',
};

export const passionOneFontConfig = Passion_One({
    weight: '400',
    subsets: ['latin'],
    variable: '--font_secondary',
});

export const routesConfig = {
    getMainRoute: () => '/',
    getAsteroidRoute: (id: string) => '/asteroid/' + id,
};

export const apiRoutesConfig = {
    getFeedURL: (date: string): string =>
        `${BASE_URL_NEO}/feed?api_key=${API_KEY}&start_date=${date}`,
    getAsteroidUrl: (id: string): string =>
        `${BASE_URL_NEO}/neo/${id}?api_key=${API_KEY}`,
    getFlaresURL: (): string => `${BASE_URL_DONKI}/FLR?api_key=${API_KEY}`,
    getHighSpeedStreamURL: (): string =>
        `${BASE_URL_DONKI}/HSS?api_key=${API_KEY}`,
};

export const asteroidImageConfig = {
    src: '/asteroid.png',
    alt: 'Иконка - размер астероида',
    width: {
        big: 36.6,
        small: 20,
    },
    height: {
        big: 40,
        small: 24,
    },
    styles: { width: 'auto', height: 'auto' },
};

export const earthImageConfig = {
    src: '/earth.png',
    alt: 'Фотография земли из космоса',
    sizes: '(max-width: 1024px) 377px',
};

export const pluralDistanceConfig = {
    [UnitsTypes.lunar]: {
        zero: 'лунныx орбит',
        two: 'лунные орбиты',
        one: 'лунная орбита',
        few: 'лунные орбиты',
        many: 'лунныx орбит',
        other: 'лунные орбиты',
    },
    [UnitsTypes.kilometers]: {
        zero: 'км',
        two: 'км',
        one: 'км',
        few: 'км',
        many: 'км',
        other: 'км',
    },
};

export const orbitBodiesIconsConfig = {
    Merc: { src: '/mercury-icon.png', alt: 'Иконка: Планета Меркурий' },
    Venus: { src: '/venus-icon.png', alt: 'Иконка: Планета Венера' },
    Earth: { src: '/earth-icon.png', alt: 'Иконка: Планета Земля' },
    Mars: { src: '/mars-icon.png', alt: 'Иконка: Планета Марс' },
    Jupiter: { src: '/jupiter-icon.png', alt: 'Иконка: Планета Юпитер' },
    Saturn: { src: '/saturn-icon.png', alt: 'Иконка: Планета Сатурн' },
    Uranus: { src: '/uranus-icon.png', alt: 'Иконка: Планета Уран' },
    Neptune: { src: '/neptune-icon.png', alt: 'Иконка: Планета Нептун' },
    Moon: { src: '/moon-icon.png', alt: 'Иконка: Луна' },
};

export const orbitBodiesNamesConfig = {
    Merc: 'Меркурий',
    Venus: 'Венера',
    Earth: 'Земля',
    Mars: 'Марс',
    Jupiter: 'Юпитер',
    Saturn: 'Сатурн',
    Uranus: 'Уран',
    Neptune: 'Нептун',
    Moon: 'Луна',
};

export const solarFlareIconConfig = {
    src: '/solar-flare-icon.png',
    alt: 'Солнечная вспышка',
    width: 35,
    height: 35,
};

export const geomagneticStormIconConfig = {
    src: '/geomagnetic-storm-icon.png',
    alt: 'Геомагнитная буря',
    width: 30,
    height: 30,
};

export const logoIconConfig = {
    src: '/logo.png',
    alt: 'Логотип',
};
