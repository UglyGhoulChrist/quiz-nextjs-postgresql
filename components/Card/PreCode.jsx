import styles from '@/components/Card/PreCode.module.css'

function PreCode({ question }) {
    return (
        <pre className={styles.question}>
            <span className={styles.title}>JavaScript:</span>
            <code className={styles.code}>{question}</code>
        </pre>
    )
}

export default PreCode