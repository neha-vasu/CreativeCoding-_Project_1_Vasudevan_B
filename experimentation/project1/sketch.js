var offset = 0;
var strum = 1;
var vertOne = 300;
var vertTwo = 350;
var v = 1;
var valueOffset = 0.01;
var value = 0.01;




function setup() { 
  createCanvas(600, 600);


} 
  
  
function draw() {
  background ('#edc772');
    
  push();
  
  translate (40, 40);
  for (var i = 1; i <3; i++)
    {
  fill ('#e8748d');
      rotate (radians (80));
  ellipse (0, 0, 10, 40);
  
    }
  
pop();
  
  push();
  translate (44, 33);
 fill ('#e8748d');
  rotate (radians (30));
  ellipse (0, 0, 10, 32);
  
  pop();
  
  
  
  
  fill ('#e1fff4');
 
  noStroke();
  beginShape();
  vertex(0, height);
  for(var x = -10; x < width; x++){
    //var angle = map(x, 0, width, 0, TWO_PI);
    var angle = offset + x * 0.01;
    // map x between 0 and width to 0 and Two Pi
    var y = map(sin(angle), -strum, strum, vertOne , vertTwo );
    vertex(x, y);
  }
    
  vertex(width, height);
  endShape();
  offset += value;
  if (vertOne <=5){
     v = -1;
     vertOne -= 0.5*v;
     vertTwo -= 0.5*v;
  } 
  else if (vertTwo >= 700 && v===-1){
    v = 1;
    vertOne -= 0.5*v;
    vertTwo -= 0.5*v;
  } else 
    
  {
    vertOne -= 0.5*v;
    vertTwo -= 0.5*v;
   }


  fill ('#bffdec');
 
  noStroke();
  beginShape();
  vertex(0, height);
  for(var x = -10; x < width; x++){
    //var angle = map(x, 0, width, 0, TWO_PI);
    var angle = offset + x * 0.01;
    // map x between 0 and width to 0 and Two Pi
    var y = map(sin(angle), -strum, strum, vertOne+75  , vertTwo+75  );
    vertex(x, y);
  }
    
  vertex(width, height);
  endShape();
  offset += value;
  if (vertOne <=-10){
     v = -1;
     vertOne -= 0.5*v;
     vertTwo -= 0.5*v;
  } 
  else if (vertTwo +75 >= 700 && v===-1){
    v = 1;
    vertOne -= 0.5*v;
    vertTwo -= 0.5*v;
  } else 
    
  {
    vertOne -= 0.5*v;
    vertTwo -= 0.5*v;
   }
  
   fill ('#76ddce');
 
  noStroke();
  beginShape();
  vertex(0, height);
  for(var x = -10; x < width; x++){
    //var angle = map(x, 0, width, 0, TWO_PI);
    var angle = offset + x * 0.01;
    // map x between 0 and width to 0 and Two Pi
    var y = map(sin(angle), -strum, strum, vertOne+150  , vertTwo+150  );
    vertex(x, y);
  }
    
  vertex(width, height);
  endShape();
  offset += value;
  if (vertOne <=-10){
     v = -1;
     vertOne -= 0.5*v;
     vertTwo -= 0.5*v;
  } 
  else if (vertTwo +150 >= 700 && v===-1){
    v = 1;
    vertOne -= 0.5*v;
    vertTwo -= 0.5*v;
  } else 
    
  {
    vertOne -= 0.5*v;
    vertTwo -= 0.5*v;
   }
  
   fill ('#5dbaab');
 
  noStroke();
  beginShape();
  vertex(0, height);
  for(var x = -10; x < width; x++){
    //var angle = map(x, 0, width, 0, TWO_PI);
    var angle = offset + x * 0.01;
    // map x between 0 and width to 0 and Two Pi
    var y = map(sin(angle), -strum, strum, vertOne+225  , vertTwo+225  );
    vertex(x, y);
  }
    
  vertex(width, height);
  endShape();
  offset += value;
  if (vertOne <=-10){
     v = -1;
     vertOne -= 0.5*v;
     vertTwo -= 0.5*v;
  } 
  else if (vertTwo +225 >= 700 && v===-1){
    v = 1;
    vertOne -= 0.5*v;
    vertTwo -= 0.5*v;
  } else 
    
  {
    vertOne -= 0.5*v;
    vertTwo -= 0.5*v;
   }
  
  fill ('#349381');
 
  noStroke();
  beginShape();
  vertex(0, height);
  for(var x = -10; x < width; x++){
    //var angle = map(x, 0, width, 0, TWO_PI);
    var angle = offset + x * 0.01;
    // map x between 0 and width to 0 and Two Pi
    var y = map(sin(angle), -strum, strum, vertOne+300  , vertTwo+300  );
    vertex(x, y);
  }
    
  vertex(width, height);
  endShape();
  offset += value;
  if (vertOne <=-10){
     v = -1;
     vertOne -= 0.5*v;
     vertTwo -= 0.5*v;
  } 
  else if (vertTwo +300 >= 700 && v===-1){
    v = 1;
    vertOne -= 0.5*v;
    vertTwo -= 0.5*v;
  } else 
    
  {
    vertOne -= 0.5*v;
    vertTwo -= 0.5*v;
   }
  
  
}// end of draw