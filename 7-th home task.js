//1) Что выведет код в консоль?
const user = {
    name: 'Bob',
    sayHi: function () {
        console.log(`Hi I am ${this.name}`)
    }
}
user.sayHi()
const greetingsFunc = user.sayHi;
greetingsFunc()
const user2 = {
    name: 'Jane',
    sayHi: greetingsFunc
};
user2.sayHi()
/*  При первом вызове user.sayHi(), мы обратимся к обьекту перед точкой и получим "Hi I am Bob"
    При втором вызове greetingsFunc() обьект this "теряется", из-за того что мы переприсвоили user.sayHi другой переменной и она не имеет доступа к const user, мы получаем this.name === undefined
    При третем вызове user2.sayHi() мы присваиваем функцию внутрь обьекта user2, поэтому она получает "новый" this и this.name === Jane
*/


//2) Написать функцию-конструктор для создания объектов домашних питомцев. Пример объекта который должна возвращать функция:
const example = {
    name: 'Quick',
    kind: 'chinchilla',
    color: 'black'
};

function Pets(name, kind, color) {
    this.name = name;
    this.kind = kind;
    this.color = color;
};

let myPet = new Pets("Akira", "hasky", "black");
console.log(myPet);

//3) Написать рекурсивное решение для расчет суммы всех символов в числе  152092 => 19
function sumTo(x) {
    x = String(x);
    console.log(x);

    if (x.length === 1) {
        return Number(x);
    } else {
        return Number(x.charAt(x.length - 1)) + sumTo(x.substring(0, x.length -1));
    }
};

console.log(sumTo(152092));
