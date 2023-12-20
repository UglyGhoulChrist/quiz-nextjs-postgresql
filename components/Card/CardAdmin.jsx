import styles from '@/components/Card/CardAdmin.module.css'
import Button from '@/components/Button'
import AnswerOptions from '@/components/Card/AnswerOptions'
import PreCode from '@/components/Card/PreCode'
import { useEffect } from 'react'
import javascript from '@/highlight/javascript'
hljs.registerLanguage('javascript', javascript)
import hljs from '@/highlight/core'

function CardAdmin(props) {

    const { id, question, listAnswers, rightAnswer, explanation, onDelete } = props

    function handleDeleteQuestion() {
        fetch(process.env.API_HOST + '/questions/' + id, {
            method: 'DELETE'
        })
        onDelete()
    }

    function handleCreateQuestion() {
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        hljs.highlightAll()
    }, [])

    return (
        <li className={styles.card}>
            <div className={styles.questionAnswer}>
                <PreCode question={question} />
                <AnswerOptions listAnswers={listAnswers} rightAnswer={rightAnswer} buttonText={null} onClick={null} />
            </div>
            <div className={styles.explanationButtons}>
                <span className={styles.title}>Пояснение:</span>
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
