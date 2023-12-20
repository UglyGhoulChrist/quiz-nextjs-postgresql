import styles from '@/components/Card/CardAdmin.module.css'
import Button from '@/components/Button'

import { useEffect } from 'react'
import javascript from '@/highlight/javascript'
hljs.registerLanguage('javascript', javascript)
import hljs from '@/highlight/core'
import PreCode from '@/components/Card/PreCode'

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
