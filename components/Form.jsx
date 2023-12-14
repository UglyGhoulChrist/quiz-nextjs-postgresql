import { useState } from 'react'
import styles from '@/components/Form.module.css'
import Button from '@/components/Button'

function Form() {

    const [question, setQuestion] = useState('')
    const [listAnswers, setListAnswers] = useState(new Array(4).fill(''))
    const [rightAnswer, setRightAnswer] = useState('')
    const [explanation, setExplanation] = useState('')

    function onSubmitHandler(e) {
        e.preventDefault()
        const questionArr = [...question.split('\n')]

        const newQuestion = {
            question: questionArr,
            listAnswers,
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
        setListAnswers(new Array(4).fill(''))
        setRightAnswer('')
        setExplanation('')
    }

    return (
        <form className={styles.form} onSubmit={onSubmitHandler}>
            <textarea rows="9"
                className={styles.textarea}
                placeholder="Вопрос"
                value={question}
                onChange={(e) => {
                    setQuestion(e.target.value)
                }}
            />
            <div className={styles.inputList}>
                <div className={styles.inputItem}>
                    <input
                        className={styles.inputAnswer}
                        placeholder="Вариант ответа"
                        value={listAnswers[0]}
                        onChange={(e) => {
                            setListAnswers(listAnswers.map((el, idx) => idx === 0 ? e.target.value : el))
                        }}
                    />
                    <input
                        className={styles.inputRadio}
                        type="radio"
                        name='listAnswers'
                        value={rightAnswer === 0}
                        onChange={() => setRightAnswer(0)}
                    />
                </div>
                <div className={styles.inputItem}>
                    <input
                        className={styles.inputAnswer}
                        placeholder="Вариант ответа"
                        value={listAnswers[1]}
                        onChange={(e) => {
                            setListAnswers(listAnswers.map((el, idx) => idx === 1 ? e.target.value : el))
                        }}
                    />
                    <input
                        className={styles.inputRadio}
                        type="radio"
                        name='listAnswers'
                        value={rightAnswer === 1}
                        onChange={() => setRightAnswer(1)}
                    />
                </div>
                <div className={styles.inputItem}>
                    <input
                        className={styles.inputAnswer}
                        placeholder="Вариант ответа"
                        value={listAnswers[2]}
                        onChange={(e) => {
                            setListAnswers(listAnswers.map((el, idx) => idx === 2 ? e.target.value : el))
                        }}
                    />
                    <input
                        className={styles.inputRadio}
                        type="radio"
                        name='listAnswers'
                        value={rightAnswer === 2}
                        onChange={() => setRightAnswer(2)}
                    />
                </div>
                <div className={styles.inputItem}>
                    <input
                        className={styles.inputAnswer}
                        placeholder="Вариант ответа"
                        value={listAnswers[3]}
                        onChange={(e) => {
                            setListAnswers(listAnswers.map((el, idx) => idx === 3 ? e.target.value : el))
                        }}
                    />
                    <input
                        className={styles.inputRadio}
                        type="radio"
                        name='listAnswers'
                        value={rightAnswer === 3}
                        onChange={() => setRightAnswer(3)}
                    />
                </div>
            </div>
            <textarea rows="5"
                className={styles.textarea}
                placeholder="Пояснение"
                value={explanation}
                onChange={(e) => {
                    setExplanation(e.target.value)
                }}
            />
            <Button text='Записать' />
        </form>
    )
}

export default Form