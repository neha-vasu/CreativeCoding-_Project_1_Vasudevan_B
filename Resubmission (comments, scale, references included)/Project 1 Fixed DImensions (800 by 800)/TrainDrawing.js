class TrainDrawing
{
  constructor()
  {

  }
  
  
  
lightbulbDraw()
{
  push()
   translate(50, 100)
  scale(0.85)
  push()
  angleMode (DEGREES)
  noStroke()
   var lightBlue = color ('#256eaf')
  var lightestBlue = color('#8ed6ef')
var darkBlue = color ('#1d3475')

//lightbulb
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
  
  //the lightbulb filamnt
arc (570, 345, 22, 20, 0, 180)
  arc (592, 345, 22, 20, 0, 180)
  arc (614, 345, 22, 20, 0, 180)
  //the bottom part of the lightbulb
  noStroke()
  fill(lightestBlue)
    rect (552, 440, 80, 50, 5)
  fill(lightBlue)
  rect (543, 440, 100, 10, 5)
   rect (543, 455, 100, 10, 5)
  rect (543, 470, 100, 10, 5)
  pop()
  
  pop()
  
}

trainDraw() {
  
  push()
  angleMode (DEGREES)
   translate(50, 100)
  scale(0.85)
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
  
  var angleStart = 0
  stroke (255)
  noFill()
  strokeWeight (2)
push()
  
  // the turning of the wheels 
  translate (150, 245)
  for (var angleStart = 0; angleStart <= 4; angleStart+=1)
    {
      
      rotate (frameCount * 2)
  arc (0, 0, 70, 70, 0, 50)
       
       
    }
  pop()


  noStroke()
  fill (darkBlue)// dark blue
  circle(265, 245, 80)
   fill(lightPink)// light pink
  circle(265, 245, 30)
  
   stroke (255)
  noFill()
  strokeWeight (2)
  push()
  translate (265, 245)
  for (var angleStart = 0; angleStart <= 4; angleStart+=1)
    {
      
      rotate (frameCount * 2)
  arc (0, 0, 70, 70, 0, 50)
       
       
    }
  pop()


  noStroke()

  fill (darkBlue)// dark blue
  circle(380, 245, 80)
  fill(lightPink)// light pink
  circle(380, 245, 30)
  
    stroke (255)
  noFill()
  strokeWeight (2)
  push()
  translate (380, 245)
  for (var angleStart = 0; angleStart <= 4; angleStart+=1)
    {
      
      rotate (frameCount * 2)
  arc (0, 0, 70, 70, 0, 50)
       
       
    }
  pop()


  noStroke()

  fill(255)
       
       
  // base of second compartment
   fill (lightBlue)
  rect(465, 195, 340, 50, 15)
  

  //wheels of second compartment

  fill (darkBlue)// dark blue
  circle(520, 245, 80)
  fill(lightPink)// light pink
  circle(520, 245, 30)
  
    stroke (255)
  noFill()
  strokeWeight (2)
  push()
  translate (520, 245)
  for (var angleStart = 0; angleStart <= 4; angleStart+=1)
    {
      
      rotate (frameCount * 2)
  arc (0, 0, 70, 70, 0, 50)
       
       
    }
  pop()


  noStroke()

  fill (darkBlue)// dark blue
  circle(635, 245, 80)
  fill(lightPink)// light pink
  circle(635, 245, 30)
  
    stroke (255)
  noFill()
  strokeWeight (2)
  push()
  translate (635, 245)
  for (var angleStart = 0; angleStart <= 4; angleStart+=1)
    {
      
      rotate (frameCount * 2)
  arc (0, 0, 70, 70, 0, 50)
       
       
    }
  pop()


  noStroke()

  fill (darkBlue)// dark blue
  circle(750, 245, 80)
  fill(lightPink)// light pink
  circle(750, 245, 30)
  fill (255)
  
    stroke (255)
  noFill()
  strokeWeight (2)
  push()
  translate (750, 245)
  for (var angleStart = 0; angleStart <= 4; angleStart+=1)
    {
      
      rotate (frameCount * 2)
  arc (0, 0, 70, 70, 0, 50)
       
       
    }
  pop()


  noStroke()

  //second compartment
  fill('rgba(244, 186, 229, 0.5)')
  rect(470, 105, 330, 90)
 fill('rgba(29, 52, 117, 0.5)')
  rect(460, 65, 350, 40, 20)

  // triangle ()
  //   rect ()
pop()
}




brainDraw() {
  push()
   translate(50, 100)
  scale(0.85)
  noStroke();
  fill('#eaade4')
  fill ('#f4bae5')
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
  strokeWeight(3);
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



pop()
}


gear1Draw()
{
   var lightBlue = color ('#256eaf')
  var lightestBlue = color('#8ed6ef')
var darkBlue = color ('#1d3475')

  push() 
  translate (470, 510);
  scale(2)
  noStroke()
  
  //spinning triangle arond circle for gear
  fill(lightBlue)
  push()
  // rotate (frameCount)
  for (var i = 0; i < 24; i++){
    // translate (5, 5)
    
    rotate (20)
    triangle (0, 0, 30, 0, 15, -15)
  }
  pop()
  
  fill(255)
  circle (0, 0, 20)
   
  pop()
}

gear2Draw(){
 var lightBlue = color ('#256eaf')
  var lightestBlue = color('#8ed6ef')
var darkBlue = color ('#1d3475')
  push()
   
    fill(lightestBlue)
  noStroke()
  translate(575, 585);
 
  
  //  fill(255)
  // circle (0, 0, 100)
  
  fill(darkBlue)
  //rect (0, 0, 20, 100)
  
  let d = 0;

  for(let i = 0; i<12; i++){
    
   //rotating the rectangle 
    push();
    rotate(d);
    fill(lightestBlue)
    rectMode(CENTER);
    rect(0,0,20,200);
    d+=15;
   
    pop();
    
  } 
  
  //center circle of gear
  fill (lightestBlue)
  stroke (255)
  circle (0, 0, 120)
  noStroke()
  fill(255)
  circle (0, 0, 50)
  pop()
  
}

gear3Draw ()
{
  
  var lightBlue = color ('#256eaf')
  var lightestBlue = color('#8ed6ef')
var darkBlue = color ('#1d3475')
  push()
  noStroke()
  fill (darkBlue)
  translate (615, 420)
  scale (2)
  
  
  for (var i = 0 ; i < 4; i++) {
    push()
    
    //rotating differently than other gears 
    rotate(45*i);
    rectMode(CENTER);
    rect(0, 0, 10, 90);
    pop()
  }
  
  circle(0, 0, 75)
  fill (255)
  circle (0, 0, 30)
  pop()
}
  
  
  
  
}