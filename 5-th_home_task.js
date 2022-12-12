//1. для смены регистра всех слов в строке - hello world - Hello World

function capitalyze(str) {
    let space = ' ';
    let newStr = str[0].toUpperCase();

    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] === space) {
            newStr += str[i + 1].toUpperCase();
        }
        else {
            newStr += str[i + 1];
        }
    }

    return newStr;
};
console.log(capitalyze("hello world"));


//2. вернуть массив из длинны строк ['hi', '', 'wow', null, ['I am not a string you are looking for'], 'I am', 123 ] должно выйти [2,3,4]
let arr = ['hi', '', 'wow', null, ['I am not a string you are looking for'], 'I am', 123];
function checkLengthArr(arr) {
    let arrResult = [];
    arr.forEach(x => {
        arrResult.push(String(x).length);
    }
    );
    return arrResult;
};
console.log(checkLengthArr(arr));


//3. вернуть количество гласных в строке 'Hello world' => 3
function checkLetter(str) {
    const vowelsLetter = ["a", "e", "i", "o", "u", "y"];
    let amountVowelsLetter = 0;
    for (let i = 0; i < str.length; i++) {
        amountVowelsLetter += vowelsLetter.indexOf(str[i].toLowerCase()) !== -1 ? 1 : 0;
    }
    return amountVowelsLetter;
};
console.log(checkLetter('Hello world'));


//4. создавать объект в зависимости от переданного вида createUser('admin', Bob') => {role: 'admin', name: 'Bob }, createUser('user', Alice') => {role: 'user', name: 'Alice }
function getInfoUser(role, name) {
    let userInfo;
    return userInfo = {
        "role": role,
        "name": name
    };
};
console.log(getInfoUser('admin', 'Bob'));


//5. должна принимать 'aabbbccccd' и возвращать '2a3b4c1d'
function decoder(str) {
    let decoderResult = [];

    let amountSame = 1;

    str.split('').reduce((accum, item, index, array) => {
        accum = array[index - 1];
        console.log(accum);
        console.log(item);
        if (accum) {
            if (accum === item) {
                amountSame++;
            } else {
                decoderResult.push(amountSame);
                decoderResult.push(accum);
                amountSame = 1;
            }

            if (array.length === index + 1) {
                decoderResult.push(amountSame);
                decoderResult.push(item);
            }
        }
    });

    return decoderResult.join('');
};
console.log(decoder('aabbbccccd'));


//6. вернуть строкой количество четных и нечетных чисел [1,2,3,4,NaN, 0, 5, 10]
function getAnalysString(arr) {
    let even = 0;
    let odd = 0;
    arr.forEach(x => {
        Number(x) % 2 ? even += 1 : odd += 1;
    });
    let resultText = `Количество четных чисел: ${even}, количество нечетных чисел: ${odd}`;
    return resultText;
};
console.log(getAnalysString([1, 2, 3, 4, NaN, 0, 5, 10]));

//7. конвертация валют переданное кол-во гривен в переданную валюту - convert('US', 1000) - вернуть число 27.32

function convertCurrency(currency, amount) {
    const valueCurrency = {
        "EUR": 36.56, 
        "USD": 36.56,
        "PLN": 7.67
    };
    return valueCurrency[currency] ? amount/valueCurrency[currency] : "Данная валюта не поддерживается";
};

console.log(convertCurrency("USD", 1000));

//8. вернуть строку с пробелами между каждым символом 'hello world' => 'h e l l o w o r l d'
function addSpace(str){
    return str.split("").filter(x => x !== ' ').join(' ');
};
console.log(addSpace('hello world'));


//9. вернуть количество часов принимая количество лет getSeconds('5 years') => 43800
function getAmountHours(amountYears){
    return (Number(amountYears.replace(/\D+/g,"")) * 365)*24;
};

console.log(getAmountHours('5 years'));


//10. обрезать слишком длинную строку trim('hello world', 3) => 'hel...'
function cutString(str, amountLetters){
    return `${str.slice(0, amountLetters)}...`;
};
console.log(cutString('hello world', 3))