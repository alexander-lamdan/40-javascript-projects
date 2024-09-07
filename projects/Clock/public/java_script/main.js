const time = new Date();
let hours = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();
let spanHours = document.getElementById('hours');
let spanMinutes = document.getElementById('minutes');
let spanSeconds = document.getElementById('seconds');
let format = document.getElementById('timeFormat');

let btn24hour = document.getElementById('to24H');
let btn12hour = document.getElementById('to12H');

let clock = setInterval(()=>{
 
  seconds = seconds < 10 ? '0' + seconds : seconds;
  format.textContent = hours >= 12 ? 'pm' : 'am';
  
  spanHours.textContent = hours;
  spanMinutes.textContent = minutes;
  spanSeconds.textContent = seconds;
  seconds++;
  
  if(seconds > 59){
    
    seconds = 0;
    minutes++;
    
  }
  else if(minutes > 59){
    
    minutes = 0;
    hours++;
    
  }
  
},1000);

//Continue the buttons time converter
