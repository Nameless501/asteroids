import { IAsteroid } from '@/types/types';
import { apiRoutesConfig } from '@/configs/configs';

export const fetchAsteroidData = async (id: string): Promise<IAsteroid> => {
    try {
        const res = await fetch(apiRoutesConfig.getAsteroidUrl(id));
        const data = await res.json();
        return data;
    } catch (e) {
        throw new Error();
    }
};
