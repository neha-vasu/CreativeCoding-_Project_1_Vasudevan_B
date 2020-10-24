function setup() {
  createCanvas(400, 400);
  colorPick = [color("#8ed6ef"), color("#aae588F"), color("#f4ca8e"), color("#256eaf"), color("#031153")];
  particles = []
  for(var j=0;j<height;j+=8){
    for(var i=0;i<width;i+=15){
      particles.push({
        x: i,
        y: j,
        c: colorPick[floor(random(colorPick.length))]
        // clr: color(random(200,300), 90, 100)
      })
        }
  }
}

function draw() {
  background(0);
  
  for (let i = 1; i < particles.length; i++)
    {
      let pos = particles [i];
      let posPrev = particles [i-1];
      
      let angle = noise (pos.x/ 100, pos.y/ 100)
      fill (pos.c)
      circle (pos.x , pos.y, 8)
      
      pos.x += sin (angle);
      pos.y += sin (angle);
      
      // if(pos.x > width || pos.x < 0 || pos.y > height || pos.x < 0 || random(1) < 0.001 ){
      //  pos.x = random(width);
      //  pos.y = random(height);
      // }
    }
//   for (let x = 0; x <= width; x += 5) {
//  var yChange = 50;
//       // var positiveChange = true;
      
      
//       yChange += 20;
//       if (yChange > 200)
//         {
//           yChange-= 20;
//         }
      
//     if (yChange <= 50)
//       {
//         yChange += 20;
//       }
//  let r = random (5, 15);

//     let y = amplitude*sin(angle);
 
// noFill();
//       strokeWeight(random (1, 5));
//       // rotate (radians (random (30)))
//   line(x,y+yChange,x,y);
//       // circle (x,y+yChange,yChange)

//     angle += angleVel;
//   }
  
}