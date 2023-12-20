# QUIZ на NextJS + PostgreSQL 'Что будет выведено в консоль?'

[Code on GitHub](https://github.com/UglyGhoulChrist/quiz-nextjs-postgresql.git)    
[Project on Vercel](https://quiz-nextjs-postgresql.vercel.app/)    
[API on Vercel](https://quiz-nextjs-postgresql.vercel.app/api/questions/) Methods [GET, POST, ]   
[API on Vercel](https://quiz-nextjs-postgresql.vercel.app/api/questions/:id) Methods [GET, PUT, DELETE, ]   

main - главная ветка    
develop - ветка разработки    
feature/... - ветки разработки фичей    
hotfix/... - ветки исправления багов    
release/m.m.p - ветки релизов    

## Started

yarn                  - installing dependencies    
yarn dev              - run the development server    
http://localhost:3000 - open with your browser to see the result    

## Start of the project

- yarn create next-app quiz-nextjs-postgresql
- cd quiz-nextjs-postgresql
- code .

## Created branch

- git branch develop
- git checkout develop
- git branch feature/index-page
- git checkout feature/index-page

## Created

- pages [index, ]
- layouts [Layout, ]
- components [Header, Card, Button, Modal]

## Merge branch

- git checkout develop
- git merge feature/index-page

## Created branch

- git branch feature/api
- git checkout feature/api

## Created

- pages [api/questions, ]

## Changed

- index.js [questionsList -> getStaticProps, ]

## Merge branch

- git checkout develop
- git merge feature/api
- git checkout main
- git merge develop

## Created branch

- git branch hotfix
- git checkout hotfix

## Corrections

- index.module.css
- Card.module.css
- Header.module.css
- reset.css

## Merge branch

- git checkout develop
- git merge hotfix
- git checkout main
- git merge develop

## Delete branch

- git branch -D hotfix

## Created branch

- git branch feature/rest-api
- git checkout feature/rest-api

## Created

- pages [api/questions/:id, ]

## Corrections

- pages [api/question.js, ]

## Merge branch

- git checkout develop
- git merge feature/rest-api
- git checkout main
- git merge feature/rest-api

## Created branch

- git branch feature/rest-api-controllers
- git checkout feature/rest-api-controllers

## Created

- pages [api/controllers/controllers.js, ]

## Corrections

- pages [api/question.js, api/questions/[:id].js, ]

## Merge branch

- git checkout develop
- git merge feature/rest-api-controllers

## Created branch

- git branch feature/admin
- git checkout feature/admin

## Created

- pages [admin, ]
- components [CardAdmin, Form, ]
- fetch(URL, { method: 'DELETE' })
- fetch(URL, { method: 'POST' })

## Corrections

- next.config.js [ env ]
- components [Form, ]
- components [Form -> React Hook Form, ]

## Created branch

- git branch hotfix/structure-question
- git checkout hotfix/structure-question

## Corrections

- fixed the structure of the question (array=>string)

## Created branch

- hotfix/string-question-converted-pre-question

## Corrections

- fixed the structure HTML of the question (div>pre*n => pre)

## Created branch

- hotfix/highlight

## Corrections

- fixed highlight code

## Created branch

- hotfix/modal-hidden

## Corrections

- fixed the appearance of a modal window when loading

## Created branch

- hotfix/answer-options

## Corrections

- fixed answer-options and added color style

## Created branch

- hotfix/card-title-javascript

## Corrections

- fixed card-title-javascript

## Created branch

- git branch feature/postgresql
- git checkout feature/postgresql

## Added dependencies

- yarn add @vercel/postgres

## API 

https://quiz-nextjs-postgresql.vercel.app/api/v1/createTable 'GET'
https://quiz-nextjs-postgresql.vercel.app/api/v1/questions 'GET'
https://quiz-nextjs-postgresql.vercel.app/api/v1/questions/:id 'GET'
https://quiz-nextjs-postgresql.vercel.app/api/v1/questions 'POST'
https://quiz-nextjs-postgresql.vercel.app/api/v1/questions 'DELETE'
https://quiz-nextjs-postgresql.vercel.app/api/v1/questions/:id 'DELETE'

## PostgreSQL

- Id serial primary key
- Question text
- ListAnswers varchar(255)[]
- RightAnswer integer
- Explanation text

## Corrections

question = {
    "id": 0,
    "question": "code \n code \n code",
    "listanswers": [
        "answer-0", "answer-1", "answer-2", "answer-3"
    ],
    "rightanswer": 0,
    "explanation": "text"
}

## Created

- https://.../api/v1/questions... (postgresql)

## Corrections

- https://.../api/questions... =>  https://.../api/v0/questions... (questions.js)
