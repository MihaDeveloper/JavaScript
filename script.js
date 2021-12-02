'use strict';
let title = prompt(" Как называется ваш проект? ");
let screens =prompt(" Какие типы экранов нужно разработать?"); 
let screenPrice = +prompt("Сколько будет  стоить данная работа?"); 
let adaptive = confirm("Нужен ли адаптив на сайте?"); 
let service1 = prompt("Какой дополнительный тип услуги нужен?");

let servicePrice1 = 0;
if(service1 != undefined) {
    servicePrice1 = +prompt("Сколько это будет стоить?");
} 
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = 0 ;
if(service2 != undefined) {
    servicePrice2 = +prompt("Сколько это будет стоить?");
}
const rollback = 33;      

function arrayScreens(){
    console.log(screens.split(" "));
}
arrayScreens();

const getAllServicePrices = function (){
    return servicePrice1 + servicePrice2;
};
let allServicePrices = getAllServicePrices();
function getFullPrice (){
    return screenPrice + allServicePrices;
}
let fullPrice = getFullPrice ();
const getServicePercentPrices = function (){
    return console.log(fullPrice - (fullPrice*(rollback/100)));
};
getServicePercentPrices ();

 const getTitle = function (){
    return title.trim()[0].toUpperCase + title.trim().substr(1).toLowerCase;
    };
getTitle();

const getRollbackMessage = function (fullPrice) {
if (fullPrice>=30000) {
    console.log("Даем скидку 10%");
}
else if(15000<=fullPrice && fullPrice<30000){
    console.log("Даем скидку 5%");
}
else if(0<=fullPrice && fullPrice<1500){
    console.log("Скидка не предусмотрена");
}
else{
    console.log("Что-то пошло не так");
}
};
getRollbackMessage(); 

const showTypeOf = function (type){
   return console.log(typeof(type));
};
showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);
