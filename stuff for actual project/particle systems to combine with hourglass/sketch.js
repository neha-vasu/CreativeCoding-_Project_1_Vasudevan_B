
let system;
function setup() {
  createCanvas(400, 400);
  system = new DropSystem (createVector(40, 200))
  systems = [];
}

function draw() {
  background(220);
  
 for (i = 0; i < systems.length; i++) {
    systems[i].run();
    systems[i].addParticle();
  }
  
//   if (mouseIsPressed)
    
// {
//   system = new DropSystem (createVector(mouseX, mouseY))
// }
  
}

function mousePressed()
{
    this.p = new DropSystem(createVector(mouseX, mouseY));
  systems.push(p);

}