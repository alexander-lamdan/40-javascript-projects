const canvas = document.getElementById('ball').getContext('2d');

function FlyingBall(x,y,radius,start,end,counterwiseClock){
	
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.start = start;
	this.end = end;
	this.counterwiseClock = counterwiseClock;
	
}
FlyingBall.prototype.animateBall = function(){
	
	window.requestAnimationFrame(this.draw);
	
	setInterval(()=>{
		
		canvas.clearRect(0,0,canvas.height,canvas.width);
		this.draw();
		this.x += Math.floor(Math.random() * 5);
		this.y += Math.floor(Math.random() * 5);
		
	},100);
	
}
FlyingBall.prototype.draw = function(){
	
	canvas.beginPath();
	canvas.lineWidth = 3;
	canvas.arc(this.x,this.y,this.radius,this.start,this.end,this.counterwiseClock);
	canvas.stroke();
	canvas.closePath();
	
}
let ball = new FlyingBall(50,50,40,0,Math.PI * 2,false);
ball.draw();
ball.animateBall();
