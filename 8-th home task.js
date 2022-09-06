/*
Дано - объект user который прийдет к нам с бекенда. 
Мы в коде хотим использовать user.cart[0].price. 
Что является ценой первого товара из корзины пользователя. 
Объект пользователя до ответа с бекенда нам не известен. 
Задача - написать код с логированием цены так чтоб код не упал с ошибкой до того как бекенд вернет ответ с объектом пользователя.
Задачу выполнить трема способами.
*/
let user = {

    cart: [],
  
  };


//1-st option
user?.cart?.price ? console.log (user.cart[0].price) : console.log("Упс, что-то пошло не так");

//2-nd option
try {
    console.log(user.cart[0].price);
} catch (error) {
    console.log("Упс, что-то пошло не так");
}

//3-rd option
(user && user.cart[0] && user.cart[0].price) ? console.log(user.cart[0].price) : console.log("Упс, что-то пошло не так");