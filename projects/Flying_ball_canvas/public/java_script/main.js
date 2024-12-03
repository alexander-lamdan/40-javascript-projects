const canvas = document.getElementById("ball");
const ctx = canvas.getContext('2d');

function FlyingBall(x, y, radius, start, end, counterwiseClock,wx,wy,vy,vx) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.start = start;
  this.end = end;
  this.counterwiseClock = counterwiseClock;
  this.wx = wx;
  this.wy = wy;
  this.vy = 5;
  this.vx = 2;

}

FlyingBall.prototype.animateBall = function () {
  
  setInterval(()=>{

    ctx.clearRect(0,0,800,500);
    this.draw();
    this.y += this.vy;
    this.x += this.vx;
		
		if(this.y + this.vy > canvas.height - this.radius || this.y + this.vy < this.radius){
			
			this.vy = -this.vy;
			
		}
		if(this.x + this.vx > canvas.width - this.radius || this.x + this.vx < this.radius){
			
			this.vx = -this.vx;
			
		}
    window.requestAnimationFrame(this.draw);
    
  },10);
  
};

FlyingBall.prototype.draw = function () {
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.arc(this.x,this.y,this.radius,this.start,this.end,this.counterwiseClock);
  ctx.closePath();
  ctx.fill();
  
};

let ball = new FlyingBall(50, 50, 40, 0, Math.PI * 2, true);
ball.draw();

canvas.addEventListener('mouseover',()=>{
	
	window.requestAnimationFrame(ball.animateBall());
	
});