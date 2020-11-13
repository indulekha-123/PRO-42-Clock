var hr = hour();
 var mn = minute();
var sc = second();


angleMode = "degrees";

function setup() {
  createCanvas(800,800);
  
  scAngle =  map (sc , 0, 60,0,360);
  hrAngle = map(hr,0,24,0,360);
  mnAngle=map(mn,0,30,0,360);

}

function draw() {
  background("black"); 

  arc(50, 55, 50, 50);
  arc(50, 50, 80, 80, 0);
  arc(50, 50, 80, 40, 0);
  
noFill();

  push ();
  rotate (scAngle);
  stroke (255,0,0);
  strokeWeight(7);
  line (300,300,400,400);


  rotate (hrAngle);
 stroke (995,190,0);
  strokeWeight(7);
  line (300,300,150,150);
  
  rotate (mnAngle);
  stroke (79,90,0);
strokeWeight(7);
line (300,300,510,200);

pop ();



  drawSprites();
}

