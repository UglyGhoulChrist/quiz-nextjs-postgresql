import styles from '@/components/CardAdmin.module.css'
import Button from '@/components/Button'

function CardAdmin(props) {

    const { id, question, listAnswers, rightAnswer, explanation } = props

    function handleDeleteAnswer() {
        fetch(process.env.API_HOST + '/questions/' + id, {
            method: 'DELETE'
        })
    }
    function handleChangeAnswer() {
        console.log('Change Answer')
    }
    function handleCreateAnswer() {
        console.log('Create Answer')
    }

    return (
        <li className={styles.card}>
            <div className={styles.questionAnswer}>
                <div className={styles.question}>
                    {question.map((string, idx) => (
                        <pre className={styles.code} key={idx}>{string}</pre>
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
                    <Button onClick={handleDeleteAnswer} text='Удалить' />
                    <Button onClick={handleChangeAnswer} text='Изменить' />
                    <Button onClick={handleCreateAnswer} text='Создать' />
                </div>
            </div>
        </li>
    )
}

export default CardAdmin
