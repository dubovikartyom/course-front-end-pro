/*Создать класс(можно взять с прошлого дз) и добавить ему приватных полей 
(например пол шиншиллы явно должен быть защищен от изменения после создания) 
и статических полей ( например адрес шиншиллы, 
потому что например все инстансы будут жить под одной крышей такую информацию можно вынести на уровень класса)*/
class Mammal {
    constructor(){
        this.hasFourpaws = true;
    }
    static adress = "Argentina"
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
    
    sayName(){
        return "Chinchillas name Monica";
    }
    #saySecretChinchillas(){
        return "This is secret";
    }
}

let myChinchilla = new Chinchilla();


let wereLiveChinchilla  = Chinchilla.adress;
console.log(wereLiveChinchilla)

console.log(myChinchilla.sayName()); //Example public method
//console.log(myChinchilla.#saySecretChinchillas());       //this log return error
