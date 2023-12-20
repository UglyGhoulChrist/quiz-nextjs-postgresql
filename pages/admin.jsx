import CardAdmin from '@/components/Card/CardAdmin'
import Form from '@/components/Form'
import styles from '@/pages/index.module.css'
import { useEffect, useState } from 'react'

function Admin() {

    const [questions, setQuestions] = useState([])
    const [update, setUpdate] = useState(Math.random())

    function handleUpdate() {
        setUpdate(Math.random())
    }

    useEffect(() => {
        fetch(process.env.API_HOST + '/questions/')
            .then((response) => response.json())
            .then((data) => setQuestions(data))
            .catch(() => { })
            .finally(() => { })
    }, [update])

    return (
        <>
            <h1 className={styles.header}>Admin</h1>
            <Form onSubmit={handleUpdate} />
            <ul className={styles.list}>
                {questions.map(question => (
                    <CardAdmin
                        onDelete={handleUpdate}
                        key={question.id}
                        {...question}
                    />
                ))}
            </ul>
        </>
    )
}

export default Admin