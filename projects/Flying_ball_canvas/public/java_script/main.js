function canvasApp(){

	drawScreen();
}
canvasApp();

function drawScreen(){

	let theCanvas = document.getElementById('ball');

	if(!theCanvas || !theCanvas.getContext){

		return;

	}

	let ctx = theCanvas.getContext('2d');

	ctx.beginPath();
  ctx.arc(140,70,60,60,0,true);
	ctx.fill();
	ctx.fillStyle = 'yellow';
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(140,190,60,60,0,true);
	ctx.fill();
	ctx.fillStyle = 'green';
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(140,310,60,60,0,true);
	ctx.fill();
	ctx.fillStyle = 'red';
	ctx.stroke();


}
