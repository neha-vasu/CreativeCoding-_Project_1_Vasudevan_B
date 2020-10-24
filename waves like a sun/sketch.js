let angle = 0;
let angleVel = 0.2;
let amplitude = 10;



let emotion1 = 1;
function setup() {
  createCanvas(600, 600);
  frameRate(1);
}

function draw() {
     background (255);
 
colorPick = [color("#8ed6ef"), color("#031153"), color("#f4ca8e"), color("#256eaf")]
     
  push()
  scale (0.5)
  translate (width, height)
      for (let y = 1; y < 100; y+=1)
        {
          var randomColor = colorPick[floor(random(colorPick.length))]
           translate (0, y);
          rotate (radians (15))
      waves(randomColor);
     
        
        }    
      
    pop()
    }

  function waves(colorPick)
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
      strokeWeight(random (1, 5));
      stroke (colorPick)
      // rotate (radians (random (30)))
  line(x,y+yChange,x,y);
      // circle (x,y+yChange,yChange)

    angle += angleVel;
  }
  }
    

  
  

  
  
