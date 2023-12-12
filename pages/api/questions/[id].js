import { questionsList } from "@/pages/api/questions"

function handler({ method, query, body }, res) {

    switch (method) {

        // Получение вопроса по ИД
        case 'GET':
            const question = questionsList.find(({ id }) => id == query.id)

            if (question) {
                res.status(200).json(question)
            }
            else {
                res.status(404).send('Not found')
            }
            break

        // Изменение вопроса по ИД, поля вопроса в теле запроса
        case 'PUT':
            const PutId = questionsList.findIndex(({ id }) => id == query.id)

            if (PutId === -1) {
                res.status(404).send('Not found')
            }
            else {
                questionsList.forEach(question => {
                    if (question.id == query.id) {
                        question.question = body.question || question.question
                        question.listAnswers = body.listAnswers || question.listAnswers
                        question.rightAnswer = body.rightAnswer || question.rightAnswer
                        question.explanation = body.explanation || question.explanation
                    }
                })
                res.status(200).json(questionsList)
            }
            break

        // Удаление вопроса из списка по ИД
        case 'DELETE':
            const deleteId = questionsList.findIndex(({ id }) => id == query.id)

            if (deleteId === -1) {
                res.status(404).send('Not found')
            }
            else {
                questionsList.splice(deleteId, 1)
                res.status(200).json(questionsList)
            }
            break

        default:
            res.status(404).send('Not found')
            break
    }
}

export default handler