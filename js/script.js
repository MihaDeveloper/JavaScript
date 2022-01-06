'use strict';

const title =document.getElementsByTagName('h1')[0];
// console.log(title);
const buttonPlus = document.querySelector('.screen-btn');
// console.log(buttonPlus);
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
// console.log(otherItemsPercent);
const otherItemsNumber = document.querySelectorAll('.other-items.number');
// console.log(otherItemsNumber);
const inputRange = document.querySelector('.rollback input');
// console.log(inputRange);
const inputRangeValue = document.querySelector('.rollback .range-value');
// console.log(inputRangeValue);
const total = document.getElementsByClassName('total-input')[0];
// console.log(total);
const totalCount = document.getElementsByClassName('total-input')[1];
// console.log(totalCount);
const totalCountOther = document.getElementsByClassName('total-input')[2];
// console.log(totalCountOther);
const fullTotalCount = document.getElementsByClassName('total-input')[3];
// console.log(fullTotalCount);
const totalCountRollback = document.getElementsByClassName('total-input')[4];
// console.log(totalCountRollback);
const startBtn = document.getElementById('start');
// console.log(startBtn);
const resetBtn = document.getElementById('reset');
// console.log(resetBtn);
let screens = document.querySelectorAll('.screen');
console.log(screens);

const appData = {
 title: '',
 screens: [],
 screenPrice: 0,
 adaptive: true,
 rollback: 33,
 servicePricesPercent: 0,
 servicePricesNumber: 0,
 fullPrice: 0,
 servicePercentPrices: 0,
 servicesPercent: {},
 servicesNumber:{},
 
 init: function(){
   
    appData.addTitle();
    startBtn.addEventListener('click', appData.start);
    buttonPlus.addEventListener('click', appData.addScreenBlock);
    inputRange.addEventListener('input', appData.inputValue);
    
 },
addTitle: function(){
document.title = title.textContent;
},
 start: function () {
     
     appData.addScreens();
     appData.addServices();
    
   appData.addPrices();
//    appData.getFullPrice();
//    appData.getServicePercentPrices();
console.log(appData);
appData.showResult();
//    appData.logger();
},
showResult : function(){
total.value = appData.screenPrice;
totalCountOther.value = appData.servicePercentPrices + appData.servicePricesNumber;
fullTotalCount.value = appData.fullPrice;

},
inputValue: function(){
   inputRangeValue.textContent = inputRange.value + "%";
   appData.rollback = inputRangeValue.textContent;
},


addServices:function(){
    otherItemsPercent.forEach(function(item){
    const check = item.querySelector('input[type=checkbox]');
    const label = item.querySelector('label');
    const input = item.querySelector('input[type=text]');
    if(check.checked){
    appData.servicesPercent[label.textContent]= +input.value;
    }
  
    });
    otherItemsNumber.forEach(function (item) {
        const check = item.querySelector('input[type=checkbox]');
        const label = item.querySelector('label');
        const input = item.querySelector('input[type=text]');

        if (check.checked) {
           appData.servicesNumber[label.textContent] = +input.value;
        }

     });
},
addScreens:function(){
    screens = document.querySelectorAll('.screen');

    screens.forEach(function(screen, index){
    const select = screen.querySelector('select');
    const input = screen.querySelector('input');
    const selectName = select.options[select.selectedIndex].textContent;

if (select.value === "" || input.value === ""){
   startBtn.Enabled = false;
   alert('Введите необходимую информацию');
}
else{
   startBtn.Enabled = true;

}

    appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        count:  +input.value
     });

});
console.log(appData.screens);
},
 isNumber: function (num){
    return !isNaN(parseFloat(num)) && isFinite(num) ;

},
addScreenBlock: function(){
const cloneScreen = screens[0].cloneNode(true);
screens[screens.length-1].after(cloneScreen);
},
    
   addPrices: function(){
      
      for (let screen of appData.screens){
        appData.screenPrice += +screen.price;
     }

   
     for (let key in appData.servicesNumber) {
        appData.servicePricesNumber += appData.servicesNumber[key];
     }

     for (let key in appData.servicesPercent) {
        appData.servicePercentPrices += appData.screenPrice * (appData.servicesPercent[key] / 100);
     }
     appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;
     totalCountRollback.value= appData.fullPrice - (appData.fullPrice * (parseFloat(appData.rollback) / 100));
     totalCount.value = appData.screens.reduce((a, b) => a + b.count, 0);
},
  
  


     logger: function () {
        console.log(appData.fullPrice);
        console.log(Math.round(appData.servicePercentPrices));
        console.log(appData.screens);
    
     } 
   
    
};
appData.init();












  
