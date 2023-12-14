import CardAdmin from '@/components/CardAdmin'
import Form from '@/components/Form'
import styles from '@/pages/index.module.css'
import { useEffect, useState } from 'react'

function Admin() {

    const [questions, setQuestions] = useState([])

    useEffect(() => {
        fetch(process.env.API_HOST + '/questions/')
            .then((response) => response.json())
            .then((data) => setQuestions(data))
            .catch(() => { })
            .finally(() => { })
    }, [])

    return (
        <>
            <h1 className={styles.header}>Admin</h1>
            <Form />
            <ul className={styles.list}>
                {questions.map(question => (
                    <CardAdmin key={question.id} {...question} />
                ))}
            </ul>
        </>
    )
}

export default Admin