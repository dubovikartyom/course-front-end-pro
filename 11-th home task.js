/*Создать функцию которая будет принимать имя пользователя и время через которое он хочет чтоб его поприветствовали. 
Время пользователь хочет вводить строкой в разном формате например '10 minutes' , '20 seconds', '1 hour', '2 hours'*/
function greetingsUser (name, time){
    //prepare data for parse
    arrUserTime = time.split(' ');

    //diff string with name and time alert
    let [countTime, timeType] = arrUserTime;
    countTime = Number(countTime);


    if(timeType == "second" || timeType == "seconds"){
        return setTimeout(() => console.log(`Hello, ${name}`), 1000 * countTime);
    }else if(timeType == "minutes" || timeType == "minute"){
        return setTimeout(() => console.log(`Hello, ${name}`), (1000 * countTime)*60);
    }else if(timeType == "hour" || timeType == "hours"){
        return setTimeout(() => console.log(`Hello, ${name}`), ((1000 * countTime)*60)*60);
    }else if(timeType == "day" || timeType == "days"){
        return setTimeout(() => console.log(`Hello, ${name}`), (((1000 * countTime)*60)*60)*24);
    }
};

//greetingsUser ('Artem', "1 minutes");

//Создать функцию которая будет или сериализировать или десериализировать объект в зависимости от того в какой форме он был передан
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
  };


function jsonConverter (strOrObj) {
    return typeof strOrObj === "object" ? JSON.stringify(strOrObj) : JSON.parse(strOrObj);
    //return result;
};

console.log(jsonConverter(student));
//console.log(jsonConverter('{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }'))

//Создать функцию которая вернет true или false в зависимости от того что в нее передать JSON строку или обычную строку

function checkJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

console.log(checkJson("Hello"));
console.log(checkJson('{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }'));