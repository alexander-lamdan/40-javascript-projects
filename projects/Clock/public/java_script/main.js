const time = new Date();
let hours = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();
let spanHours = document.getElementById('hours');
let spanMinutes = document.getElementById('minutes');
let spanSeconds = document.getElementById('seconds');
let format = document.getElementById('timeFormat');

let clock = setInterval(function(){
  
  spanHours.innerText = hours;
  spanMinutes.innerText = minutes;
  spanSeconds.innerText = seconds;
  
  
  if(spanSeconds.innerText > 59){
    
    spanSeconds.innerText = 0;//BUG not resets the seconds to zero
    
  }
  if(spanMinutes.innerText > 59){
    
    spanMinutes.innerText = 0;
    
  }
  seconds++;
},1000);
