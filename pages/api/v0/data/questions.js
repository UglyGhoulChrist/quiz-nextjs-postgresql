const questions = [
    {
        "id": 0,
        "question":
            "(() => {\n    let x, y;\n    try {\n        throw new Error();\n    } catch (x) {\n        (x = 13), (y = 42);\n        console.log(x);\n    }\n    console.log(x);\n    console.log(y);\n})();"
        ,
        "listanswers": [
            "13 undefined 42",
            "undefined undefined undefined",
            "13 13 42",
            "13 undefined undefined"
        ],
        "rightanswer": 0,
        "explanation": "Функцию немедленного вызова, наверное, все узнали :). В ней определен блок try, который пытается выполнить код, в нем находящийся. При условии возникновения ошибки в этом блоке будет вызван блок catch. Ошибка в блоке try генерируется вручную посредством искусственного ее выбрасывания через throw. После этого код попадает в блок catch, который получает аргумент x. Однако, это не тот же x, который определен в области видимости функции, а тот, котоый имеет блочную область видимости. Этому аргументу присваивается значение 13, и это значение будет действовать в блоке catch, где будет первый раз выведена в консоль. Для переменной y в этом же блоке устанавливается значение 42, но эта переменная уже определена в области видимости функции, а не блока. После чего блок catch заканчивается и оказывается, что переменная х в области видимости функции не определена (она умерла в блоке catch) - ее значение undefined, а переменная y - инициализирована в блоке catch и получила значение 42. Ну а скобки вокруг присваиваний - для отвлечения внимания :)."
    },
    {
        "id": 1,
        "question":
            "const numbers = [13, 47, 42, 0, 11];\nconst [number] = numbers;\n\nconsole.log(number);"
        ,
        "listanswers": [
            "[13, 47, 42, 0, 11]",
            "[[13, 47, 42, 0, 11]]",
            "13",
            "[13]"
        ],
        "rightanswer": 2,
        "explanation": "Синтаксис деструктуризации массивов позволяет распаковать значения из массивов или объектов. Например, после выполнения [a, b] = [1, 2] значение переменной а будет равно 1, а значение b - 2. Таким образом, в примере значение переменной number будет равно первому значению в массиве numbers, а именно 13."
    },
    {
        "id": 2,
        "question":
            "const ops = {\n  add: (x, y) => x + y,\n  sub: (x, y) => x - y,\n  mul: (x, y) => x * y,\n  div: (x, y) => x / y,\n};\nconst calc = (f, x, y) => f(x, y);\nconsole.log(calc(ops.mul, calc(ops.add, 6, 8), calc(ops.div, 21, 7)));"
        ,
        "listanswers": [
            "14",
            "28",
            "42",
            "ReferenceError"
        ],
        "rightanswer": 2,
        "explanation": "Что же тут можно добавить, кроме того, что JS очень красивый и гибкий язык, и, при должном умении, его запросто можно превратить в Brainfuck :)?"
    },
    {
        "id": 3,
        "question":
            "function capitalize(str) {\n  str[0] = str[0].toUpperCase();\n  return str;\n}\n\nconsole.log(capitalize('uuuups'));"
        ,
        "listanswers": [
            "Uuuups",
            "uuuups",
            "UUUUps",
            "U"
        ],
        "rightanswer": 1,
        "explanation": "Строки в JS иммутабельны - не подлежат изменению. Поэтому str[0] = str[0].toUpperCase() не вносит никаких изменений в строку. Если, действительно, нужна измененная строка, то надо сформировать новую из необходимых фрагментов исходной."
    }
]

export default questions