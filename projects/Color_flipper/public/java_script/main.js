(function(){
  
  let btnRGB = document.getElementById('rgbGenerate');
  let btnHex = document.getElementById('hexGenerate');
  
  btnRGB.addEventListener('click',function(){
    
    let firstNumbers = String((Math.floor((Math.random() * 256) + 1)));
    let secondNumbers = String((Math.floor((Math.random() * 256) + 1)));
    let thirdNumbers = String((Math.floor((Math.random() * 256) + 1)));
    let RGB = `RGB(${firstNumbers},${secondNumbers},${thirdNumbers})`;
    document.body.style.backgroundColor = RGB;
    let currentColorText = document.getElementById('rgb-color');
    let textColor = document.querySelector('.current-color');
    textColor.style.color = 'white';
    currentColorText.innerText = RGB;
    
    
  },false);
  
  btnHex.addEventListener('click',function(){
    
    // abcdef1234567890
    let letters = ['a','b','c','d','e','f'];
    let numbers = String(Math.floor((Math.random() * 10) + 1));
    
  },false);
  
})();
