'use strict';
let title = prompt(" Как называется ваш проект? ");
let screens =prompt(" Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет  стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let rollback = 33;
let fullPrice = 666666666;

console.log(typeof(title));
console.log(typeof(fullPrice));
console.log(typeof(adaptive));
console.log(screens.length);
console.log(screenPrice , fullPrice);
console.log(screens.toLowerCase().split("  "));
console.log(fullPrice*(rollback/100));