import styles from '@/components/Card/PreCode.module.css'

function PreCode({ question }) {
    return (
        <pre className={styles.question}>
            <h3 className={styles.title}>JavaScript:</h3>
            <code className={`${styles.code} language-javascript`}>{question}</code>
        </pre>
    )
}

export default PreCode