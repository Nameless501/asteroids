import { useContext } from 'react';
import UnitsContext from '@/contexts/UnitsContext/context/UnitsContext';
import { IUnitsContext } from '@/types/types';

export const useUnitsContext = (): IUnitsContext => {
    const contextValue = useContext(UnitsContext);
    return { ...(contextValue as IUnitsContext) };
};
