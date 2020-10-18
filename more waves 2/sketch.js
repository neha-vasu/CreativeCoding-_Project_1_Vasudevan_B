
let offset = 0;
let value = 0.03;
var x = 1;
var xChange = 0.5;
var changeDirection = false;
let waveDistance = 250;

function setup() {
  createCanvas(800, 800);
  xChange = 1.5;

}

function draw() {
  background('#f2f4d7');
    
  
  fill ('#78bec3');
  noStroke();
  rect(0, 0, 800, 400)
 
  fill('#ef9c50' );
circle (400, 400, 400);
   fill('#f2f4d7');
  rect(0, 400, 800, 400)
   push()
  translate (x, 0);
  makeWaves('#a0fbf9');
  pop()
  
    push()
  translate (x-50, 0);
  makeWaves('#24c6ba');
  pop()
  
   push()
  translate (x-120, 0);
  makeWaves('#2c9b92');
  pop()
  
  push()
  translate (x-225, 0);
  makeWaves('#167269');
  pop()
  
  x = x +xChange;
  // translate (x+50, 0);
  // makeWaves();
  
  if (x > waveDistance || x < 0)
    {
      xChange = -xChange;
     }
  
}
  


  function drawShore(colorWave) {
  push()
    rotate (radians (90));
    scale (4);
    translate (50, -550);
    noStroke();
  fill(colorWave); // grey // other colors: beige #f1ecd9 // pink #eecaaa
  beginShape()
//  curveVertex(0, height)
  
  
//     curveVertex(width, height)
//  curveVertex(0.5 * width, 0.56 * height)
//     curveVertex(width, 0.56 * height)
//     curveVertex(0, 0.55 * height)
//  curveVertex(width, height)
//  vertex(0, height)
    curveVertex(0, 425)
    curveVertex(50, 375)
    curveVertex (100, 350)
    curveVertex (150, 450) 
    curveVertex (200, 250)
    curveVertex(300, 395)
        curveVertex(400, 205)
    curveVertex(475, 305)
    curveVertex(550, 435)
    curveVertex(650, 205)
    curveVertex(700, 305)
    curveVertex(750, 455)
    curveVertex(800, 205)
    curveVertex(900, 305)
    curveVertex(1000, 455)
  curveVertex(width, height)
      vertex(0, height)
    
    
    
  endShape(CLOSE)
  pop()
}

  
  
//   stroke(0);
//   beginShape ();
  
//   curveVertex (40, 100);
//   curveVertex (60, 80);
//   curveVertex (100, 120);
//   curveVertex (10, 100);
  
//   endShape();

   
//   translate (x, 0);
//   makeWaves('#e1fff4');
  
    
//   translate (x, 0);
//   makeWaves('#bffdec');
  
//   x = x +xChange;
//   // translate (x+50, 0);
//   // makeWaves();
  
//   if (x > waveDistance || x < 0)
//     {
//       xChange = -xChange;
//     }
  
 

  
  
  
  






function makeWaves(colorWave){


//   let freq = 15; // wave frequency (speed)
//  let waveWidth = window.innerWidth * sin(frameCount / freq);

//  //display the wave image between vector pair coordinates
//  translate(waveWidth, window.innerHeight);
  
  
  
  // strokeCap (ROUND);
  noStroke();
  // stroke(255)
  // strokeWeight (1)
  fill (colorWave);
  rotate (radians (90));
  translate (770, -300);
  scale (0.75);

  beginShape();
  vertex(-500, height);
  
  for(var x = -500; x < width; x++){
    //var angle = map(x, 0, width, 0, TWO_PI);
    var angle = offset + x * random (0.030, 0.045);
    // map x between 0 and width to 0 and Two Pi
    var y = map(sin(angle), -1, 1, 100 , 150);
    vertex(x, y);
  }
    
  vertex(width, height);
  endShape();
 offset += random (0.03, 0.05);
}
  