//1) Избавится от неуникальных элементов массива
const numbersArray = [1,1,2,3,4,5,5,5,6];
let uniqueValues = new Set();
numbersArray.forEach(x => uniqueValues.add(x));
const uniqueNumbersArray = Array.from(uniqueValues.values());
console.log(uniqueNumbersArray)

//2) Создать Map который будет по переданному объекту возвращать строку привествия
const userBob = {
    name: "Bob",
    age: 19
};

const userJane = {
    name: "Jane",
    age: 25
};


const mapForGreeting = new Map();
mapForGreeting.set(userBob, "Hello Bob nice to see you");
mapForGreeting.set(userJane, "How your kids doing Jane?");

console.log(greetUser(userBob)) // Hello Bob nice to see you
console.log(greetUser(userJane)) // How your kids doing Jane?

//Иными словами создать Map где ключ это будет объект а значение строка

function greetUser (objUser){
    return mapForGreeting.get(objUser);
};

//3) Создать функцию по превращению Map в object или object в Map в зависимости от того что было передано в функцию.
let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);


function convertMapAndObj (mapOrObj){
    if(mapOrObj instanceof Map){
        return Object.fromEntries(mapOrObj.entries())
    }else{
        return new Map(Object.entries(mapOrObj));
    }
};

console.log(convertMapAndObj(map));
console.log(convertMapAndObj(userBob));