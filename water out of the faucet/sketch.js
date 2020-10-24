var startAngle = 1;
var angleVel = 0.1;

 
function setup() {
  createCanvas(800,800);
  colorPick = [color("#8ed6ef"), color("#aae588F"), color("#f4ca8e"), color("#256eaf"), color("#031153")];
}
 
function draw() {
  background(255);
  translate (0, 0)
  
//   for (var i; i < 6; i ++)
//     {
//     rotate (radians (15))
//   scale (0.5)
//        push()
//        rotate (radians (90)) 
  wave();
  // pop()
  //   }
 
}

  function wave()
  {
    var darkBlue = color("#031153,0.2");
startAngle += 0.03;
var angle = startAngle;
    var offset = 0.02;
    var waveSpace = 20;
    var waveHeight = 40; 
    
    
     
  for (var waveNum = 1; waveNum < 10; waveNum++)
    {
      translate (waveSpace, 10)
     
    for (var x = 0; x <= width; x += 10) {
     
    var y = map(sin(angle),-2,2,0,height);
    
    noStroke();
    fill('rgba(29, 52, 117, 0.5)')
    ellipse(x,y + waveSpace,waveHeight,waveHeight);
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