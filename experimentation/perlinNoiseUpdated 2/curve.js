class Curve {
  
  // ArrayList <PVector> path;
var current;
  
Curve() {
  path = new ArrayList <PVector>();
  current = new PVector();
}
  
  
  function setX(var x )
  {
    current.x = x;
  }
  
  function setY(var y )
  {
    current. y = y;
  }
  
  
  function addPoint (var x, var y)
{
  path.add (current);
  current = new PVector();
}

function show () {
  stroke (255);
  strokeWeight (1);
  noFill();
  beginShape();
  for (PVector v : path ){
    vertex(v.x, v.y)
  }
 endShape();
}
  
  
  
}