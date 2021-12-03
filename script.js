'use strict';
let title,
screens, 
screenPrice, 
adaptive, 
service2,
service1,
fullPrice,
ServicePercentPrices,
allServicePrices;
const rollback = 33;     

const isNumber = function (num){
    return !isNaN(parseFloat(num)) && isFinite(num) ;
};

const asking = function (){
    title = prompt(" Как называется ваш проект? ");
    screens =prompt(" Какие типы экранов нужно разработать?"); 
        do{
        screenPrice = prompt("Сколько будет  стоить данная работа?"); 
    }
    while(!isNumber(screenPrice));

    adaptive = confirm("Нужен ли адаптив на сайте?"); 
};

function arrayScreens(){
    return screens.split(" ");
}

const getAllServicePrices = function (){
    let sum = 0;
    for (let i=0; i<2; i++){
        let price =0;
        if(i === 0){
            service1 = prompt("Какой дополнительный тип услуги нужен?");
        }
        if(i === 1){
            service2 = prompt("Какой дополнительный тип услуги нужен?");
        } 
        do {
        price = prompt("Сколько это будет  стоить?");
    }
    while(!isNumber(price));
    sum += +price;
}
 return sum;
};

function getFullPrice (){
    return screenPrice + allServicePrices;
}

const getServicePercentPrices = function (){
    return (fullPrice - (fullPrice*(rollback/100)));
};


 const getTitle = function (){
    return title.trim()[0].toUpperCase + title.trim().substr(1).toLowerCase;
    };
const getRollbackMessage = function (Price) {
if (Price>=30000) {
    return "Даем скидку 10%";
}
else if(15000 <= Price && Price<30000){
    return "Даем скидку 5%";
}
else if(0<=Price && Price <15000){
    return "Скидка не предусмотрена";
}
else{
    return "Что-то пошло не так";
}
};

const showTypeOf = function (type){
   return console.log(typeof(type));
};
asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice ();
console.log(getRollbackMessage(fullPrice)); 
screens = console.log(arrayScreens());
ServicePercentPrices = getServicePercentPrices ();
title = getTitle();


showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);
