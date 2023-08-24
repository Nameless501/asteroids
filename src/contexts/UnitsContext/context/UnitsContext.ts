import { createContext } from 'react';
import { IUnitsContext } from '@/types/types';

const UnitsContext = createContext<IUnitsContext | null>(
    null
);

export default UnitsContext;
