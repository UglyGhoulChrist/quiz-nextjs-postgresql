import Card from '@/components/Card/Card'
import styles from '@/pages/index.module.css'

const getStaticProps = async () => {
    try {
        const response = await fetch(process.env.API_HOST + '/v1/questions/')
        // const response = await fetch(process.env.API_HOST + '/v0/questions/')
        const { questionsList } = await response.json()
        // const questionsList = await response.json()
        return { props: { questionsList: questionsList } }
    } catch (error) {
        return { notFound: true }
    }
}

function Index({ questionsList }) {
    return (
        <>
            <h1 className={styles.header}>Что будет выведено в консоль?</h1>
            {questionsList.length ?
                <ul className={styles.list}>
                    {questionsList.map(question => (
                        <Card key={question.id} {...question} />
                    ))}
                </ul> :
                'Список пустой'}
        </>
    )
}

export default Index
export { getStaticProps }
