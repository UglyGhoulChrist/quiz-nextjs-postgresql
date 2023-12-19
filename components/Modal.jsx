import Button from '@/components/Button'
import styles from '@/components/Modal.module.css'

function Modal({ listAnswers, rightAnswer, explanation, hidden, onClick }) {
    return (
        <div className={`${styles.modal} ${hidden ? styles.hidden : null}`}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h3>{listAnswers[rightAnswer]}</h3>
                    <button onClick={onClick} className={styles.close}>
                        &times;
                    </button>
                </div>
                <div className={styles.explanation}>
                    {explanation}
                </div>
                <div className={styles.footer}>
                    <Button onClick={onClick} text='Закрыть' />
                </div>
            </div>
        </div>
    )
}

export default Modal
