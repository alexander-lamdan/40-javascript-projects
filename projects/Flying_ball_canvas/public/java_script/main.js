const canvas = document.getElementById('ball').getContext('2d');

window.onload = function(){

  try{

		canvas;

	}catch(error){

	  console.log(error+' canvas not working');

	}

  canvas.fillStyle= 'red';
	canvas.fillRect(60,60,50,50);

}
