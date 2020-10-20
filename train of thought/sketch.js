var f = 0;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  background(255);
}

function draw() {

//   clear();
//   f += 0.002
//   for (j = 1; j < 6; j++) {
//     stroke(map(j, 0, 5, 255, 32), 0, map(j, 0, 5, 255, 32));
//     s = f * pow(1.8, j)

//     for (i = 0; i < 800; i++) {
//       line(i, j * 90 + 200 - noise(s + i / 200) * 400, i, 800)
//     }
//   }
  push()

  lightbulbDraw();
  // translate(0, 100)
  // scale(0.9)

  // push()
  // translate(-290, -430)
  // scale(3.2, 3);
  // brainDraw();
  // pop()

  push()
  translate(-90, 135)
  scale(0.8);
  brainDraw();
  pop()

  push()
  translate(-120, -100)
  scale(1.2);
  brainDraw();
  pop()


  push()
  translate(-90, -330)
  scale(1.6);
  brainDraw();
  pop()

  push()
  translate(-40, 400)
  trainDraw();
  pop()

  pop()





}


function lightbulbDraw()
{
  circle (595, 320, 140);
  quad ()
}

function trainDraw() {
  strokeWeight(2);
  stroke(0);
  fill(255);

  //lines connecting train compartments 
  rect(200, 195, 590, 10)


  //chimney smoke thing
  rect(150, 40, 40, 100)
  rect(140, 20, 60, 20)




  //the bottom of train front 
  triangle(80, 245, 100, 195, 195, 195)
  triangle(100, 195, 100, 245, 80, 245)

  //train front 
  rect(100, 100, 220, 100)

  rect(100, 145, 290, 10)
  ellipse(100, 148, 40, 95)

  //rectangle train front window compartment

  rect(280, 20, 150, 200)
  rect(100, 195, 330, 50)
  rect(265, -20, 180, 40)
  rect(302, 40, 105, 105)


  //wheels of first compartment

  circle(150, 245, 80)
  circle(150, 245, 30)

  circle(260, 245, 80)
  circle(260, 245, 30)

  circle(380, 245, 80)
  circle(380, 245, 30)

  // base of second compartment
  rect(470, 195, 330, 50)

  //wheels of second compartment

  circle(520, 245, 80)
  circle(520, 245, 30)

  circle(630, 245, 80)
  circle(630, 245, 30)

  circle(750, 245, 80)
  circle(750, 245, 30)

  //second compartment
  rect(470, 95, 330, 100)
  rect(460, 75, 350, 20)

  // triangle ()
  //   rect ()

}


function brainDraw() {
  noStroke();
  fill('#eaade4')
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
  rect(255, 260, 50, 50)

  strokeCap(ROUND);

  noFill();


  //white highlights
  stroke(255)
  arc(255, 257, 28, 28, -170, 0)
  arc(295, 255, 28, 28, -130, -45)
  arc(258, 305, 28, 28, 50, 195)
  arc(240, 282, 28, 28, 30, 115)
  arc(295, 305, 28, 28, -30, 40)
  arc(315, 285, 28, 28, 0, 90)



  stroke('#a667a8');
  strokeWeight(3);

  arc(255, 257, 35, 35, -190, -20)
  arc(295, 255, 35, 35, -110, 0)
  arc(258, 305, 35, 35, 50, 195)
  arc(240, 282, 35, 35, 60, 155)
  arc(295, 305, 35, 35, -30, 100)
  arc(315, 285, 35, 35, 0, 90)

  //brain inner wrinkles
  arc(245, 270, 10, 10, 0, 120)
  arc(255, 265, 10, 10, 0, 160)

  arc(270, 300, 15, 15, 50, 160)
  arc(315, 285, 15, 15, -90, 10)
  arc(310, 275, 15, 15, -90, 10)
  arc(285, 283, 15, 15, -120, -20)






}