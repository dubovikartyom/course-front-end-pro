/*1) Реализовать функцию-генератор которая отдаст 10 рандомных чисел в диапазоне переданном в аргументах в ней.*/

function* generateRandomNum(min, max) {
    console.log(min, max)
    yield createRandomNum(min, max);
    yield createRandomNum(min, max);
    yield createRandomNum(min, max);
    yield createRandomNum(min, max);
    yield createRandomNum(min, max);
    yield createRandomNum(min, max);
    yield createRandomNum(min, max);
    yield createRandomNum(min, max);
    yield createRandomNum(min, max);
    yield createRandomNum(min, max);


    function createRandomNum(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
};

let myGenerate = generateRandomNum(1,9);

for(let value of myGenerate){
    console.log(value);
}


/*2) Создать свой распорядок дня с помощью async await ( тоесть мы должны "подождать" выполнение асинхронной функции brushTeeth 
перед тем как приступать к выполнению следующей асинхронной функции)*/
function* generateSchedule(){
    yield "09:00 brush teeth";
    yield "09:30 breakfest";
    yield "10:00 start work";
};

let generateMySchedule = generateSchedule();

async function getSchedule(){
    let firstItem = await generateMySchedule.next();
    let secondItem = await generateMySchedule.next();
    let thirdItem = await generateMySchedule.next();
    return `My morning schedule: 1)${firstItem.value}; 2)${secondItem.value}; 3)${thirdItem.value}`;
}


let mySchedule = await getSchedule();
console.log(mySchedule)