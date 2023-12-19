import styles from '@/components/CardAdmin.module.css'
import Button from '@/components/Button'

function CardAdmin(props) {

    const { id, question, listAnswers, rightAnswer, explanation, onDelete } = props
    const stringQuestion = question.split('\n')

    function handleDeleteQuestion() {
        fetch(process.env.API_HOST + '/questions/' + id, {
            method: 'DELETE'
        })
        onDelete()
    }

    function handleCreateQuestion() {
        window.scrollTo(0, 0)
    }

    return (
        <li className={styles.card}>
            <div className={styles.questionAnswer}>
                <div className={styles.question}>
                    {stringQuestion.map((string, idx) => (
                        <pre className={styles.code} key={idx}>{string + ' '}</pre>
                    ))}
                </div>
                <div className={styles.answers}>
                    {listAnswers.map((answer, idx) => (
                        <span className={`${idx == rightAnswer ? styles.answer_right : ''}`} key={idx}>{answer}</span>
                    ))}
                </div>
            </div>
            <div className={styles.explanationButtons}>
                <div className={styles.explanation}>
                    {explanation}
                </div>
                <div className={styles.buttons}>
                    <Button onClick={handleDeleteQuestion} text='Удалить' />
                    <Button onClick={handleCreateQuestion} text='Создать' />
                </div>
            </div>
        </li>
    )
}

export default CardAdmin
