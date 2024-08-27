const time = new Date();
let hours = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();
let spanHours = document.getElementById('hours');
let spanMinutes = document.getElementById('minutes');
let spanSeconds = document.getElementById('seconds');
let format = document.getElementById('timeFormat');

function runClock(){
  
  setInterval(function(){
    
    seconds++;
    spanSeconds.innerText = seconds;
    spanMinutes.innerText = minutes;
    spanHours.innerText = hours;
    
    if(spanSeconds.innerText >= 60){
      
      spanSeconds.innerText = 0;
      
    }
    
    if(spanMinutes >= 60){
      
      spanMinutes.innerText = minutes;
      
    }
    
  },1000);
  
}
runClock();
