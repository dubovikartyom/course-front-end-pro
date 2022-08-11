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