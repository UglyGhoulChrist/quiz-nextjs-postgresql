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