"use strict";
let countdownClock = {
  
  buttons:{
    
    btnStart:document.querySelector('.start-btn'),
    btnStop:document.querySelector('.stop-btn'),
    resetBtn:document.querySelector('.reset-btn')
    
  },
  
  startTime:function(){
    
    this.buttons.btnStart.addEventListener('click',function(event){
      
      let time = document.querySelector('.time');
      let numbers = '00:59:59';
      let numbersArr = numbers.split(':');
      
      setInterval(()=>{
        
        numbersArr[2] -= 1;
        if(numbersArr[2] < 1){
          
          numbersArr[2] = Number(59);
          numbersArr[1] -= 1;
          
          return numbersArr[2];
          
        }
        if(numbersArr[1] < 1){
          
          numbersArr[1] = Number(59);
          numbersArr -= 1;
          return numbersArr[1];
          
        }
        
        time.innerText = `00:${numbersArr[1]}:${numbersArr[2]}`;
        
      },1000);
      
      time.innerText = numbers;
      
      
    },false);
    
  }
  
}
countdownClock.startTime();
