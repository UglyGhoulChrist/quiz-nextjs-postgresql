import questions from "@/pages/api/v0/data/questions"

// Глубокая копия массива
const questionsList = structuredClone(questions)

// Получение списка вопросов
const getQuestionsHandler = (req, res) => {
    res.status(200).json(questionsList)
}

// Получение вопроса по ИД
const getQuestionSingleHandler = (req, res) => {

    const question = questionsList.find(({ id }) => id == req.query.id)

    if (question) {
        res.status(200).json(question)
    } else {
        res.status(404).send('Not found')
    }
}

// Создание вопроса, поля вопроса в теле запроса
const addQuestionsHandler = (req, res) => {

    const newQuestion = {
        // Генерация ID случайным образом
        id: Math.floor(Math.random() * 1000),
        question: req.body.question || ['question', 'question', 'question'],
        listAnswers: req.body.listAnswers || ['answer', 'answer', 'answer', 'answer'],
        rightAnswer: req.body.rightAnswer || Math.floor(Math.random() * 4),
        explanation: req.body.explanation || 'explanation'
    }

    questionsList.push(newQuestion)
    res.status(201).json(newQuestion)
}

// Удаление вопроса из списка по ИД
const deleteQuestionSingleHandler = (req, res) => {

    const deleteId = questionsList.findIndex(({ id }) => id == req.query.id)

    if (deleteId === -1) {
        res.status(404).send('Not found')
    } else {
        questionsList.splice(deleteId, 1)
        res.status(200).json(questionsList)
    }
}

// Изменение вопроса по ИД, поля вопроса в теле запроса
const changeQuestionSingleHandler = (req, res) => {

    const putId = questionsList.findIndex(({ id }) => id == req.query.id)

    if (putId === -1) {
        res.status(404).send('Not found')
    } else {
        questionsList.forEach(question => {
            if (question.id == req.query.id) {
                question.question = req.body.question || question.question
                question.listAnswers = req.body.listAnswers || question.listAnswers
                question.rightAnswer = req.body.rightAnswer || question.rightAnswer
                question.explanation = req.body.explanation || question.explanation
            }
        })
        res.status(200).json(questionsList)
    }
}

export { getQuestionsHandler, getQuestionSingleHandler, addQuestionsHandler, deleteQuestionSingleHandler, changeQuestionSingleHandler }