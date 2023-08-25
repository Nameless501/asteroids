import Order from '@/components/Order';
import styles from '@/styles/layout.module.css';
import utilsStyles from '@/styles/utils.module.css';

export default function OrderPage() {
    return (
        <main
            className={`${styles.content} ${utilsStyles['flex-row']} ${utilsStyles['align-start']}`}
        >
            <Order />
        </main>
    );
}
