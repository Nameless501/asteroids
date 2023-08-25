import { RU_LOCALE } from '@/configs/constants';

export const getFormattedDate = (
    value: string | number,
    showTime = false
): string => {
    const date = new Date(
        typeof value === 'string' ? Date.parse(value) : value
    );
    const month = date
        .toLocaleString(RU_LOCALE, { month: 'short' })
        .replace('.', '');
    const formattedDate = `${date.getDate()} ${month} ${date.getFullYear()}`;
    const time = date.toLocaleString(RU_LOCALE, {
        hour: '2-digit',
        minute: '2-digit',
    });
    return showTime ? `${formattedDate} ${time}` : formattedDate;
};

export const getLocalePlural = (number: number): Intl.LDMLPluralRule => {
    const pluralLocale = new Intl.PluralRules(RU_LOCALE);
    return pluralLocale.select(number);
};

export const getCurrentFormattedDate = (): string => {
    const date = new Date().toLocaleString('ru', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
    return date.split('.').reverse().join('-');
};
