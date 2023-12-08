import questions from "@/pages/api/data/questions"

function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(questions)
    }
}

export default handler