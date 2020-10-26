

// A simple Particle class

class Drop {
  constructor (position)
  {
    this.position = position.copy()
    // this.positionx = x_;
    // this.positiony = y_;

     this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  
  this.lifespan = 255;
  }



run() {
  this.update();
  this.display();
}


// Method to update position
update () {
  

  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
}

// Method to display
display(){
  stroke(200, this.lifespan);
  strokeWeight(2);
  fill(127, this.lifespan);
  ellipse(parseInt (this.position.x), parseInt(this.position.y), 12, 12);
 
}

isDead(){
  return this.lifespan < 0;
}

}
