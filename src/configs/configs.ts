import { UnitsTypes } from '@/types/types';
import type { Metadata } from 'next';
import { Passion_One } from 'next/font/google';
import { UNITS_PARAM_KEY, BASE_URL, API_KEY } from './constants';

export const metaDataConfig: Metadata = {
    title: 'Armageddon',
    description:
        'Онлайн-сервис по мониторингу и уничтожению опасных астероидов на основе данных API NASA',
};

export const passionOneFontConfig = Passion_One({
    weight: '400',
    subsets: ['latin'],
    variable: '--font_secondary',
});

export const routesConfig = {
    getMainRoute: () => '/',
    getOrderRoute: (units: UnitsTypes) => `/order?${UNITS_PARAM_KEY}=${units}`,
    getAsteroidRoute: (id: string) => '/asteroid/' + id,
};

export const apiRoutesConfig = {
    getFeedURL: (date: string): string =>
        `${BASE_URL}/feed?api_key=${API_KEY}&start_date=${date}`,
    getAsteroidUrl: (id: string): string =>
        `${BASE_URL}/neo/${id}?api_key=${API_KEY}`,
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

export const pluralBasketConfig = {
    zero: 'астероидов',
    two: 'астероида',
    one: 'астероид',
    few: 'астероида',
    many: 'астероидов',
    other: 'астероидов',
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
