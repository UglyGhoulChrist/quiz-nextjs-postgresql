import styles from '@/components/Card.module.css'
import Button from '@/components/Button'
import Modal from '@/components/Modal'
import { useState } from 'react'

import { useEffect } from 'react'
import javascript from '@/highlight/javascript'
hljs.registerLanguage('javascript', javascript)
import hljs from '@/highlight/core'

function Card(props) {
    const { question, listAnswers } = props
    const [visible, setVisible] = useState(false)

    const handleHiddenModal = () => {
        setVisible(prev => !prev)
    }

    useEffect(() => {
        hljs.highlightAll()
    }, [])

    return (
        <li className={styles.card}>
            <pre className={styles.question}>
                <code>{question}</code>
            </pre>
            <div className={styles.answers}>
                {listAnswers.map((answer, idx) => (
                    <span key={idx}>{answer}</span>
                ))}
                <Button onClick={handleHiddenModal} text='Ответ' />
            </div>
            <Modal visible={visible} {...props} onClick={handleHiddenModal} />
        </li>
    )
}

export default Card
