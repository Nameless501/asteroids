import { FC } from 'react';
import Spinner from '@/components/Spinner';
import styles from '@/styles/loading.module.css';
import utilsStyles from '@/styles/utils.module.css';

const Loading: FC = () => {
    return (
        <section
            className={`${styles.section} ${utilsStyles['flex-row']} ${utilsStyles['justify-center']}`}
        >
            <div className={styles.loading}>
                <Spinner />
            </div>
        </section>
    );
};

export default Loading;
