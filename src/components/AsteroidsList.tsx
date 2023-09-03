import { FC } from 'react';
import { useUnitsContext } from '@/contexts/UnitsContext';
import AsteroidCard from '@/components/AsteroidCard';
import utilsStyles from '@/styles/utils.module.css';
import { IAsteroid } from '@/types/types';

interface IAsteroidsList {
    asteroidsData: IAsteroid[];
}

const AsteroidsList: FC<IAsteroidsList> = ({ asteroidsData }) => {
    const { units } = useUnitsContext();

    return (
        <ul
            className={`${utilsStyles['flex-column']} ${utilsStyles['gap-m']} ${utilsStyles.list}`}
        >
            {asteroidsData.map((asteroid, ind) => (
                <li key={asteroid.id + ind}>
                    <AsteroidCard {...asteroid} units={units} />
                </li>
            ))}
        </ul>
    );
};

export default AsteroidsList;
