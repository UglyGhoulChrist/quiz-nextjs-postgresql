import styles from '@/components/Card/AnswerOptions.module.css'
import Button from '@/components/Button'

function AnswerOptions({ listanswers, rightanswer, buttonText, onClick }) {
    return (
        <div className={styles.answers}>
            <h3 className={styles.title}>Варианты ответов:</h3>
            {listanswers?.map((answer, idx) => (
                <span className={`${styles.answer} ${idx == rightanswer ? styles.answer_right : ''}`} key={idx}>{answer}</span>
            ))}
            {buttonText && <Button onClick={onClick} text={buttonText} />}
        </div>
    )
}

export default AnswerOptions