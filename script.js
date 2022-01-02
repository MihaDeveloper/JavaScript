'use strict';
const inputText=document.getElementById('text');
const inputRange=document.getElementById('range');
const button = document.getElementById('square');
const eBtn = document.getElementById('e_btn');
const circle = document.getElementById('circle');
// console.dir(circle.style);
// console.log(inputRange);
// console.log(inputText);
// console.log(eBtn);
const logger = function(){
    console.log(inputRange.value);
    circle.style.width = inputRange.value + '%';
    circle.style.height = inputRange.value + '%';
};
const changeColor = function(){
   button.style.backgroundColor =   inputText.value;
   eBtn.style.display = 'none';
    console.log(inputText.value);
};
inputText.addEventListener('change', logger);
button.addEventListener('click', changeColor);
inputRange.addEventListener('input', logger);



