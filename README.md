# QUIZ по JavaScript 'Что будет выведено в консоль?'

## [Проект на платформе Vercel](https://quiz-nextjs-postgresql.vercel.app/)

### Страницы:

- Главная: *Static Site Generation (SSG)*
    - Карточки вопросов с вариантами ответов. По нажатию на кнопку всплывает модальное окно с правильным ответом и пояснением.

- Админка: *Client-side Rendering (CSR)*
    - Форма позволяет добавлять новые вопросы. 
    - Список карточек с вопросом, вариантами ответов, правильным ответом и пояснением. На карточке есть кнопка удаления вопроса.

### Технологии, применённые в проекте:

- NextJS (client & server)
- PostgreSQL (on platform Vercel)
- GitFlow
- package:
    - @vercel/postgres
    - react-hook-form
    - highlight.js