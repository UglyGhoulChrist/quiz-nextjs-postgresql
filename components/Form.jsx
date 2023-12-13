import { useState } from 'react'
import styles from '@/components/Form.module.css'
import Button from '@/components/Button'

function Form() {

    const [question, setQuestion] = useState('')
    const [answer1, setAnswer1] = useState('')
    const [answer2, setAnswer2] = useState('')
    const [answer3, setAnswer3] = useState('')
    const [answer4, setAnswer4] = useState('')
    const [rightAnswer, setRightAnswer] = useState('')
    const [explanation, setExplanation] = useState('')

    function onSubmitHandler(e) {
        e.preventDefault()
        const questionArr = [...question.split('\n')]
        const answer = [answer1, answer2, answer3, answer4]
        const newQuestion = {
            question: questionArr,
            answer,
            rightAnswer,
            explanation
        }

        fetch(process.env.API_HOST + '/questions/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(newQuestion)
        })
        setQuestion('')
        setAnswer1('')
        setAnswer2('')
        setAnswer3('')
        setAnswer4('')
        setRightAnswer('')
        setExplanation('')
    }

    return (
        <form className={styles.form} onSubmit={onSubmitHandler}>
            <div>
                <textarea rows="11"
                    className={styles.textarea}
                    placeholder="Вопрос"
                    value={question}
                    onChange={(e) => {
                        setQuestion(e.target.value)
                    }}
                />
            </div>
            <div className={styles.inputList}>
                <input
                    className={styles.input}
                    placeholder="1й вариант ответа"
                    value={answer1}
                    onChange={(e) => {
                        setAnswer1(e.target.value)
                    }}
                />
                <input
                    className={styles.input}
                    placeholder="2й вариант ответа"
                    value={answer2}
                    onChange={(e) => {
                        setAnswer2(e.target.value)
                    }}
                />
                <input
                    className={styles.input}
                    placeholder="3й вариант ответа"
                    value={answer3}
                    onChange={(e) => {
                        setAnswer3(e.target.value)
                    }}
                />
                <input
                    className={styles.input}
                    placeholder="4й вариант ответа"
                    value={answer4}
                    onChange={(e) => {
                        setAnswer4(e.target.value)
                    }}
                />
                <input
                    className={styles.input}
                    placeholder="Индекс правильного вариант ответа"
                    value={rightAnswer}
                    onChange={(e) => {
                        setRightAnswer(e.target.value)
                    }}
                />
            </div>
            <div>
                <textarea rows="5"
                    className={styles.textarea}
                    placeholder="Пояснение"
                    value={explanation}
                    onChange={(e) => {
                        setExplanation(e.target.value)
                    }}
                />
            </div>
            <Button text='Записать' />
        </form>
    )
}

export default Form