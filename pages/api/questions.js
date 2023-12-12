import questions from "@/pages/api/data/questions"

// Глубокая копия массива
const questionsList = structuredClone(questions)

function handler({ method, body }, res) {

    switch (method) {
        // Получение списка вопросов
        case 'GET':
            res.status(200).json(questionsList)
            break

        // Создание вопроса, поля вопроса в теле запроса
        case 'POST':

            const newQuestion = {
                // Генерация ID случайным образом
                id: Math.floor(Math.random() * 1000),
                question: body.question || ['question', 'question', 'question'],
                listAnswers: body.listAnswers || ['answer', 'answer', 'answer', 'answer'],
                rightAnswer: body.rightAnswer || Math.floor(Math.random() * 4),
                explanation: body.explanation || 'explanation'
            }

            questionsList.push(newQuestion)
            res.status(201).json(newQuestion)
            break

        default:
            res.status(404).send('Not found')
    }
}

export default handler
export { questionsList }