"use strict";
  
const btnStart = document.querySelector('.start-btn');
const btnReset = document.querySelector('.reset-btn');
const stopBtn = document.querySelector('.stop-btn');

let time = document.querySelector('.time');
let numbers = '00:59:59';
let numbersArr = numbers.split(':');
let setTimer;

btnStart.addEventListener('click',function(){
  
  setTimer = setInterval(function(){
  
    numbersArr[2] -= 1;
    
    if(numbersArr[2] < 0){
      
      numbersArr[2] = Number(60);
      numbersArr[1] -= 1;
      return numbersArr[2];
    }
    if(numbersArr[1] < 0){
      
      numbersArr[1] = Number(60);
      numbersArr[0] -= 1;
      return numbersArr[1];
      
    }
    time.innerText = numbers;
    time.innerText = `00:${numbersArr[1]}:${numbersArr[2]}`;
    
  },1000);
  
},false);

btnReset.addEventListener('click',function(){
  
  clearInterval(setTimer);
  time.innerText = '00:00:00';
  window.location.reload();
  
},false);

stopBtn.addEventListener('click',function(){
  
  clearInterval(setTimer);
  
},false);
