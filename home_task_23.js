/*
        Написать следующие регулярные выражения:
        
        для проверки на валидный номер телефона в формате +3806711222

        для того чтоб получить из html кода все строки другими словами отфильтровать html теги. 
        Пример: <div>Hello</div><span>world</span> должно получится Hello world
*/

const number = "+380671122222";
const regNumber = /^\+380\d{9}$/;
regNumber.test(number) ? console.log("Введен корректный номер телефона"): console.log("Не корректный номер телефона")


const block = '<div>Hello</div><span>world</span>';
const regHtmlBlock = /(?<=>)\w+(?=<)/g;
console.log(block.match(regHtmlBlock))