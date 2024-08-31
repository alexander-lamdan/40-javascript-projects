let calculator = {
  
  zeroBtn:document.getElementById('zero'),
  oneBtn:document.getElementById('one'),
  twoBtn:document.getElementById('two'),
  threeBtn:document.getElementById('three'),
  fourBtn:document.getElementById('four'),
  fiveBtn:document.getElementById('five'),
  sixBtn:document.getElementById('six'),
  sevenBtn:document.getElementById('seven'),
  eightBtn:document.getElementById('eight'),
  nineBtn:document.getElementById('nine'),
  procentBtn:document.getElementById('procent'),
  divideBtn:document.getElementById('divide'),
  clearBtn:document.getElementById('clearOutput'),
  minusBtn:document.getElementById('minus'),
  plusBtn:document.getElementById('plus'),
  equalBtn:document.getElementById('equal'),
  multiplyBtn:document.getElementById('multiply'),
  bracketsBtn:document.getElementById('brackets'),
  plusOrMinusBtn:document.getElementById('plusOrMinus'),
  twoZerosBtn:document.getElementById('twoZeros'),
  outputValue: document.querySelector('.calculator-form__output'),
  
  main:function(){
    
    this.addNumbers();
    this.procentTask();
    this.divideTask();
    this.resultOutput();
    
  },
  
  addNumbers:function(){
    
    let outputValue = this.outputValue;
    
    this.zeroBtn.addEventListener('click',function(){
      
      outputValue.textContent += this.value;
      
    },false);
    
    this.oneBtn.addEventListener('click',function(){
      
      if(outputValue.textContent == 0){
        
        outputValue.textContent = '';
        outputValue.textContent += this.value;
        
      }else{
        
        outputValue.textContent += this.value;
        
      }
      
    },false);
    
    this.twoBtn.addEventListener('click',function(){
      
      if(outputValue.textContent == 0){
        
        outputValue.textContent = '';
        outputValue.textContent += this.value;
        
      }else{
        
        outputValue.textContent += this.value;
        
      }
      
    },false);
    
    this.threeBtn.addEventListener('click',function(){
      
      if(outputValue.textContent == 0){
        
        outputValue.textContent = '';
        outputValue.textContent += this.value;
        
      }else{
        
        outputValue.textContent += this.value;
        
      }
      
    },false);
    
    this.fourBtn.addEventListener('click',function(){
      
      if(outputValue.textContent == 0){
        
        outputValue.textContent = '';
        outputValue.textContent += this.value;
        
      }else{
        
        outputValue.textContent += this.value;
        
      }
      
    },false);
    
    this.fiveBtn.addEventListener('click',function(){
      
      if(outputValue.textContent == 0){
        
        outputValue.textContent = '';
        outputValue.textContent += this.value;
        
      }else{
        
        outputValue.textContent += this.value;
        
      }
      
    },false);
    
    this.sixBtn.addEventListener('click',function(){
      
      if(outputValue.textContent == 0){
        
        outputValue.textContent = '';
        outputValue.textContent += this.value;
        
      }else{
        
        outputValue.textContent += this.value;
        
      }
      
    },false);
    
    this.sevenBtn.addEventListener('click',function(){
      
      if(outputValue.textContent == 0){
        
        outputValue.textContent = '';
        outputValue.textContent += this.value;
        
      }else{
        
        outputValue.textContent += this.value;
        
      }
      
    },false);
    
    this.eightBtn.addEventListener('click',function(){
      
      if(outputValue.textContent == 0){
        
        outputValue.textContent = '';
        outputValue.textContent += this.value;
        
      }else{
        
        outputValue.textContent += this.value;
        
      }
      
    },false);
    
    this.nineBtn.addEventListener('click',function(){
      
      if(outputValue.textContent == 0){
        
        outputValue.textContent = '';
        outputValue.textContent += this.value;
        
      }else{
        
        outputValue.textContent += this.value;
        
      }
    },false);
    
    this.clearBtn.addEventListener('click',function(){
      
      if(outputValue.textContent !== 0){
        
        outputValue.textContent = 0;
        
      }
      
    },false);
    
    return outputValue;
  
  },
  
  procentTask:function(){
    
    let outputValue = this.outputValue;
    
    this.procentBtn.addEventListener('click',function(){
      
      outputValue.textContent += this.value;
      
    },false);
    
    return outputValue;
  
  },
  
  divideTask:function(){
    
    let outputValue = this.outputValue;
    
    this.divideBtn.addEventListener('click',function(){
      
      outputValue.textContent += this.value;
      
    },false);
    
    return outputValue;
  
  },
  
  resultOutput:function(){
    
    let outputValue = this.outputValue;
    
    this.equalBtn.addEventListener('click',function(){
      
      
      
    },false);
    
  }
  
};
calculator.main();
