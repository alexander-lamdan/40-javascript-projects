"use strict";
let countdownClock = {
  
  buttons:{
    
    btnStart:document.querySelector('.start-btn'),
    btnStop:document.querySelector('.stop-btn'),
    resetBtn:document.querySelector('.reset-btn')
    
  },
  
  startTime:function(){
    
    this.buttons.btnStart.addEventListener('click',function(event){
      
      let time = document.querySelector('.number');
      
      
    },false);
    
  }
  
}
countdownClock.startTime();
