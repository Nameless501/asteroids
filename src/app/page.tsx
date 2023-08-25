import Main from '@/components/Main';
import styles from '@/styles/layout.module.css';
import utilsStyles from '@/styles/utils.module.css';

export default function Home() {
    return (
        <main
            className={`${styles.content} ${utilsStyles['flex-row']} ${utilsStyles['align-start']}`}
        >
            <Main />
        </main>
    );
}
