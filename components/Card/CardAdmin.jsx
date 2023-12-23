import styles from '@/components/Card/CardAdmin.module.css'
import Button from '@/components/Button'
import AnswerOptions from '@/components/Card/AnswerOptions'
import PreCode from '@/components/Card/PreCode'
import { useEffect } from 'react'
import javascript from '@/highlight/javascript'
hljs.registerLanguage('javascript', javascript)
import hljs from '@/highlight/core'

function CardAdmin(props) {

    const { id, question, listanswers, rightanswer, explanation, onDelete } = props

    async function handleDeleteQuestion() {
        await fetch(process.env.API_HOST + '/v1/questions/' + id, {
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
                <AnswerOptions listanswers={listanswers} rightanswer={rightanswer} buttonText={null} onClick={null} />
            </div>
            <div className={styles.explanationButtons}>
                <h3 className={styles.title}>Пояснение:</h3>
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
