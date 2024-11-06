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
      
      numbers.split(':').forEach(function(val){
        
        let number1 = ParseInt(val);
        console.log(typeof number1);
        
      });
      
      time.innerText = numbers;
      
      
    },false);
    
  }
  
}
countdownClock.startTime();
