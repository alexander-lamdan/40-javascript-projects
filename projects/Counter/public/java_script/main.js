const decreaseBtn = document.querySelector('.decrease-btn');
const increaseBtn = document.querySelector('.increase-btn');
const resetBtn = document.querySelector('.reset-btn');

let textNumber = document.querySelector('.number');

decreaseBtn.addEventListener('click',function(){
  
  textNumber.innerText--;
  
});

increaseBtn.addEventListener('click',function(){
  
  textNumber.innerText++;
  
});

resetBtn.addEventListener('click',function(){
  
  textNumber.innerText = 0;
  
});
