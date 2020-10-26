//much of this is what I learned from Dan Shiffman and other examples I converted it to what matches my needs and converted it from Processing to p5.js and went over what I didn't understand with our TA Lilly

 class DropSystem{
   
   constructor (position){
     // this.posx = x_
     // this.posy = y_
     this.position = position.copy();
  this.origin = this.position.copy();
  this.particles = [];
}

   //adding a particle to the particle array
 addParticle () {
  this.particles.push(new Drop(this.origin));
}

   //checking if particles are alive or dead and running based on that 
 run () {
  for (let i = this.particles.length-1; i >= 0; i--) {
    let p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
}
}