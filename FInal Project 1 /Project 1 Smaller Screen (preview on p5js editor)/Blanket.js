class Blanket 
{
  
constructor(){
 this. colorPick = [color("#8ed6ef"), color("#00000"), color('#f4bae5'), color("#256eaf"), color("#031153")];
  
  //making the array of particles with x, y and color 
  this.particles = []
  for(var j=0;j<height;j+=8){
    for(var i=0;i<width;i+=15){
      this.particles.push({
        x: i,
        y: j,
        c: this.colorPick[floor(random(colorPick.length))]
        
      })
        }
  }
}

display() {
 background ('#1d3475')
  
  //going through particles array
  for (let i = 1; i < this.particles.length; i++)
    {
      noStroke()
      
      let pos = this.particles [i];
      let posPrev = this.particles [i-1];
      
      // playing with noise and dividing it with different values
      let angle = noise (pos.x/ 100, pos.y/ 100)
      fill (pos.c)
      circle (pos.x , pos.y, 8)
      
      //adding sin(angle) to pos
      pos.x += sin (angle);
      pos.y += sin (angle);
      
      
  
}
}
}
