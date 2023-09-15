import Link from 'next/link';
import AsteroidInfo from '@/components/AsteroidInfo';
import Approaches from '@/components/Approaches';
import utilsStyles from '@/styles/utils.module.css';
import { ASTEROID_NAME_REGEX } from '@/configs/constants';
import { fetchAsteroidData } from '@/actions/asteroidData';
import { routesConfig } from '@/configs/configs';

export default async function Asteroid({ id }: { id: string }) {
    const asteroidData = await fetchAsteroidData(id);

    return (
        <section
            className={`${utilsStyles['flex-column']} ${utilsStyles['gap-xl']}`}
        >
            <div
                className={`${utilsStyles['flex-column']} ${utilsStyles['gap-l']}`}
            >
                <div
                    className={`${utilsStyles['flex-column']} ${utilsStyles['gap-s']}`}
                >
                    <Link href={routesConfig.getMainRoute()}>
                        <span
                            className={`${utilsStyles['text-body-regular']} ${utilsStyles['text-gray']}`}
                        >
                            &larr; На главную
                        </span>
                    </Link>
                    <h1>
                        <span className={`${utilsStyles['text-h2']}`}>
                            Астероид:&nbsp;
                        </span>
                        <span
                            className={`${utilsStyles['text-h1']} ${utilsStyles['text-underline']}`}
                        >
                            {asteroidData.name.match(ASTEROID_NAME_REGEX)}
                        </span>
                    </h1>
                </div>
                <AsteroidInfo {...asteroidData} />
            </div>
            <Approaches closeApproaches={asteroidData.close_approach_data} />
        </section>
    );
}
