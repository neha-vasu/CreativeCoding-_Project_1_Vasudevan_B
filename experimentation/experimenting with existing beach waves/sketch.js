let offset = 0;
let value = 0.03;
let wavesHeight = 350;
var x = 1;
var xChange = 0.5;
var changeDirection = false;
let waveDistance = 250;
var inc = 0.02;

function setup() {
  createCanvas(800, 800);
  xChange = 4;
  frameRate(20);

}

function draw() {
  background('#f2f4d7');


  push()
  translate(x, -200);

  makeWaves('#98f9e6');
  pop()

  push()
  translate(x, x - 400);
  makeWaves('#59e2c7');
  pop()

  push()
  translate(x, -600);
  makeWaves('#24c6ba');
  pop()

  push()
  translate(x, -800);
  makeWaves('#19a396');
  pop()

  x = x + xChange;
  // translate (x+50, 0);
  // makeWaves();

  if (x > waveDistance || x <0) {
    xChange = -xChange;
  }


  //   fill ('#c5efe8');
  //   noStroke();
  //   rect(0, 0, 800, 400)

  //   fill('#ef9c50' );
  // arc (400, 400, 400, 400, PI, -TWO_PI);
  //     fill('#f2a876' );
  // arc (400, 400, 250, 250, PI, -TWO_PI);

  //      fill('#f7c87e' );
  // arc (400, 400, 100, 100, PI, -TWO_PI);
  //   //  fill('#f2f4d7');
  //   // rect(0, 400, 800, 400)

}



function makeWaves(colorWave) {

  colorPick = color(colorWave);

  noStroke();
  // stroke(255)
  // strokeWeight (1)
  fill(colorPick);
  colorPick.setAlpha(3)
  rotate(radians(180));
  translate(-400, -800);
  scale(1.2);

  beginShape();
  vertex(-200, height);
  var xoff = 0;
  var yoff = 0;
  var zoff = 0;
  
  for (var x = -600; x < width; x += 4) {
    var n = noise(xoff, yoff, zoff);
    var angle = map(n, 0, width, 0, TWO_PI);
    // var angle = offset + n + x * 0.01;
    // map x between 0 and width to 0 and Two Pi
    var y = map(sin(angle), -1, 1, 200, 150);
    var value = map(n,0,1,-wavesHeight,wavesHeight);
    noiseDetail (0.5, 1)
      curveVertex(x - value, y+value);
    

     // (x, y)
xoff += inc;
  }
  offset += 0.03;
  vertex(width, height);
  yoff += inc;
  endShape();
  zoff += 0.01;

}