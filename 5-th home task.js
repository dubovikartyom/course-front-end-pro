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
function getInfoUser(role, name){
    let userInfo;
    return userInfo = {
        "role": role,
        "name": name
    };
};
console.log(getInfoUser('admin', 'Bob'));


//5. должна принимать 'aabbbccccd' и возвращать '2a3b4c1d'
function decoder(){
    
};


//6. вернуть строкой количество четных и нечетных чисел [1,2,3,4,NaN, 0, 5, 10]
//7. конвертация валют переданное кол-во гривен в переданную валюту - convert('US', 1000) - вернуть число 27.32
//8. вернуть строку с пробелами между каждым символом 'hello world' => 'h e l l o w o r l d'
//9. вернуть количество часов принимая количество лет getSeconds('5 years') => 43800
//10. обрезать слишком длинную строку trim('hello world', 3) => 'hel...'
