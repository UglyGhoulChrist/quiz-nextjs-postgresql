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
        fetch(process.env.API_HOST + '/v1/questions/')
            .then((response) => response.json())
            .then((data) => setQuestions(data.questionsList))
            .catch(() => { })
            .finally(() => { })

    }, [update])

    return (
        <>
            <h1 className={styles.header}>Admin</h1>
            <Form onSubmit={handleUpdate} />
            {questions.length ?
                <ul className={styles.list}>
                    {questions.map(question => (
                        <CardAdmin
                            onDelete={handleUpdate}
                            key={question.id}
                            {...question}
                        />
                    ))}
                </ul> :
                'Список пустой'}
        </>
    )
}

export default Admin