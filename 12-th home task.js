/*Создать цепочку прототипов машина => определенная марка машины.
У итогового инстанса должны быть как функции машины типа ехать и тормозить из прототипа так и функции связанные с маркой машины типа вертикального открытия дверей Lamborghini.*/
let car = {
    drive: true
  };
  let zaz = {
    break: true
  };
  
  zaz.__proto__ = car;


  let tavria = {
    break_down: true
  }

  tavria.__proto__ = zaz;

  console.log(tavria.break, tavria.drive, tavria.break_down)