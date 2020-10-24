var angle = 0;
var w = 80;
var cols, rows;
var curves;

function setup() {
  createCanvas(800, 800);
  cols = width/ w-1;
  rows = height /w-1;
  curves = new Curve [rows] [cols];
                             
for (var j= 0; j < rows; j ++)
 {
for (var i= 0; i < cols; i ++)        {
  curves [j][i] = new Curve ();
  
}
                               
                               
                               
                             }
}

function draw() {
  background(0);
   var d = w - 10;
  var r = d/2
  
  
  stroke (255)
  noFill (); 

  for (var i = 0; i < cols; i++ )
    {
      var cx = w + i * w + w/ 2;
      var cy = w / 2;
      strokeWeight (1)
      ellipse (cx, cy, d, d)
      
      var x = r * cos (angle * ( i-1) - PI/2);
      var y = r * sin (angle * (i -1)- PI/2);
      strokeWeight(8);
      stroke (255);
      point (cx + x, cy + y);
      
      stroke (255, 150);
      strokeWeight (1);
      line (cx + x, 0, cx +x,height)
      
      for (var j = 0; j < rows; j++)
        {
          curves [j][i]. setX (cx +x);
        }
    angle += 0.01
    }
  
  
    


 for (var j = 0; j < rows; j++ )
    {
      var cy = w + i * w + w/ 2;
      var cy = w / 2;
      strokeWeight (1)
      ellipse (cx, cy, d, d)
      
      var x = r * cos (angle * ( j+1) - PI/2);
      var y = r * sin (angle * (j+1)- PI/2);
      strokeWeight(8);
      stroke (255);
      point (cx + x, cy + y);
      
      stroke (255, 150);
      strokeWeight (1);
      line (0, cy+y, width,cy+y)
      
    
      for (var i = 0; i < rows; i++)
        {
          curves [j][i]. setY (cy +y);
        }
    }
  
  angle += 0.01;
    }
