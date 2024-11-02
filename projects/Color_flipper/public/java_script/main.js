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
    
    //#f1f1f1 - that what I need
    // abcdef1234567890
    
    let letters = '0123456789ABCDEF';
    let hexColor = '#';
    for(let i = 0; i < 6; i++){
      
      hexColor += letters[(Math.floor(Math.random() * 16))];
      
    }
    
    let currentHexColor = document.getElementById('hex-color');
    let textColor = document.querySelector('.current-color');
    
    document.body.style.backgroundColor = hexColor;
    
    textColor.style.color = 'white';
    currentHexColor.innerText = hexColor;
    
  },false);
  
})();
