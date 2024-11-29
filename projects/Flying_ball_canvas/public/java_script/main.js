const canvas = document.getElementById('ball').getContext('2d');

(function(){

  try{

		canvas;

	}catch(error){

		console.log(error + ' Canvas is not supported');

	}

	function draw4Circles(){

		canvas.beginPath();
		canvas.lineWidth = 4;
		canvas.arc(60,60,40,0,Math.PI * 2, false);
		canvas.stroke();
		canvas.closePath();

	}
  draw4Circles();
})();