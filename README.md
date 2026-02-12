# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)
  uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc)
  uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
    extends: [
        // Remove ...tseslint.configs.recommended and replace with this
        ...tseslint.configs.recommendedTypeChecked,
        // Alternatively, use this for stricter rules
        ...tseslint.configs.strictTypeChecked,
        // Optionally, add this for stylistic rules
        ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
        // other options...
        parserOptions: {
            project: ['./tsconfig.node.json', './tsconfig.app.json'],
            tsconfigRootDir: import.meta.dirname,
        },
    },
})
```

You can also
install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x)
and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom)
for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
    plugins: {
        // Add the react-x and react-dom plugins
        'react-x': reactX,
        'react-dom': reactDom,
    },
    rules: {
        // other rules...
        // Enable its recommended typescript rules
        ...reactX.configs['recommended-typescript'].rules,
        ...reactDom.configs.recommended.rules,
    },
})
```

branch lesson-1

    branch hw1-gi01MZ6v
    з arrays.js взяти масив coursesTitleArray. Вивести кожен його елемент, створивши необхідні моделі та компоненти
    Стилізація довільна, але обов’язково підключена і мінімально зроблена (хоча б один стиль, який працює).

    branch hw2-Fs05Kiho
    з arrays.js взяти масив coursesAndDurationArray.
    Вивести кожен його елемент, створивши необхідні моделі та компоненти
    Стилізація довільна, але обов’язково підключена і мінімально зроблена (хоча б один стиль, який працює).

    branch hw3-kLZQR7Q98
    з arrays.js взяти масив simpsons.
    Кореневим компонентом є App
    Створити компонент CharacterComponent, який буде містити всю інформацію щодо окремого об’єкту масиву. Розмітка компонента     довільна. Опис персонажу передати через children.
    Створити компонент FamilyComponent, в якому буде відбуватись ітерація по масиву simpsons.
    Стилізація довільна, але обов’язково підключена і мінімально зроблена (хоча б один стиль, який працює).

    branch hw4-#yiugR7&TF
    з arrays.js взяти масиви coursesArray. Створити необхідні моделі та компоненти для того, щоб повноцінно відобразити його
    Стилізація довільна, але обов’язково підключена і мінімально зроблена (хоча б один стиль, який працює).

branch lesson-2

    branch hw1-ohm4AivCEBv
    https://jsonplaceholder.typicode.com/todos – тут масив даних. Ознайомтесь з ним для початку
    Створити компонент TodoComponent, який буде містити інформацію про окремий об’єкт з масиву.
    Створити компонент TodoComponents, в якому відбувається ітерація масиву даних, отриманих з апі.
    Кореневим компонентом є App

    branch hw2-x7sQQ3cJ3
    https://jsonplaceholder.typicode.com/posts – тут масив даних. Ознайомтесь з ним для початку.
    Створити необхідні моделі та компоненти та вивести всю інформацію за аналогією з попереднім завданням.
    Додати мінімальну стилізацію

    branch hw3-98uhQGhaN
    https://jsonplaceholder.typicode.com/comments – тут масив даних. Ознайомтесь з ним для початку.
    Створити необхідні моделі та компоненти та вивести всю інформацію за аналогією з попереднім завданням.
    Додати мінімальну стилізацію

    branch hw4-q2faxfR
    Те саме, що і попередні завдання, але дані отримати з апі - https://dummyjson.com/docs

    branch hw5-hQj9gOH
    Те саме що і попередні завдання, але данні отримати з апі – https://dummyjson.com/products

branch lesson-3
  branch #chszHaH9
    Побудувати меню з можливістю переходу на наступні сторінки:
    /users
    /posts
    /comments
    /products
    Контент на сторінках відсутній. Лише грамотна обробка роутів в двох варіантах (router object  та browser router (необов’язково, але рекомендовано))
  branch #qL0b5uh
    Побудувати меню, з можливістю переходу на наступні маршрути:
    /users/jsonplaceholder
    /users/dummyjson
    /posts/jsonplaceholder
    /posts/dummyjson
    /comments/jsonplaceholder
    Контент на сторінках відсутній. Лише грамотна обробка роутів
  branch #Uyj2GjyDDF
    Побудувати меню, з можливістю переходу на наступні маршрути:
    /users/jsonplaceholder – відобразити всі об’єкти з  https://jsonplaceholder.typicode.com/users
    /users/dummyjson – відобразити всі об’єкти з https://dummyjson.com/users
    /posts/jsonplaceholder- відобразити всі об’єкти з  https://jsonplaceholder.typicode.com/posts
    /posts/dummyjson – відобразити всі об’єкти з https://dummyjson.com/posts
    /comments/jsonplaceholder – відобразити всі об’єкти з https://jsonplaceholder.typicode.com/comments
    /comments/dummyjson – відобразити всі об’єкти з https://dummyjson.com/comments
  branch #tntlwuxFxI5
    Маршрутизація.
    Є наступні сторінки: UsersPage – відтворює користувачів з api dummyjson.com (довільна розмітка та кількість інфи про об’єкт) PostsPage – відтворює пости з  api dummyjson.com (довільна розмітка та кількість інфи про об’єкт)
    Відтворювати тільки перший відданий пул об’єктів (30 об’єктів чи скільки віддає апі) (без пагінації і не звертаючи увагу на залишки)
  branch #z5PFSTAK
    На головній сторінці вивести всіх користувачів з будь-якого апі.
    При кліку на певного користувача вивести його корзини товарів, не заміняючи батьківський компонент (поруч з зі списком користувачів)
  branch #knZgVIwvqd
    На головній сторінці вивести всіх користувачів з будь-якого апі.
    При кліку на певного користувача вивести його корзини товарів, заміняючи(!!!!!) батьківський компонент списком з корзинами.