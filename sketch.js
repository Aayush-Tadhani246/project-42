var hr,min,sec

function setup() {
  createCanvas(400,400);
}

function draw() {
  background(0,0,0);
  rotate(-90)
  hr = hour();
  min = minute();
  sec = second();  
  angleMode(DEGREES)
  secAngle = map(sec,0,60,0,360)
  // minAngle = map(sec,0,60*60,0,360)
  // hrAngle = map(hr,0,60,0,1)
  pop()
  translate(200,200)
  rotate(secAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
  noFill()
  arc(0,0,300,300,0,secAngle);
  // rotate(minAngle)
  // stroke(0,250,0)
  // line(0,0,75,0)
  // rotate(hrAngle)
  // stroke(0,0,255)
  // line(0,0,50,0)
  pop()
}
