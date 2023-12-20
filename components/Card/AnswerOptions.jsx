import styles from '@/components/Card/AnswerOptions.module.css'
import Button from '@/components/Button'

function AnswerOptions({ listAnswers, rightAnswer, buttonText, onClick }) {
    return (
        <div className={styles.answers}>
            <span className={styles.title}>Варианты ответов:</span>
            {listAnswers.map((answer, idx) => (
                <span className={`${styles.answer} ${idx == rightAnswer ? styles.answer_right : ''}`} key={idx}>{answer}</span>
            ))}
            {buttonText && <Button onClick={onClick} text={buttonText} />}
        </div>
    )
}

export default AnswerOptions