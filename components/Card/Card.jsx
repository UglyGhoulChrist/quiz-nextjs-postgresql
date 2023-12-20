import styles from '@/components/Card/Card.module.css'
import Button from '@/components/Button'
import Modal from '@/components/Modal'
import { useState } from 'react'

import { useEffect } from 'react'
import javascript from '@/highlight/javascript'
hljs.registerLanguage('javascript', javascript)
import hljs from '@/highlight/core'
import PreCode from '@/components/Card/PreCode'

function Card(props) {
    const { question, listAnswers } = props
    const [visible, setVisible] = useState(false)

    const handleVisibleModal = () => {
        setVisible(prev => !prev)
    }

    useEffect(() => {
        hljs.highlightAll()
    }, [])

    return (
        <li className={styles.card}>
            <PreCode question={question} />
            <div className={styles.answers}>
                {listAnswers.map((answer, idx) => (
                    <span key={idx}>{answer}</span>
                ))}
                <Button onClick={handleVisibleModal} text='Ответ' />
            </div>
            <Modal visible={visible} {...props} onClick={handleVisibleModal} />
        </li>
    )
}

export default Card
