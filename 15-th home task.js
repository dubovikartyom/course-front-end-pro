/*Создать цепочку промисов (длинной минимум в 3) - свой распорядок дня

например

 (brushTeeth.then(() => dosmthelse.then(())*/

 let mySchedule = new Promise( function(resolve, reject){
    setTimeout(() => resolve(['09:00', 'breakfast']), 10000);
}).then(function(result){
    console.log(result);
    result.push(['09:30', 'physical jerks']);
    return result;
}).then(function(result){
    console.log(result);
    result.push(['11:00', 'start working']);
    return result;
}).then(function(result){
    console.log(result);
});