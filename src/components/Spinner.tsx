import { FC } from 'react';
import styles from '@/styles/spinner.module.css';

const Spinner: FC = () => {
    return (
        <div className={styles['fading-circle']}>
            <span className={`${styles['circle']} ${styles['circle1']}`} />
            <span className={`${styles['circle']} ${styles['circle2']}`} />
            <span className={`${styles['circle']} ${styles['circle3']}`} />
            <span className={`${styles['circle']} ${styles['circle4']}`} />
            <span className={`${styles['circle']} ${styles['circle5']}`} />
            <span className={`${styles['circle']} ${styles['circle6']}`} />
            <span className={`${styles['circle']} ${styles['circle7']}`} />
            <span className={`${styles['circle']} ${styles['circle8']}`} />
            <span className={`${styles['circle']} ${styles['circle9']}`} />
            <span className={`${styles['circle']} ${styles['circle10']}`} />
            <span className={`${styles['circle']} ${styles['circle11']}`} />
            <span className={`${styles['circle']} ${styles['circle12']}`} />
        </div>
    );
};

export default Spinner;
