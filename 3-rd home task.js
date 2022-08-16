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
