import styles from '@/components/Card/PreCode.module.css'

function PreCode({ question }) {
    return (
        <pre className={styles.question}>
            <span className={styles.title}>javascript</span>
            <code className={styles.code}>{question}</code>
        </pre>
    )
}

export default PreCode