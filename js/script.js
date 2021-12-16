'use strict';
const title = document.getElementsByTagName('h1')[0];
const handlerBtn=document.getElementsByClassName('handler_btn');
const plus=document.querySelector('.screen-btn');
const items1=document.querySelectorAll('.other-items.percent');
const items2=document.querySelectorAll('.other-items.number');
const inputRange =document.querySelector('.rollback input');
const getSpan=document.querySelector('.rollback span');
const input1=document.getElementsByClassName('total-input')[0];
const input2=document.getElementsByClassName('total-input')[1];
const input3=document.getElementsByClassName('total-input')[2];
const input4=document.getElementsByClassName('total-input')[3];
const input5=document.getElementsByClassName('total-input')[4];

let Screen=document.querySelectorAll('.screen');

const appData = {
 title: '',
 screens: [],
 screenPrice: 0,
 adaptive: true,
 rollback: 33,
 allServicePrices: 0,
 fullPrice: 0,
 servicePercentPrices: 0,
 services: {},
 

 start: function () {
   appData.asking();
   appData.addPrices();
   appData.getFullPrice();
   appData.getServicePercentPrices();
   appData.getTitle();
   appData.logger();
},

 isNumber: function (num){
    return !isNaN(parseFloat(num)) && isFinite(num) ;

},
    asking: function (){   
       do{     
        appData.title = prompt(" Как называется ваш проект? " , "Калькулятор верстки");
       }while(!isNaN(appData.title));
         
       function check() {
         for (let i = 0; i < 2; i++) {
            let name = prompt('Какие типы экранов нужно разработать?', 'Простые, Средние ,Сложные ');
            let price = 0;

         
            if (!isNaN(name)) {
               check();
            }

            do {
               price = prompt('Сколько будет стоить данная работа ?');
            } 
            while (!appData.isNumber(price));

            appData.screens.push({
               id: i,
               name: name,
               price: price
            });
         }
      }
      check();
       function check1(){
         for (let i = 0; i < 2; i++) {          
            
            let name = prompt('Какой дополнительный тип услуги нужен?');
            let price = 0;
            if(!isNaN(name)){
                check1();
            }
            
            do {
               price = prompt('Сколько это будет стоить?');
            }
            while (!appData.isNumber(price));

            appData.services[name + i] = +price;
         }
      }
         check1();
         appData.adaptive = confirm("Нужен ли адаптив на сайте?"); 
      
      },
   addPrices: function(){
      for(let screen of appData.screens){
         appData.screenPrice+= +screen.price;
      }  
      for(let key in appData.services){
         appData.allServicePrices +=appData.services[key];
   }
},

   getFullPrice: function (){
      appData.fullPrice= +appData.screenPrice +appData.allServicePrices;
  }, 
  getServicePercentPrices: function (){
   appData.servicePercentPrices = (appData.fullPrice - (appData.fullPrice*(appData.rollback / 100)));
},
getTitle : function(){
   appData.title = appData.title.trim()[0].toUpperCase()+ appData.title.trim().substr(1).toLowerCase();
},  

arrayScreens:function(){
    return appData.screens.split(", ");
},

 getRollbackMessage: function (price){
    if (price>=30000) {
        return "Даем скидку 10%";
    }
    else if(15000 <= price && price<30000){
        return "Даем скидку 5%";
    }
    else if(0<=price && price < 15000){
        return "Скидка не предусмотрена";
    }
    else{
        return "Что-то пошло не так";
    }
    
    },
     logger: function () {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrices);
        console.log(appData.screens);
    
     } 
   
    
};
//appData.start();
 











  
