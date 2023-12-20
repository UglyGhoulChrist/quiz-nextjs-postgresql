import { getQuestionsHandler, addQuestionsHandler } from '@/pages/api/v0/controllers/controllers'

function handler(req, res) {

    switch (req.method) {

        // Получение списка вопросов
        case 'GET':
            getQuestionsHandler(req, res)
            break

        // Создание вопроса, поля вопроса в теле запроса
        case 'POST':
            addQuestionsHandler(req, res)
            break

        default:
            res.status(405).send('Not found')
    }
}

export default handler