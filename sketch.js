var hr,min,sec

function setup() {
  createCanvas(400,400);
}

function draw() {
  background(0,0,0);
  hr = hour();
  min = minute();
  sec = second();  
  angleMode(DEGREES)
  secAngle = map(sec,0,60,0,360)
 //push();
  rotate(secAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(200,200,100,0)
  translate(100,100)
 // pop();
}