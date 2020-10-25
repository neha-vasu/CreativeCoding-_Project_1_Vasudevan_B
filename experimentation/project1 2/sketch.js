let angle = 0;
let angleVel = 0.2;
let amplitude = 10;



let emotion1 = 1;
function setup() {
  createCanvas(600, 600);
  frameRate(5);
}

function draw() {
     background (255);
 
  if (emotion1 ==3)
    
    {
       background (255);
      
      
      stroke (0);
      circle (500, 80, 80);
     
      // for (let x =  )
      
      waves();
      for (let y = 20; y < 120; y+=20)
        {
           translate (0, y);
      waves();
     
        }
          
      
    }
  
  function waves()
  {
    
       
    for (let x = 0; x <= width; x += 5) {
 var yChange = 50;
      // var positiveChange = true;
      
      
      yChange += 20;
      if (yChange > 200)
        {
          yChange-= 20;
        }
      
    if (yChange <= 50)
      {
        yChange += 20;
      }
 let r = random (5, 15);

    let y = amplitude*sin(angle);
 
noFill();
      strokeWeight(1);
    ellipse(x,y+yChange,r,r);

    angle += angleVel;
  }
  }
    

  
  if (emotion1 == 2) //anger
    {
translate (width/2, height/2);
  stroke(255,0,0);
  noFill();
let strokeThickness = 18;
  for (let r = 100; r <450; r += 50){
    strokeWeight (strokeThickness);
    strokeThickness-=2;
 
  beginShape();
  for (let a = 0; a < TWO_PI; a+=0.1)
    {
      
      let radius1 = random (r-50, r);
      let x = radius1 * cos(a);
      let y = radius1 * sin (a);
      vertex (x, y);
    }

  endShape(CLOSE);
  
  
  
}
  
  

    }// anger ends
  
  
  if (emotion1 == 1)
    {
      // translate (width/2, height/2);
      stroke(255,0,0);
//       let p1 = { x: -40, y: -40 };
// let p2 = { x: -20, y: 0 };
// let p3 = { x: 60, y: 20 };
// let p4 = { x: 40, y: 80 };
// noFill();
// stroke(255, 102, 0);
// curve(p1.x, p1.y, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
// stroke(255, 102, 0);
// curve(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);
// stroke(255, 102, 0);
// curve(p2.x, p2.y, p3.x, p3.y, p4.x, p4.y, p4.x, p4.y);
//       strokeWeight(4);
//        beginShape();
//     // bezierVertex(-40, -40, );
//       curveVertex(-10, -25);
//       curveVertex(20, 10);
//       curveVertex(-40, -40);
          
//   endShape();
      strokeWeight(5);
point (0, 200);
     point (100, 125);
  point (200, 50);
    point (300, 125);
      point (400, 200);
strokeWeight(1);

beginShape();
      curveVertex (0, 200);
      curveVertex (40, 160);
      curveVertex (100, 125);
      curveVertex (200, 50);
      curveVertex (300, 125);
      curveVertex (400, 200);
    endShape();
      
      
    }
  
}

function mousePressed()
{
  emotion1++;
}