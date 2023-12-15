import styles from '@/components/Form.module.css'
import Button from '@/components/Button'
import { useForm } from "react-hook-form"

function Form({ onSubmit }) {

    const { register, formState: { errors }, handleSubmit, reset } = useForm({ mode: 'onChange' })

    async function submitForm(data) {
        const { question, answer0, answer1, answer2, answer3, rightAnswer, explanation } = data
        const newQuestion = {
            question: [...question.split('\n')],
            listAnswers: [answer0, answer1, answer2, answer3],
            rightAnswer,
            explanation
        }
        await fetch(process.env.API_HOST + '/questions/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(newQuestion)
        })
        reset()
        onSubmit()
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
            <label className={styles.label}>Вопрос
                <textarea rows='9'
                    className={styles.textarea}
                    autoComplete='off'
                    placeholder={errors.question && errors.question.message}
                    {...register('question', {
                        required: {
                            value: true,
                            message: 'Обязательное поле'
                        }
                    })}
                />
            </label>

            <label className={styles.inputList}>Варианты ответов
                <div className={styles.inputItem}>
                    <input
                        className={styles.inputAnswer}
                        autoComplete='off'
                        placeholder={errors.answer0 && errors.answer0.message}
                        {...register('answer0', {
                            required: {
                                value: true,
                                message: 'Обязательное поле'
                            }
                        })}
                    />
                    <input
                        className={styles.inputRadio}
                        type='radio'
                        value={0}
                        {...register('rightAnswer', { required: { value: true, message: 'Правильный ответ' } })}
                    />
                </div>
                <div className={styles.inputItem}>
                    <input
                        className={styles.inputAnswer}
                        autoComplete='off'
                        placeholder={errors.answer1 && errors.answer1.message}
                        {...register('answer1', {
                            required: {
                                value: true,
                                message: 'Обязательное поле'
                            }
                        })}
                    />
                    <input
                        className={styles.inputRadio}
                        type='radio'
                        value={1}
                        {...register('rightAnswer', { required: { value: true, message: 'Правильный ответ' } })}
                    />
                </div>
                <div className={styles.inputItem}>
                    <input
                        className={styles.inputAnswer}
                        autoComplete='off'
                        placeholder={errors.answer2 && errors.answer2.message}
                        {...register('answer2', {
                            required: {
                                value: true,
                                message: 'Обязательное поле'
                            }
                        })}
                    />
                    <input
                        className={styles.inputRadio}
                        type='radio'
                        value={2}
                        {...register('rightAnswer', { required: { value: true, message: 'Правильный ответ' } })}
                    />
                </div>
                <div className={styles.inputItem}>
                    <input
                        className={styles.inputAnswer}
                        autoComplete='off'
                        placeholder={errors.answer3 && errors.answer3.message}
                        {...register('answer3', {
                            required: {
                                value: true,
                                message: 'Обязательное поле'
                            }
                        })}
                    />
                    <input
                        className={styles.inputRadio}
                        type='radio'
                        value={3}
                        {...register('rightAnswer', { required: { value: true, message: 'Правильный ответ' } })}
                    />
                </div>
            </label>

            <label className={styles.label}>Пояснение
                <textarea rows='5'
                    className={styles.textarea}
                    autoComplete='off'
                    placeholder={errors.explanation && errors.explanation.message}
                    {...register('explanation', {
                        required: {
                            value: true,
                            message: 'Обязательное поле'
                        }
                    })}
                />
            </label>
            <div className={styles.button}>
                <Button text='Записать' />
            </div>
        </form>
    )
}

export default Form