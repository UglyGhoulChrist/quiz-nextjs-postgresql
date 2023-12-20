import Button from '@/components/Button'
import styles from '@/components/Modal.module.css'

function Modal({ listanswers, rightanswer, explanation, visible, onClick }) {
    return (
        <div className={`${styles.modal} ${visible ? styles.visible : null}`}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h3>{listanswers[rightanswer]}</h3>
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
