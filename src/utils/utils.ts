import { API_KEY, BASE_URL, RU_LOCALE } from '@/configs/constants';

export const getFormattedDate = (str: string): string => {
    const date = new Date(Date.parse(str));
    const month = date.toLocaleString(RU_LOCALE, {month: 'short'}).replace('.', '');
    return `${date.getDate()} ${month} ${date.getFullYear()}`;
}

export const getLocalePlural = (number: number): Intl.LDMLPluralRule => {
    const pluralLocale = new Intl.PluralRules(RU_LOCALE);
    return pluralLocale.select(number);
}

export const getApiURL = (date: string): string => `${BASE_URL}?api_key=${API_KEY}&start_date=${date}`;

export const getCurrentFormattedDate = (): string => {
    const date = new Date().toLocaleString('ru', {day: '2-digit', month: '2-digit', year: 'numeric'});
    return date.split('.').reverse().join('-');
}