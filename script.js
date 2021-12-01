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
let rollback = 33;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = fullPrice - (fullPrice*(rollback/100));
console.log(Math.ceil(servicePercentPrice));
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
/* console.log(typeof(title));
console.log(typeof(fullPrice));
console.log(typeof(adaptive));
console.log(screens.length);
console.log(screenPrice , fullPrice);
console.log(screens.toLowerCase().split("  "));
console.log(fullPrice*(rollback/100)); */