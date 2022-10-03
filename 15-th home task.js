/*Создать цепочку промисов (длинной минимум в 3) - свой распорядок дня

например

 (brushTeeth.then(() => dosmthelse.then(())*/

 const morning = new Promise(function(resolve){
    resolve("09:00 brush teeth");
})

const morningWalk = morning.then(function(value){
    // возвращаем новое значение
    return value + ", 09:30 walk with dog";
});
const goWork = morningWalk.then(function(value){
    // возвращаем новое значение
    return value + ", 10:00 start work";
});
goWork.then(function(finalValue){
    // получаем финальное значение
    console.log(finalValue);
});

