import { getQuestionSingleHandler, deleteQuestionSingleHandler, changeQuestionSingleHandler } from '@/pages/api/v0/controllers/controllers'

function handler(req, res) {

    switch (req.method) {

        // Получение вопроса по ИД
        case 'GET':
            getQuestionSingleHandler(req, res)
            break

        // Изменение вопроса по ИД, поля вопроса в теле запроса
        case 'PUT':
            changeQuestionSingleHandler(req, res)
            break

        // Удаление вопроса из списка по ИД
        case 'DELETE':
            deleteQuestionSingleHandler(req, res)
            break

        default:
            res.status(405).send('Not found')
            break
    }
}

export default handler