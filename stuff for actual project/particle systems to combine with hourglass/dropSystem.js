
 class DropSystem{
   
   constructor (position){
     // this.posx = x_
     // this.posy = y_
     this.position = position.copy();
  this.origin = this.position.copy();
  this.particles = [];
}

 addParticle () {
  this.particles.push(new Drop(this.origin));
}

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