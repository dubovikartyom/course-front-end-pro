//Создать следующие функции:

//1. объявить переменную выше функции присвоить ей значение и вывести ее значение в функции объявленой ниже.
let exampleVariable = "Hello, I test variable";

function exampleFunc() {
    console.log(exampleVariable);
};

exampleFunc();

//2. объявить переменную выше функции присвоить ей значение, объявить функцию ниже и в ней объявить переменную с тем же названием что и выше но с другим значением. Залогировать переменную. Какое у нее будет значение то что ниже или выше?
let example1 = "Hello";

function func1() {
    let example1 = "Good by";
    return example1;
};
example1 = func1();
console.log(example1);
//ответ: в момент исполнения функции она обращается к своему лексическому окружению, которое в первую очередь состоит из переменных внутри (let example1 = "Good by";), а уже в следующей итерации будут просмотрены внешние переменные, затем глобальные


//3. Каким будет значение переменной a в консоле. Написать почему.
var a = 10

function foo() {

    console.log(a)

}

function bar() {

    var a = 20

    foo()

}

bar();

//значение переменной a=10, так как функция foo забрала внешнию переменную со среды в которой была создана, а не в которой обьявлена


//4. Каким будет значение переменной a в консоле. Написать почему

var a = 10

function foo() {

    var a = 20

    console.log(a)

}

a = 30

foo()

//значение переменной a=20, потому что функция foo сначала проверит свое лексическое окружение внутри, перед проверкой внешнего


//5. Починить код ниже чтоб он логировал 0,1,2,3,4,5
//сломанный код
for (var i = 0; i < 5; i++) {

    setTimeout(function () {

        console.log(i);

    }, 0)

}
//починенный код
for (let i = 0; i < 5; i++) {

    setTimeout(function () {

        console.log(i);

    }, 0)

}

//6. Создать функцию которая внутри себя будет реализовывать счетчика.Из функции вернуть текущее значение счетчика и функцию чтоб его увеличить.

function counter() {
    let count = 0;

    return function increase () {
        let accum = count;
        return [accum, ++count]
    };
}

let exampleCounter = counter();
console.log(exampleCounter(), exampleCounter(), exampleCounter(), exampleCounter());