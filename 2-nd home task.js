//превратить строку "Hello world" в "Hello World!"

const welcomeText = "Hello world";
//create temporary arr with words
let temp = welcomeText.split(' ');
console.log(temp);

//start cycle for processing words
for(let i=0; i < temp.length; i++){
    console.log(temp[i]);
    //select only first letters
    var upperWords = temp[i].slice(0, 1).toUpperCase();
    console.log(upperWords);
    //change first letters in words
    temp[i] = temp[i].replace(temp[i].charAt(0), upperWords);
    console.log(temp[i]);
};
console.log(temp);
//prepare new sentence
const capitalizeWelcomeText = temp[0]+' '+temp[1]+'!';
console.log(capitalizeWelcomeText);


//написать цикл который будет логировать тип данных каждого символа строки (например "a123" - в итоге должна быть строка "string, number, number. number"(Внимание именно в таком формате - иными словами в один ряд))

const strChecked = "a123";
let arrWords = strChecked.split("");
console.log(arrWords);

var typeStrData = [];

for(let i2 = 0; i2 < arrWords.length; i2++){
    var re = /[0-9]/;
    if(re.test(arrWords[i2])){
        typeStrData.push("Number");
    }else{
        typeStrData.push("String");
    }
};
console.log(typeStrData);
const strInfoType = typeStrData.join(", ");
console.log(strInfoType);
