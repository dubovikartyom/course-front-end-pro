/*1) Реализовать функцию-генератор которая отдаст 10 рандомных чисел в диапазоне переданном в аргументах в ней.*/

function* generateRandomNum(min, max) {

    const from = 0;
    const to = 9;

    for (let i = from; i <= to; i++) yield createRandomNum(min, max);

    function createRandomNum(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
};

let myGenerate = generateRandomNum(1, 9);

for (let value of myGenerate) {
    console.log(value);
}


/*2) Создать свой распорядок дня с помощью async await ( тоесть мы должны "подождать" выполнение асинхронной функции brushTeeth 
перед тем как приступать к выполнению следующей асинхронной функции)*/

async function getSchedule() {
    let firstItem = await new Promise(function (resolve) {
        resolve("09:00 brush teeth");
    });

    let secondItem = await new Promise(function (resolve) {
        resolve("09:30 breakfest");
    });;
    let thirdItem = await new Promise(function (resolve) {
        resolve("10:00 start work");
    });

    return `My morning schedule: 1)${firstItem}; 2)${secondItem}; 3)${thirdItem}`;
};

console.log(await getSchedule());