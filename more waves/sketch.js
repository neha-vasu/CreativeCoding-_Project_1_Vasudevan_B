
let offset = 0;
let value = 0.03;
var x = 1;
var xChange = 0.5;
var changeDirection = false;
let waveDistance = 250;

function setup() {
  createCanvas(800, 800);
  xChange = 4;
  frameRate(20);

}

function draw() {
  background('#f2f4d7');
    
 
   push()
  translate (x+20, x);
  makeWaves('#98f9e6');
  pop()
  
    push()
  translate (x, x-100);
  makeWaves('#59e2c7');
  pop()
  
   push()
  translate (x- 100, x-220);
  makeWaves('#24c6ba');
  pop()
  
  push()
  translate (x-220, x-325);
  makeWaves('#19a396');
  pop()
  
  x = x +xChange;
  // translate (x+50, 0);
  // makeWaves();
  
  if (x > waveDistance || x < 0)
    {
      xChange = -xChange;
     }
  
   
  fill ('#c5efe8');
  noStroke();
  rect(0, 0, 800, 400)
 
  fill('#ef9c50' );
arc (400, 400, 400, 400, PI, -TWO_PI);
    fill('#f2a876' );
arc (400, 400, 250, 250, PI, -TWO_PI);
  
     fill('#f7c87e' );
arc (400, 400, 100, 100, PI, -TWO_PI);
  //  fill('#f2f4d7');
  // rect(0, 400, 800, 400)
  
}
  


function makeWaves(colorWave){


  noStroke();
  // stroke(255)
  // strokeWeight (1)
  fill (colorWave);
  rotate (radians (180));
  translate (-400, -800);
  scale (1.2);

  beginShape();
  vertex(-500, height);
  
  for(var x = -500; x < width; x++){
    //var angle = map(x, 0, width, 0, TWO_PI);
    var angle = 0+ x * random (0.030, 0.045);
    // map x between 0 and width to 0 and Two Pi
    var y = map(sin(angle), -1, 1, 100 , 150);
    vertex(x, y);
  }
    
  vertex(width, height);
  endShape();
 offset += random (0.03, 0.05);
}
  