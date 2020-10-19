function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  background(220);
}

function draw() {

brainDraw();
  // trainDraw();
 




}

function trainDraw() {
  
  //train front 
  rect (100, 100, 200, 100)
  rect (100, 195, 200, 30)
  
  ellipse (100, 152, 40, 105)
  // triangle ()
//   rect ()
  
}


function brainDraw() {
  noStroke();
  fill ('#f2a876')
  // arc (300, 300, 40, 40, 0, 40);
  circle(300, 305, 30)
  circle(280, 310, 35)
  circle(255, 305, 30)
  circle(260, 305, 30)
  circle(240, 282, 35)
  circle(275, 250, 35)
  circle(255, 257, 35)
  circle(295, 255, 35)
  circle(310, 265, 30)
  circle(315, 285, 35)
  rect (255, 260, 50, 50)
  
  strokeCap (ROUND);
  
  noFill();
  

  //white highlights
  stroke (255)
  arc (255, 257, 28, 28, -170, 0)
  arc (295, 255, 28, 28, -130, -45)
  arc (258, 305, 28, 28, 50, 195)
  arc (240, 282, 28, 28, 30, 115)
   arc (295, 305, 28, 28, -30, 40)
   arc (315, 285, 28, 28, 0, 90)
  

  
   stroke ('#ad6842');
  strokeWeight (3);
  
   arc (255, 257, 35, 35, -190, -20)
  arc (295, 255, 35, 35, -110, 0)
  arc (258, 305, 35, 35, 50, 195)
    arc (240, 282, 35, 35, 60, 155)
   arc (295, 305, 35, 35, -30, 100)
   arc (315, 285, 35, 35, 0, 90)
  
  //brain inner wrinkles
  arc (245, 270, 10, 10, 0, 120)
  arc (255, 265, 10, 10, 0, 160)
  
  arc (270, 300, 15, 15, 50, 160)
   arc (315, 285, 15, 15, -90, 10)
  arc (310, 275, 15, 15, -90, 10)
  arc (285, 283, 15, 15, -120, -20)

  



}