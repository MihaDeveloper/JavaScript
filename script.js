'use strict';

const appData = {
 title: '',
 screens: '',
 screenPrice: 0,
 adaptive: true,
 service2: '',
 service1: '',
 fullPrice: 0,
 ServicePercentPrices: 0,
 allServicePrices: 0,
 rollback: 33,
    asking: function (){
    appData.title = prompt(" Как называется ваш проект? ");
    appData.screens =prompt(" Какие типы экранов нужно разработать?"); 
        do{
        appData.screenPrice = prompt("Сколько будет  стоить данная работа?"); 
     
    }
    while(!appData.isNumber(appData.screenPrice));
    appData.screenPrice = +appData.screenPrice.trim();
    appData.adaptive = confirm("Нужен ли адаптив на сайте?"); 
},
isNumber: function (num){
    return !isNaN(parseFloat(num)) && isFinite(num) ;

},
getAllServicePrices: function (){
    let sum = 0;
    for (let i=0; i<2; i++){
        let price =0;
        if(i === 0){
            appData.service1 = +prompt("Какой дополнительный тип услуги нужен?");
        }
        if(i === 1){
            appData.service2 = +prompt("Какой дополнительный тип услуги нужен?");
        } 
        do {
        price = +prompt("Сколько это будет  стоить?");
    }
    while(!appData.isNumber(price));
    sum += +price;
}
 return sum;
},
arrayScreens:function(){
    return appData.screens.split(" ");
},

 getFullPrice: function (){
    return appData.screenPrice + appData.allServicePrices;
},

 getServicePercentPrices: function (){
    return (appData.fullPrice - (appData.fullPrice*(appData.rollback/100)));
},
 getRollbackMessage: function () {
    if (appData.fullPrice>=30000) {
        return "Даем скидку 10%";
    }
    else if(15000 <= appData.fullPrice && appData.fullPrice<30000){
        return "Даем скидку 5%";
    }
    else if(0<=appData.fullPrice && appData.fullPrice <15000){
        return "Скидка не предусмотрена";
    }
    else{
        return "Что-то пошло не так";
    }
    
    },
    logger: function () {
        console.log('вся необходимая информация');
  
        for (let key in appData) {
           console.log('ключ ' + key + ' значение ' + appData[key]);
        }
     },
   
    start : function(){
        appData.asking();
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice ();
        appData.ServicePercentPrices = appData.getServicePercentPrices ();
        appData.logger();
    }
    
    
};

appData.start();











/* appData.asking();
appData.allServicePrices = appData.getAllServicePrices();
appData.fullPrice = appData.getFullPrice ();
appData.ServicePercentPrices = appData.getServicePercentPrices (); */
/* console.log(appData.arrayScreens());
console.log(appData.getRollbackMessage());
console.log(appData.fullPrice);
console.log(appData.ServicePercentPrices);
 */
