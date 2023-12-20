import Card from '@/components/Card/Card'
import styles from '@/pages/index.module.css'

const getStaticProps = async () => {
    try {
        const response = await fetch(process.env.API_HOST + '/questions/')
        const { questionsList } = await response.json()
        return { props: { questionsList: questionsList } }
    } catch (error) {
        return { notFound: true }
    }
}

function Index({ questionsList }) {
    return (
        <>
            <h1 className={styles.header}>Что будет выведено в консоль?</h1>
            <ul className={styles.list}>
                {questionsList.map(question => (
                    <Card key={question.id} {...question} />
                ))}
            </ul>
        </>
    )
}

export default Index
export { getStaticProps }
