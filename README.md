# QUIZ на NextJS + PostgreSQL 'Что будет выведено в консоль?'

main - главная ветка
develop - ветка разработки
feature/... - ветки разработки фичей
hotfix/... - ветки исправления багов
release/m.m.p - ветки релизов

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

## Merge branch

- git checkout develop
- git merge hotfix
- git checkout main
- git merge develop

## Delete branch

- git branch -D hotfix


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
