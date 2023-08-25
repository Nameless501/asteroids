'use client';

import { FC } from 'react';
import styles from '@/styles/layout.module.css';
import utilsStyles from '@/styles/utils.module.css';
import { ERROR_MESSAGE } from '@/configs/constants';

const Error: FC = () => {
    return (
        <section className={`${styles.content} ${utilsStyles['flex-row']}`}>
            <h2 className={utilsStyles['text-h2']}>{ERROR_MESSAGE}</h2>
        </section>
    );
};

export default Error;
