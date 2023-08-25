import { FC } from 'react';
import Spinner from '@/components/Spinner';
import styles from '@/styles/loading.module.css';

const Loading: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.loading}>
                <Spinner />
            </div>
        </div>
    );
};

export default Loading;
