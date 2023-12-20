import { sql } from '@vercel/postgres'

// Создание таблицы
async function createTable(req, res) {
    const result =
        await sql`CREATE TABLE TableQuestions ( Id serial primary key, Question text, ListAnswers varchar(255)[], RightAnswer integer, Explanation text );`
    return res.status(200).json({ result })
}

// Получение всех вопросов
async function getQuestionsAllHandler(req, res) {
    const tableQuestions = await sql`SELECT * FROM TableQuestions;`
    const questionsList = tableQuestions.rows
    return res.status(200).json({ questionsList })
}

// Получение вопроса по ИД
async function getQuestionSingleHandler(req, res) {
    const id = req.query.id
    const tableQuestions = await sql`SELECT * FROM TableQuestions WHERE Id=${id};`
    const questionsList = tableQuestions.rows
    return res.status(200).json({ questionsList })
}

// Создание вопроса
async function createQuestionSingleHandler(req, res) {
    try {
        const { question, listAnswers, rightAnswer, explanation } = req.body
        if (!question || listAnswers.length <= 1 || !rightAnswer in [0, 1, 2, 3] || !explanation) throw new Error('Question required')
        await sql`INSERT INTO TableQuestions (Question, ListAnswers, RightAnswer, Explanation) VALUES (${question}, ${listAnswers}, ${rightAnswer}, ${explanation});`
    } catch (error) {
        return res.status(500).json({ error })
    }

    const tableQuestions = await sql`SELECT * FROM TableQuestions;`
    const questionsList = tableQuestions.rows
    return res.status(201).json({ questionsList })
}

// Изменение вопроса по ИД
async function changeQuestionSingleHandler(req, res) {
    return res.status(200).res('It will be done later')
}

// Удаление вопроса из списка по ИД
async function deleteQuestionSingleHandler(req, res) {
    const id = req.query.id
    await sql`DELETE FROM TableQuestions WHERE Id=${id};`
    const tableQuestions = await sql`SELECT * FROM TableQuestions;`
    const questionsList = tableQuestions.rows
    return res.status(200).json({ questionsList })
}

// Удаление всех вопросов из списка
async function deleteQuestionsAllHandler(req, res) {
    await sql`DELETE FROM TableQuestions;`
    const tableQuestions = await sql`SELECT * FROM TableQuestions;`
    const questionsList = tableQuestions.rows
    return res.status(200).json({ questionsList })
}

export {
    createTable,
    getQuestionsAllHandler,
    getQuestionSingleHandler,
    createQuestionSingleHandler,
    changeQuestionSingleHandler,
    deleteQuestionSingleHandler,
    deleteQuestionsAllHandler
}