
import { getQuestionsAllHandler, createQuestionSingleHandler } from '@/pages/api/v1/controllers/controllers'

function handler(req, res) {

    switch (req.method) {

        // Получение всех вопросов
        case 'GET':
            getQuestionsAllHandler(req, res)
            break

        // Создание вопроса, поля вопроса в теле запроса
        case 'POST':
            createQuestionSingleHandler(req, res)
            break

        default:
            res.status(405).send('Method Not Allowed')
    }
}

export default handler