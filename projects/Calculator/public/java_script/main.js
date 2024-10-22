let calculator = {
  
  buttons:{
    zero:document.getElementById('zero'),
    one:document.getElementById('one'),
    two:document.getElementById('two'),
    three:document.getElementById('three'),
    four:document.getElementById('four'),
    five:document.getElementById('five'),
    six:document.getElementById('six'),
    seven:document.getElementById('seven'),
    eight:document.getElementById('eight'),
    nine:document.getElementById('nine'),
    procent:document.getElementById('procent'),
    divide:document.getElementById('divide'),
    clear:document.getElementById('clearOutput'),
    minus:document.getElementById('minus'),
    plus:document.getElementById('plus'),
    equal:document.getElementById('equal'),
    multiply:document.getElementById('multiply')
  },
  outputForm:document.getElementById('formOutput'),
  
  main(){
    
    const clearBtn = this.buttons.clear;
    
    let outputForm = this.outputForm;
    
    clearBtn.addEventListener('click', function(){
      
      if(outputForm.value != ''){
        
        outputForm.value = '';
        location.reload();
        
      }
      
    });
    this.numbers();
    this.mathOperations();
    //this.results();
  },
  
  numbers:function(){
    
    const buttons = [this.buttons.zero,this.buttons.one,this.buttons.two,this.buttons.three,this.buttons.four,this.buttons.five, this.buttons.six,this.buttons.seven,this.buttons.eight,this.buttons.nine];
    
    let output = this.outputForm;
    
    buttons.forEach((button)=>{
      
      button.addEventListener('click',function(){
        
        output.value += button.value;
        return output.value;
        
      });
      
    });
    
  },
  
  mathOperations:function(){
    
    const mathSymbols = [this.buttons.divide,this.buttons.minus,this.buttons.multiply,this.buttons.plus,this.buttons.procent];
    const equalBtn = this.buttons.equal;
    
    let output = this.outputForm;
    
    mathSymbols.forEach(symbol=>{
      
      symbol.addEventListener('click',function(){
        
        output.value += symbol.value;
        
        equalBtn.addEventListener('click', function(){
          
          let outputStr;
          
          switch(symbol.value){
          
            case '/':
              outputStr = String(output.value).split(symbol.value);
              output.value = Number(outputStr[0]) / Number(outputStr[1]);
              break;
            case '*':
              outputStr = String(output.value).split(symbol.value);
              output.value = Number(outputStr[0]) * Number(outputStr[1]);
              break;
            case '+':
              outputStr = String(output.value).split(symbol.value);
              output.value = Number(outputStr[0]) + Number(outputStr[1]);
              break;
            case '-':
              outputStr = String(output.value).split(symbol.value);
              output.value = Number(outputStr[0]) - Number(outputStr[1]);
              break;
            case '%':
              outputStr = String(output.value).split(symbol.value);
              output.value = Number(outputStr[0]) % Number(outputStr[1]);
              break;
            default:
              console.log('default dammit');
            
          }
          
        });
        
      });
      
    });
    
  }
  
};
calculator.main();
