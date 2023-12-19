import styles from '@/components/CardAdmin.module.css'
import Button from '@/components/Button'

import { useState, useEffect } from 'react'
import javascript from '@/highlight/javascript'
hljs.registerLanguage('javascript', javascript)
import hljs from '@/highlight/core'

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

    useEffect(() => {
        hljs.highlightAll()
    }, [])

    return (
        <li className={styles.card}>
            <div className={styles.questionAnswer}>
                <pre className={styles.question}>
                    <code>{question}</code>
                </pre>
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
