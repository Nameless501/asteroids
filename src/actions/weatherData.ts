import { apiRoutesConfig } from '@/configs/configs';
import { IFlare, IHighSpeedStream } from '@/types/types';

export const fetchSolarFlareData = async (): Promise<IFlare[]> => {
    try {
        const res = await fetch(apiRoutesConfig.getFlaresURL());
        const data = await res.json();
        return data;
    } catch (e) {
        throw new Error();
    }
};

export const fetchHighSpeedStreamData = async (): Promise<
    IHighSpeedStream[]
> => {
    try {
        const res = await fetch(apiRoutesConfig.getHighSpeedStreamURL());
        const data = await res.json();
        return data;
    } catch (e) {
        throw new Error();
    }
};
