const canvas = document.getElementById("ball").getContext("2d");

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

    canvas.clearRect(0,0,800,500);
    this.draw();
    this.y += this.vy;
    this.x += this.vx;
    window.requestAnimationFrame(this.draw);
    
  },10);
  
};

FlyingBall.prototype.draw = function () {
  canvas.beginPath();
  canvas.lineWidth = 3;
  canvas.arc(this.x,this.y,this.radius,this.start,this.end,this.counterwiseClock);
  canvas.closePath();
  canvas.fill();
  
};

let ball = new FlyingBall(50, 50, 40, 0, Math.PI * 2, true);
ball.draw();
ball.animateBall();
