import { FC, ReactNode, useState } from 'react';
import UnitsContext from '@/contexts/UnitsContext/context/UnitsContext';
import { UnitsTypes } from '@/types/types';

interface IUnitsContextProvider {
    children: ReactNode;
}

export const UnitsContextProvider: FC<IUnitsContextProvider> = ({
    children,
}) => {
    const [currentUnits, setCurrentUnits] = useState<UnitsTypes>(
        UnitsTypes.kilometers
    );

    const handleUnitsChange = (value: UnitsTypes) => setCurrentUnits(value);

    return (
        <UnitsContext.Provider
            value={{
                units: currentUnits,
                handleUnitsChange,
            }}
        >
            {children}
        </UnitsContext.Provider>
    );
};
