//1. set up varriables
const MyName = "Artem";
let myName = MyName;
//change meaning of varriable (meaning of const don't change, only link in obj)
myName = "Alex";
console.log(myName);

//2.
let user,
    superUser,
    activeUsers,
    isActive;

//3.
//arr with randoms number
let numbers = [1, 3, 45, 67, 982];

//example obj
let clientInfo = {
    "Name": "Ivan",
    "Surname": "Ivanov",
    "Balance": 2000,
    "Limit": 10000,
    "isVIP": true
};
//example string
let message = "Hello world";

//4.
/*1. 10 < 3 = false

2. ‘hi’ != ‘hello’ = true

3. 1 == ‘1’ = true

4. null == ‘null’ = false

5. null === undefined = false

6. 1 === 1 && ‘hi’ = true

7. true && ‘I love js’ = true

8. 123 && ‘hi’ || ‘hello’ = true

9. 0+ ? true : false = false

10. 1 + 1 = 2

11. '12' + '31' = 1231

12. 3 / '3' = 1

13. 10 * 'hello' = Nan

14. '13'++ = error

15. ++13 = 14
*/

//16
//example logic for check authorize with help 'if'

let role = 'admin' //user - обычный пользователь || admin - админ || superAdmin - супер админ || null - не авторизованный


if (role === 'user') {
    console.log("Welcome, user");
} else if (role === 'admin') {
    console.log("Welcome, admin")
} else if (role === 'superAdmin') {
    console.log("Welcome, super admin")
} else {
    console.log("Please, log in")
}

//example logic for check authorize with help 'switch'
switch (role) {
    case 'user':
        console.log("Welcome, user")
        break;
    case 'admin':
        console.log("Welcome, admin")
        break;
    case 'superAdmin':
        console.log("Welcome, super admin")
        break;
    default:
        console.log("Please, log in")
        break;
}

//example logic for check authorize with help ternary operator
role === 'user' ? console.log("Welcome, user") :
    role === 'admin' ? console.log("Welcome, admin") :
    role === 'superAdmin' ? console.log("Welcome, super admin") :
    console.log("Please, log in");

//17 
let product = "peach";
//check kind product
switch (product){
    //fruit
    case "apple":
    case "banana":
    case "pineapple":
    case "peach":
    case "grape":
        console.log("it's fruit")
        break;
    //vegetables
    case "potatoes":
    case "tomato":
    case "pepper":
    case "cucumber":
    case "carrot":
        console.log("it's vegetable")
        break;
    //other products
    default:
        console.log("product doesn't find")
}
