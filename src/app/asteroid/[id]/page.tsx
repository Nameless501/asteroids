import Asteroid from '@/components/Asteroid';
import styles from '@/styles/layout.module.css';
import utilsStyles from '@/styles/utils.module.css';

export default function AsteroidPage({ params }: { params: { id: string } }) {
    return (
        <main className={`${styles.content} ${utilsStyles['flex-row']}`}>
            <Asteroid id={params.id} />
        </main>
    );
}
