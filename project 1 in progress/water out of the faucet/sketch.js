var startAngle = 1;
var angleVel = 0.1;
var streamCount = 1;
// let system;
 
function setup() {
  createCanvas(800,800);
  colorPick = [color("#8ed6ef"), color("#aae588F"), color("#f4ca8e"), color("#256eaf"), color("#031153")];
}
 
function draw() {
  
  background(255);
 

  
  

  
  if (streamCount ===1)
    {
      push()
  translate (370, 445)
  scale (0.25)
  rotate (radians (90))

  
  wave(color("#031153,0.2"), 2, 1000, 20);
  pop()
    }
  
  if (streamCount ===2)
    {
      push()
  translate (370, 445)
  scale (0.25)
  rotate (radians (90))

  wave(color("#031153,0.2"), 5, 600, 20);
  pop()
    }
  
  
  if (streamCount ===3)
    {
      push()
  translate (370, 445)
  scale (0.25)
  rotate (radians (90))

  wave(color("#031153,0.2"), 10, 900, 30);
  pop()
    }
  if (streamCount ===4)
    {
      push()
  translate (370, 445)
  scale (0.25)
  rotate (radians (90))

  wave(color("#031153,0.2"), 20, 900, 40);
  pop()
    }
  
  
   if (streamCount ===5)
    {
      push()
  translate (370, 445)
  scale (0.25)
  rotate (radians (90))

  

  wave(color("#031153,0.2"), 10, 500, 10);
  pop()
    }
  if (streamCount ===6)
    {
      push()
  translate (370, 445)
  scale (0.25)
  rotate (radians (90))

  wave(color("#031153,0.2"), 10, 700, 10);
  pop()
    }
  
  if (streamCount===7)
    {
      streamCount = 1;
    }
  
  faucet()
}

function mouseClicked()
{
  streamCount +=1;
}

// function mouseClicked() {
  
//   if( mouseX >= 300 && mouseX <= 500 && mouseY >= 150 && mouseY <= 400)
//     {
//        let system = new ParticleSystem(createVector(width / 2, 50));
//       system.addParticle();
//   system.run();
//       ellipse (50, 50, 50, 50)
//     }
 
 
// }

function faucet(){
  
  fill (color('#f4bae5'))
  noStroke()
  rect(300, 300, 205, 75)
  arc (300, 375, 150, 150, PI, PI +HALF_PI)
  rect (225, 370, 80, 50)

  // arc(342, 423, 120, 120, PI, PI +HALF_PI)
  
  //rounded rectangle
  fill (255)
  rect(294, 373, 220, 70, 20)
  
  fill (color('#f4bae5'))
  rect (390, 240, 30, 100)
  
  //faucet turning thing

rect(345, 220, 120, 30, 30)
 
rect(370, 190, 70, 20, 30)
  
  
    
rect(370, 285, 70, 30, 30)
  
  rect (515, 275, 20, 120, 20)
  rect(210, 430, 100, 20, 20)
//   fill(0)
 
//   ellipse (405, 215, 50, 50)
  
}
  function wave(colorVar, waveNumMax, widthAdd, widthInc )
  {
    var darkBlue = color("#031153,0.2");
startAngle += 0.03;
var angle = startAngle;
    var offset = 0.02;
    var waveSpace = 20;
    var waveHeight = 40; 
    
    
     
  for (var waveNum = 1; waveNum < waveNumMax; waveNum++)
    {
      translate (waveSpace, 10)
     
    for (var x = 0; x <= width + widthAdd; x += widthInc) {
     
    var y = map(sin(angle),-2,2,0,height);
    
    noStroke();
    fill('rgba(29, 52, 117, 0.5)')
    circle(x,y + waveSpace,waveHeight);
    angle += angleVel ;
      waveSpace += offset;
      
      if (waveHeight > 10)
        {
          waveHeight -= 5;
        }
      else 
        {
          waveHeight = 40;
        }
    }
    }
}