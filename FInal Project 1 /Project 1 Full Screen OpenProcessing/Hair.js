class Hair 
{
  
  constructor (colorLength, ellipseSize, divideBy)
  {
    this.colorLength = colorLength;
    this.ellipseSize = ellipseSize;
    this.divideBy = divideBy;
    this.moveSpeed = 0.4;
this.moveScale = 800;
    this.colorPick = [color("#8ed6ef"), color ('#f4bae5'), color("f4bae5"), color("#256eaf"), color("#00000")];
    this.particles = [];
  for(let i = 0; i < 800; i++){
    this.particles.push({
      x:random (width),
      y:random(height),
      c:this.colorPick[floor(random(this.colorLength))]
    });
  }
  }



display() {

  //going through particle array
  for(let i = 0; i < this.particles.length; i++){
    noStroke()
      //looking at angle by dividing by 1000 an multiplying by other numbers 
      let angle = noise(this.particles [i].x / 1000, this.particles[i].y /1000) * TWO_PI * 8
    this.particles[i].x += sin (angle) ;
      this.particles[i].y += cos (angle);
      fill(this.particles[i].c);
      ellipse(this.particles[i].x, this.particles[i].y, random (1,this.ellipseSize), random (1,this.ellipseSize));
          // moveScale += 30;
      
    
  }
}
}
