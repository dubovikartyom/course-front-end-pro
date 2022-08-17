const usersArray = [
    {
        name: "John",
        balance: '2000$',
        friends: [
            {
                name: "Robert",
                balance: '1000$',
            },
            {
                name: "Kate",
                balance: '0$',
            },
        ],
    },
    {
        name: "Isaac",
        balance: '20000$',
        friends: [
            {
                name: "Bob",
                balance: '2000$',
            },
            {
                name: "Robert",
                balance: '150000$',
            },
        ],
    },
    {
        name: "Jane",
        balance: '200$',
        friends: [
            {
                name: "Kate",
                balance: '5000$',
            },
            {
                name: "Anne",
                balance: '1234$',
            },
            {
                name: "Bob",
                balance: '300$',
            },
        ],
    },
    {
        name: "Russell",
        balance: '100$',
        friends: [],
    },
];

//1) Вывести имя самого богатого пользователя

//prepare balance in arr
let arrTemp = JSON.stringify(usersArray);
arrTemp = JSON.parse(arrTemp);

//convert balance in number
arrTemp.forEach(x => {
    x.balance = parseInt(x.balance);
    if(x.friends){
        x.friends.forEach(z => z.balance = parseInt(z.balance));
    }
});

//select top balance user's
let topBalance = arrTemp.reduce((prev,item) => {
    return item.balance > prev.balance ? item : prev;
});

//top balance user
console.log(topBalance.name);

//2) Отсортировать пользователей по имени в алфавитном порядке

let arrSortNames = usersArray.sort((a, b) => {
    if(a.name < b.name){
        return -1;
    }else if(a.name > b.name){
        return 1;
    }
});

//show sort arr for names
console.log(arrSortNames);

//3) Вывести общий баланс пользователей

let totalAmount = 0;

//use arr with convert balances
arrTemp.forEach(x => totalAmount += x.balance);

//show total balance users
console.log(totalAmount);

//4) Удалить пользователя Russell

//check index elem with name = "Russell"
let indexDeletedElement = usersArray.findIndex((element) => element.name === "Russell");

//delete element with name "Russell"
usersArray.splice(indexDeletedElement, 1);
console.log(usersArray);

//5) Удалить пользователя Isaac
indexDeletedElement = null;
//find index elem with name "Isaac"
indexDeletedElement = usersArray.findIndex((element) => element.name === "Isaac");

//delete elem
usersArray.splice(indexDeletedElement, 1);
console.log(usersArray);

//6) Добавить пользователя Harry после John
let indexAddElem = usersArray.findIndex((element) => element.name === "John");
usersArray.splice(indexAddElem +1, 0, {"name": "Harry", "balance": '0$', "friends": []});
//arr with add elem Harry after John
console.log(usersArray);

//7) Добавить пользователя Conor в конец массива
usersArray.push({"name": "Conor", "balance": '5000$', "friends": []});

console.log(usersArray);

//8) Вывести массив всех пользователей включая друзей без повторения
const arrFriends = usersArray.map(x => x.friends);
arrFriends.flat();
const arrAllUsers = usersArray.concat(arrFriends.flat());
console.log(arrAllUsers);

//9) Вывести массив пользователей у которых баланс больше 2000$
//prepare updated arr with new users
arrTemp = null;
arrTemp = JSON.stringify(usersArray);
arrTemp = JSON.parse(arrTemp);

//convert balance in number
arrTemp.forEach(x => {
    x.balance = parseInt(x.balance);
    if(x.friends){
        x.friends.forEach(z => z.balance = parseInt(z.balance));
    }
});

//select rich users
let richUsers = [];
richUsers = arrTemp.filter(x => x.balance > 2000);
console.log(richUsers);

//10) Вывести имя самого богатого пользователя(включая друзей)

//convert balance in number
//set up value arr with all ysers (with friends)
arrTemp = null;
arrTemp = JSON.stringify(arrAllUsers);
arrTemp = JSON.parse(arrTemp);

//convert balance in number
arrTemp.forEach(x => {
    x.balance = parseInt(x.balance);
    if(x.friends){
        x.friends.forEach(z => z.balance = parseInt(z.balance));
    }
});

const mostRichUser = arrTemp.reduce((prev, item) => {
    return item.balance > prev.balance ? item : prev
});
//show name most rich user
console.log(mostRichUser.name)

