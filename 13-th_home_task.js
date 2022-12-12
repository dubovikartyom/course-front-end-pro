/*Создать цепочку классов для создания объектов шиншилл.

Млекопитающее => грызуны => шиншилловые => шиншиллы

В каждом классе должны быть методы или свойства которые присущи данной ступени наследования.

Если есть желание цепочка может быть другая(машины или т.д. главное чтоб была указанная глубина наследования)*/
class Mammal {
    constructor(){
        this.hasFourpaws = true;
    }
};

class Rodents extends Mammal {
    constructor(){
        super();
        this.gnaw = true;
    }
};

class FamilyChinchilla extends Rodents {
    constructor(){
        super();
        this.fluffy = true;
    }
};

class Chinchilla extends FamilyChinchilla {
    constructor(){
        super();
        this.cute = true;
    }
}

let myChinchilla = new Chinchilla();
console.log(myChinchilla)