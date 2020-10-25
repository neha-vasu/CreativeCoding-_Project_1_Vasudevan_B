let particles, colors;
const moveSpeed = 0.4;
let moveScale = 800;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#000000");
  noStroke();

  
  colorPick = [color("#8ed6ef"), color("#aae588F"), color("#f4ca8e"), color("#256eaf"), color("#031153")];
  particles = [];
  for(let i = 0; i < 800; i++){
    particles.push({
      x:random (width),
      y:random(height),
      c:colorPick[floor(random(colorPick.length))]
    });
  }
}

function draw() {

  for(let i = 0; i < particles.length; i++){
    
      let angle = noise(particles [i].x / 1000, particles[i].y /1000) * TWO_PI * 8
    particles[i].x += sin (angle) ;
      particles[i].y += cos (angle);
      fill(particles[i].c);
      ellipse(particles[i].x, particles[i].y, random (1,15), random (1,15));
          // moveScale += 30;
      
    
  }
}