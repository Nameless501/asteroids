import AsteroidInfo from '@/components/AsteroidInfo';
import ApproachesFeed from '@/components/ApproachesFeed';
import utilsStyles from '@/styles/utils.module.css';
import { IAsteroid } from '@/types/types';
import { apiRoutesConfig } from '@/configs/configs';
import { ASTEROID_NAME_REGEX } from '@/configs/constants';

const fetchAsteroidData = async (id: string): Promise<IAsteroid> => {
    const res = await fetch(apiRoutesConfig.getAsteroidUrl(id));
    const data = res.json();
    return data;
};

export default async function Asteroid({ id }: { id: string }) {
    const asteroidData = await fetchAsteroidData(id);

    return (
        <section
            className={`${utilsStyles['flex-column']} ${utilsStyles['gap-l']}`}
        >
            <h1>
                <span className={utilsStyles['text-h2']}>Астероид:&nbsp;</span>
                <span
                    className={`${utilsStyles['text-h1']} ${utilsStyles['text-underline']}`}
                >
                    {asteroidData.name.match(ASTEROID_NAME_REGEX)}
                </span>
            </h1>
            <AsteroidInfo {...asteroidData} />
            <ApproachesFeed
                closeApproaches={asteroidData.close_approach_data}
            />
        </section>
    );
}
