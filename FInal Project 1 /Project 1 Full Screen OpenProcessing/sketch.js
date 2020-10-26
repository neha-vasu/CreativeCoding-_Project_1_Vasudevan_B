//scene 1 & 3 variables (faucet and train)
//faucet object
let pour;
var streamCount = 0;
var startAngle = 1;
var angleVel = 0.1;
var sceneNum = 1;

//train object
let thought;


//scene 5 variables (hourglass)
var secTopX, secTopY, secBottomX, secBottomY;
var lightPink;
var lightestBlue;

let crack1 = false;
let crack2 = false;
let crack3 = false;
let crack4 = false;
// exploding size variable
let biggerExplode = 0;

var startAngle = 1;
var angleVel = 0.1;

//number of cracks
var crackCount = 0;

// const moveSpeed = 0.4;
// let moveScale = 800;
var lightBlue;
var darkBlue;

let systems;
let cracks;

//scene 2 variables
let angleScene2 = 0;
let angleVelScene2 = 0.2;
let amplitudeScene2 = 10;

//scene 4 variables
let spread;

//scene 6 variables 
let blue; 

function setup() {
  createCanvas(windowWidth, windowHeight);
//scene 4 variable
   spread = new Hair(5, 15, 1000);
  darkBlue = color('#1d3475')
  background (darkBlue)
  
  colorPick = [color("#8ed6ef"), color("#aae588F"), color("#f4ca8e"), color("#256eaf"), color("#031153")];

  //train from scene 3
  thought = new TrainDrawing();

  //scene 5 setup
  systems = [];
  cracks = [];
  explosion = [];
  lightBlue = color('#256eaf')
  lightPink = color('#f4bae5')
  lightestBlue = color('#a4dbea')
  timeFlow = new Hourglass();
  
  //scene 6 setup
  blue = new Blanket();
}



function draw() {

  //start of the hair growing scene
if (sceneNum == 1){

    spread.display();
   
    
  }
  
  //for the faucet scene
  if (sceneNum == 2) {
    clear()
    background(255)
    push()
    translate (500,0);
    //mouseclick to switch thru the faucet phases 
    if (streamCount === 1) {

      push()
      translate(370, 445)
      scale(0.2)
      rotate(radians(90))

//color, waveNum, width add, width increment 
      wave(color("#031153,0.2"), 2, 1000, 20);
      pop()
    }

    if (streamCount === 2) {
      push()
      translate(370, 445)
      scale(0.2)
      rotate(radians(90))

      wave(color("#031153,0.2"), 5, 600, 20);
      pop()
    }


    if (streamCount === 3) {
      push()
      translate(370, 445)
      scale(0.2)
      rotate(radians(90))

      wave(color("#031153,0.2"), 10, 900, 30);
      pop()
    }
    if (streamCount === 4) {
      push()
      translate(370, 445)
      scale(0.2)
      rotate(radians(90))

      wave(color("#031153,0.2"), 20, 900, 40);
      pop()
    }


    if (streamCount === 5) {
      push()
      translate(370, 445)
      scale(0.2)
      rotate(radians(90))

      wave(color("#031153,0.2"), 10, 500, 10);
      pop()
    }
    if (streamCount === 6) {
      push()
      translate(370, 445)
      scale(0.20)
      rotate(radians(90))

      wave(color("#031153,0.2"), 10, 700, 10);
      pop()
    }

    if (streamCount === 7) {
      streamCount = 1;
    }

    let pour = new waterFaucet();
    
    pour.faucet();
    pop()

  } //scene 2 end

  
  
  
  //waves outwards scene like a sun almost?
  if (sceneNum == 3) {
    background(darkBlue)
    push()
    angleMode (RADIANS)
    scale(0.5)
    translate(width, height)
    
    //for loop to rotate the wave around the center of the screen
    for (let y = 1; y < 80; y += 1) {
      var waveColor = colorPick[3]
      translate(0, y);
      rotate(radians(30))
      wavesScene2(lightPink);
    }

    pop()

  }



  //train scene start
  if (sceneNum == 4) {
    clear();
    background(255)
    push()
    translate (500, 50)
    strokeWeight(5)
    stroke('#1d3475');
    
    
    //leftside randon whoosh lines
    line(random(0, 100), 300, random(0, 100), 300);
    line(random(200, 400), 300, random(200, 400), 300);
    line(random(500, 750), 300, random(500, 750), 300);

    //right side 
    line(random(250, 400), 470, random(250, 400), 470);
    line(random(650, 850), 470, random(650, 850), 470);

    //Ground
    line(random(-75, 100), 750, random(-75, 100), 750);
    line(random(175, 250), 750, random(175, 250), 750);
    line(random(475, 700), 750, random(475, 700), 750);


//drawing the gears in the train cart
    thought.gear1Draw()
    thought.gear2Draw()
    thought.gear3Draw()

    //drawing the lightbulb
    push()
    translate(-110, 0)
    scale(1.2)
    thought.lightbulbDraw();
    pop()

    //drawing the brain cloud poofs in 3 different sizes
    push()
    translate(-90, 135)
    scale(0.8);
    thought.brainDraw();
    pop()

    push()
    translate(-120, -100)
    scale(1.2);
    thought.brainDraw();
    pop()


    push()
    translate(-90, -330)
    scale(1.6);
    thought.brainDraw();
    pop()

    //drawing the train itself
    push()
    translate(-40, 400)
    thought.trainDraw();
    pop()

pop()
  } // train scene end

  
  
  
  //hourglass scene
  if (sceneNum == 5) {
    clear()
    background(255);
    push()
    angleMode(RADIANS)
    

    //depending on the crack the wave's intensity changes and if there are more than 4 cracks the hourglass explodes
    if (crack1 === true) {
      waveVer2(color("#8ed6ef,0.4"), 2, 100, 80);
    }

    if (crack2 === true) {
      clear()
      waveVer2(color("#8ed6ef,0.4"), 2, 100, 10);
    }

    if (crack3 === true) {
      clear()
      waveVer2(color("#8ed6ef,0.4"), 2, 100, 5);
    }
    if (crack4 === true) {
      clear()
      waveVer2(color("#8ed6ef,0.4"), 2, 100, 2);
    }

    //displaying and changing the hourglass itself 
    push()
    translate(0, -300)
    scale(3)

    //hourglass
    timeFlow.display()
    timeFlow.change()

    pop()

    //number of cracks based on mousePressed
    if (crackCount == 1) {
      crack1 = true;
    }
    if (crackCount == 2) {
      crack2 = true;
    }
    if (crackCount == 3) {
      crack3 = true;
    }
    if (crackCount == 4) {
      crack4 = true;
    }

    //if more than 4 cracks, the hourglass explodes
    if (crackCount >= 5) {

      push()
      translate(width / 2, height / 2)
      biggerExplode += 0.01
      scale(biggerExplode)
      explode();
      pop()
    }

    //displaying the cracks based on crackCount
    if (crack1 === true) {
      timeFlow.displayCracks(cracks[0].x, cracks[0].y)
    }

    if (crack2 === true) {
      timeFlow.displayCracks(cracks[1].x, cracks[1].y)
    }
    if (crack3 === true) {
      timeFlow.displayCracks(cracks[2].x, cracks[2].y)
    }
    if (crack4 === true) {
      timeFlow.displayCracks(cracks[3].x, cracks[3].y)
    }

    //sand falling out of hourglass
    for (i = 0; i < systems.length; i++) {
      systems[i].run();
      systems[i].addParticle();
    }

    if (crackCount >= 5) {
      //the hourglass explodes after 5 cracks
      push()
      translate(width / 2, height / 2)
      biggerExplode += 0.02
      scale(biggerExplode)
      explode();
      pop()
    }
    pop()//angle mode radians pop
  }

  
  if (sceneNum ==6) {
    background (darkBlue)
    blue.display()
  }
  if (sceneNum >= 7) {
    sceneNum = 1
  }

  if (sceneNum <1) {
    sceneNum = 6;
  }
  
 
}


//switching between water patterns for the faucet scene with mouseClicked
function mouseClicked() {
  
  streamCount += 1;
}

//switching between scenes using the left and right arrow keys
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    sceneNum--;
    //this part is to ensure that the hair scene runs properly and with a background and also to restart the object so that it starts again instead of fading from the previous run 
    if(sceneNum ===1){
      spread = new Hair (5, 15, 1000)
      background (darkBlue)
    }
  } else if (keyCode === RIGHT_ARROW) {
    sceneNum++;
    //same thing here as above
    if(sceneNum ===7){
      background (darkBlue)
      spread = new Hair (5, 15, 1000)
      
    }
  }
}

function mousePressed() {
//to create crack and sand on mousePressed
  if (sceneNum ===5) {
  cracks.push(createVector(mouseX, mouseY))
  this.p = new DropSystem(createVector(mouseX, mouseY));
  systems.push(p);
  crackCount++;
  }
}

// this is the wave function for the first scene with the faucet
function wave(colorVar, waveNumMax, widthAdd, widthInc) {
  var darkBlue = color("#031153,0.2");
  startAngle += 0.03;
  var angle = startAngle;
  var offset = 0.02;
  var waveSpace = 20;
  var waveHeight = 40;



  for (var waveNum = 1; waveNum < waveNumMax; waveNum++) {
    translate(waveSpace, 10)

    for (var x = 0; x <= width + widthAdd; x += widthInc) {

      var y = map(sin(angle), -2, 2, 0, height);

      noStroke();
      fill('rgba(29, 52, 117, 0.5)')
      circle(x, y + waveSpace, waveHeight);
      angle += angleVel;
      waveSpace += offset;

      if (waveHeight > 10) {
        waveHeight -= 5;
      } else {
        waveHeight = 40;
      }
    }
  }
}

//this is the wave for the hourglass scene behind the hourglass
function waveVer2(colorVar, waveNumMax, widthAdd, widthInc) {
  push()
  var darkBlue = color("#031153,0.2");
  startAngle += 0.03;
  var angle = startAngle;
  var offset = 0.02;
  var waveSpace = 20;
  var waveHeight = 200;



  for (var waveNum = 1; waveNum < waveNumMax; waveNum++) {
    translate(waveSpace, 10)

    for (var x = 0; x <= width + widthAdd; x += widthInc) {

      var y = map(sin(angle), -2, 2, 0, height);

      noStroke();
      fill('rgba(142, 214, 239, 0.5)')
      ellipse(x, y + waveSpace, waveHeight, 10);
      angle += angleVel;
      waveSpace += offset;

      if (waveHeight > 10) {
        waveHeight -= 5;
      } else {
        waveHeight = 200;
      }
    }
  }
  pop()
}

//this is for the hourglass exploding
function explode() {

  clear()

  stroke(lightPink);
  noFill();
  let strokeThickness = 18;
  for (let r = 50; r < 200; r += 50) {
    strokeWeight(strokeThickness);
    strokeThickness -= 2;

    beginShape();
    for (let a = 0; a < TWO_PI; a += 0.1) {

      let radius1 = random(r - 50, r);
      let x = radius1 * cos(a);
      let y = radius1 * sin(a);
      vertex(x, y);
    }

    endShape(CLOSE);


  }
}

//this is for the 3rd scene with waves like a sun
function wavesScene2(colorPick) {


  for (let x = 0; x <= width; x += 5) {
    var yChange = 50;
    // var positiveChange = true;


    yChange += 20;
    if (yChange > 200) {
      yChange -= 20;
    }

    if (yChange <= 50) {
      yChange += 20;
    }
    let r = random(5, 15);

    let y = amplitudeScene2 * sin(angleScene2);

    noFill();
    strokeWeight(random(1, 5));
    stroke(colorPick)
    // rotate (radians (random (30)))
    line(x, y + yChange, x, y);
    // circle (x,y+yChange,yChange)

    angleScene2 += angleVelScene2;
  }
}