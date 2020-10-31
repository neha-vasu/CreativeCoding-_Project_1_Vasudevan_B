

//much of this is what I learned from Dan Shiffman and other examples I converted it to what matches my needs and converted it from Processing to p5.js and went over what I didn't understand with our TA Lilly

class Drop {
  constructor (position)
  {
    this.position = position.copy()
    // this.positionx = x_;
    // this.positiony = y_;
this.lightPink = color('#f4bae5')
     this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  
  this.lifespan = 255;
  }


// updating and displaying all the particles
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
  

  // stroke('#f4bae5', this.lifespan);
  // strokeWeight(2)
  noStroke();
  fill(244, 186, 229, this.lifespan );
  ellipse(parseInt (this.position.x), parseInt(this.position.y), 12, 12);
 
}

isDead(){
  return this.lifespan < 0;
}

}
