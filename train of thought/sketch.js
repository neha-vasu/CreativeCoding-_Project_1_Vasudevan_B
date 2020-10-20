var f = 0;


var offset = 0;
var strum = 1;
var vertOne = 300;
var vertTwo = 350;
var v = 1;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  background('#8ed6ef');
}

function draw() {
 

//   background(220);
//   stroke(4);
//   fill(0);
//   noStroke();
//   beginShape();
//   vertex(0, height);
//   for(var x = 0; x < width; x++){
//     //var angle = map(x, 0, width, 0, TWO_PI);
//     var angle = offset + x * 0.01;
//     // map x between 0 and width to 0 and Two Pi
//     var y = map(degrees(sin(angle)), -strum, strum, vertOne, vertTwo);
//     vertex(x, y);
//   }
//   vertex(width, height);
//   endShape();
//   offset += 0.1;
//   if (vertOne <=5){
//      v = -1;
//      vertOne -= 0.5*v;
//      vertTwo -= 0.5*v;
//   } else if (vertOne >= width && v===-1){
//     v = 1;
//     vertOne -= 0.5*v;
//     vertTwo -= 0.5*v;
//   } else 
//     {
//     vertOne -= 0.5*v;
//     vertTwo -= 0.5*v;
//    }
  
  
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


  translate(50, 100)
  scale(0.85)
  
  push()
  translate (-110, -30)
  scale (1.2)
   lightbulbDraw();
  pop()

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
  // angleMode (DEGREES)
  noStroke()
   var lightBlue = color ('#256eaf')
  var lightestBlue = color('#8ed6ef')
var darkBlue = color ('#1d3475')

  fill('#ffea55') //bright yellow
  circle (595, 320, 140);
  quad (525, 330, 665, 330,630, 440, 555, 440)
  
  fill (darkBlue)
  circle (592, 480, 80)
  
  strokeWeight(3)
  stroke(darkBlue)
  line (560, 345, 580, 445)
  line(625, 345, 605, 445 )
  
  noFill()
  
arc (570, 345, 22, 20, 0, 180)
  arc (592, 345, 22, 20, 0, 180)
  arc (614, 345, 22, 20, 0, 180)
  
  noStroke()
  fill(lightestBlue)
    rect (552, 440, 80, 50, 5)
  fill(lightBlue)
  rect (543, 440, 100, 10, 5)
   rect (543, 455, 100, 10, 5)
  rect (543, 470, 100, 10, 5)
  
  
  
  
}

function trainDraw() {
  strokeWeight(2);
  stroke(0);
  fill(255);
  noStroke()

 var lightPink = color ('#f4bae5')
  var lightBlue = color ('#256eaf')
  var darkBlue = color ('#1d3475')

  //lines connecting train compartments
  fill (darkBlue)// dark blue
  rect(200, 195, 590, 10)


  //chimney smoke thing
  fill (lightBlue)
  rect(150, 40, 40, 100)
   fill (darkBlue)// dark blue
  rect(140, 20, 60, 20, 10)
fill (255)



  //the bottom of train front 
  // triangle(80, 245, 100, 195, 195, 195)
    fill (lightBlue)
  triangle(100, 195, 120, 245, 80, 245)

  //train front 
  fill (lightPink)
  rect(100, 100, 220, 100)

  fill (lightBlue)
  rect(100, 145, 290, 10)
  
  fill (darkBlue)// dark blue
  ellipse(100, 148, 40, 105)
  fill (255)

  //rectangle train front window compartment

  fill (lightBlue)
  rect(280, 20, 150, 200)
  rect(95, 195, 335, 50, 20)
  fill (darkBlue)// dark blue
  rect(265, -20, 180, 40, 20)

   fill('rgba(244, 186, 229, 2)')// light pink

  rect(302, 40, 105, 105, 10)
fill (255)

  //wheels of first compartment

  fill (darkBlue)// dark blue
  circle(150, 245, 80)
   fill(lightPink)// light pink
  circle(150, 245, 30)

  fill (darkBlue)// dark blue
  circle(265, 245, 80)
   fill(lightPink)// light pink
  circle(265, 245, 30)

  fill (darkBlue)// dark blue
  circle(380, 245, 80)
  fill(lightPink)// light pink
  circle(380, 245, 30)

  fill(255)
  // base of second compartment
   fill (lightBlue)
  rect(465, 195, 340, 50, 15)

  //wheels of second compartment

  fill (darkBlue)// dark blue
  circle(520, 245, 80)
  fill(lightPink)// light pink
  circle(520, 245, 30)

  fill (darkBlue)// dark blue
  circle(635, 245, 80)
  fill(lightPink)// light pink
  circle(635, 245, 30)

  fill (darkBlue)// dark blue
  circle(750, 245, 80)
  fill(lightPink)// light pink
  circle(750, 245, 30)
  fill (255)

  //second compartment
  fill('rgba(244, 186, 229, 0.5)')
  rect(470, 105, 330, 90)
 fill('rgba(29, 52, 117, 0.5)')
  rect(460, 65, 350, 40, 20)

  // triangle ()
  //   rect ()

}


function brainDraw() {
  noStroke();
  fill('#eaade4')
  fill ('#e5aac9')
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