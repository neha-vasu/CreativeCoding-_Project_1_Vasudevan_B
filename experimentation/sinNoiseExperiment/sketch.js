let xspacing = 10; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 75.0; // Height of wave
let period = 400.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues;



let particles = []
function setup() {
  
   w = width + 16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(8 *w / xspacing));

  
  createCanvas(windowWidth, windowHeight);
  background(255);
  colorMode(HSB)
  for(var j=0;j<height;j+=20){
    for(var i=0;i<width;i+=20){
      particles.push({
        x: i,
        y: j,
        clr: color(random(360), 90, 100)
        // clr: color(random(200,300), 90, 100)
      })
    }
  }
}

function draw() {
  // ellipse(mouseX, mouseY, 20, 20);
  noStroke()
  // colorMode(HSB)
  
  for(var i=1;i<particles.length;i++){
    let p = particles[i]
        
        
        theta += 0.02;
      
      
        // let pPrev = particles [i-20]
    fill(p.clr)
    // line(pPrev.x, pPrev.y, p.x, p.y)
      // point (p.x, p.y)
      p.x = theta;
      for (let i = 0; i < yvalues.length; i++) {
      yvalues[i] = sin(p.x) * amplitude;
    p.x += dx;}
     
      push()
      
      for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, height / 2 + yvalues[x], 20, 20);
  }
      pop()
      // ellipse (p.x, p.y, 20)
    // p.x += noise(p.x/200, p.y/200, 1000)-0.5
    p.x += (noise(p.x/200, p.y/200, 100))*2
    p.y += (noise(p.x/200, p.y/200, 100))*2
  }
 
}