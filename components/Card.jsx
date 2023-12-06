import styles from '@/components/Card.module.css'
import Button from '@/components/Button'
import Modal from '@/components/Modal'
import { useState } from 'react'

function Card(props) {
    const { question, listAnswers } = props

    const [hidden, setHidden] = useState(true)

    const handleHiddenModal = () => {
        setHidden(prev => !prev)
    }

    return (
        <li className={styles.card}>
            <div className={styles.question}>
                {question.map((string, idx) => (
                    <pre className={styles.code} key={idx}>{string}</pre>
                ))}
            </div>
            <div className={styles.answers}>
                {listAnswers.map((answer, idx) => (
                    <span key={idx}>{answer}</span>
                ))}
                <Button onClick={handleHiddenModal} text='Ответ' />
            </div>
            <Modal hidden={hidden} {...props} onClick={handleHiddenModal} />
        </li>
    )
}

export default Card
