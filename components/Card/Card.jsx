import styles from '@/components/Card/Card.module.css'
import Modal from '@/components/Modal'
import PreCode from '@/components/Card/PreCode'
import AnswerOptions from '@/components/Card/AnswerOptions'
import { useState, useEffect } from 'react'
import javascript from '@/highlight/javascript'
hljs.registerLanguage('javascript', javascript)
import hljs from '@/highlight/core'


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
            <AnswerOptions listAnswers={listAnswers} buttonText={'Ответ'} onClick={handleVisibleModal} />
            <Modal visible={visible} {...props} onClick={handleVisibleModal} />
        </li>
    )
}

export default Card
