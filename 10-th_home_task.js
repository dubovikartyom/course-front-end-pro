/*Создать функцию которая будет принимать миллисекунды и вернет true или false в зависимости от того сегодня ли 
то число которое было передано*/
function checkCurrentDate (date){
    let checkingDate = new Date(date);
    let currentDate = new Date;
    let currentYear = currentDate.getUTCFullYear();
    let currentMonth = currentDate.getUTCMonth();
    let currentDay = currentDate.getUTCDate();

    if(checkingDate.getUTCFullYear() === currentDate.getUTCFullYear()){
        if(checkingDate.getUTCMonth() === currentDate.getUTCMonth()){
            if(checkingDate.getUTCDate() === currentDate.getUTCDate()){
                return true
            }else return false
        }else return false;
    }else{
        return false;
    }
};

console.log(checkCurrentDate(Date.now()));
console.log(checkCurrentDate(1662811249000));
console.log(checkCurrentDate(1654862449000));


//Создать функцию которая вернет дату и время в формате 13.10.2022 13:13 принимая миллисекунды
function prepareDate (timestamp){
    let date = new Date (timestamp);
    return `${date.getUTCDate()}.${date.getUTCMonth()+1}.${date.getUTCFullYear()} ${date.getHours()}:${date.getMinutes()}`;
}

console.log(prepareDate(1663105489000));

//Создать функцию которая принимает миллисекунды и вернет количество времени которое прошло или должно пройти с текущего момента.
function diffDates (timestamp){
    let timeNow = Date.now();
    return `${((timeNow - timestamp)/3600000).toFixed(1)} hours`
}

console.log(diffDates(1663094689000));