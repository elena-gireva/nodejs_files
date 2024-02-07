## Инструкция установки, настройки, запуска проекта и тестов.
1. В терминале npm init
2. Создание файла script.js
3. Создание в файле script.js функции calculateBonus (ее будем тестировать через jest)
4. экспортируем фнкцию calculateBonus из файла script.js (module.exports = calculateBonus;)
5. создаем файл для теста calculateBonus.test.js
6. в файле calculateBonus.test.js импортируем функцию для теста (const calculateBonus = require("./script");)
7. в файле calculateBonus.test.js прописываем наборы тестов с разными значениями по технике тест дизайна
8. можно запкстить двумя способами:
    8.1 в терминале можно запустить тесты через npx jest 
    8.2 добавить в файле package.json в разделе script (
        "scripts": {
            "test": "jest"
        },)
        и затем запустить в терминале через npm run test
9. в терминале смотерть логи. 