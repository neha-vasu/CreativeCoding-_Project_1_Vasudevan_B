var c1, c2;
var lightPink;
var lightestBlue;
var secTopX, secTopY, secBottomX, secBottomY;

function setup() {
  createCanvas(600, 600);
  lightPink = color('#f4bae5')
  lightestBlue = color('#a4dbea')
  c1 = color('#f4ca8e');
  c2 = color(lightPink);
  timeFlow = new Hourglass();
}

function draw() {
  background(220);
  setGradient(c1, c2);
  push()
  translate(-150, -120)
  scale(1.5)
  // hourglass()
  timeFlow.display()
  timeFlow.change()
  pop()
}


function setGradient(c1, c2) {
  // noprotect
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}



class Hourglass {

  constructor() {
    this.secTopX = secTopX;
    this.secTopY = secTopY;
    this.secBottomX = secBottomX;
    this.secBottomY = secBottomY;
  }

  change() {
    //changing sand in hourglass
    secTopX = map(second(), 80, 0, -75, 0);
    secTopY = map(second(), 80, 0, 45, 0);
    secBottomX = map(second(), 80, 0, -45, 0);
    secBottomY = map(second(), 80, 0, 75, 0);


    //changing sand shapes in hourglass
    noStroke()
    fill(lightPink)
    quad(298, 265, 302, 265, 335 - secTopY, 205 - secTopX, 265 + secTopY, 205 - secTopX)
    quad(265, 345, 335, 345, 335 + secBottomX, 345 - secBottomY, 265 - secBottomX, 345 - secBottomY)

    //line of sand falling 
    rect(298, 265, 4, 80)

  }

  display() {

    noStroke()
    fill(255)
    //top
    arc(300, 200, 100, 80, -PI, 0)
    quad(250, 200, 350, 200, 305, 275, 295, 275)

    //bottom
    quad(305, 275, 295, 275, 250, 350, 350, 350)
    arc(300, 350, 100, 80, 0, PI)

    // quad (290, 300, 265, 345, 335, 345, 310, 300)
  }
}







// function hourglass()
// {


//   noStroke()
// fill (255)
//   //top
//   arc (300, 200, 100, 80, -PI, 0)
//   quad (250, 200, 350, 200, 305, 275, 295, 275)

//   //bottom
// quad(305, 275, 295, 275, 250, 350, 350, 350)
//  arc (300, 350, 100, 80, 0, PI)

//   // quad (290, 300, 265, 345, 335, 345, 310, 300)

//   //changing sand in hourglass
//   secTopX = map(second(), 80, 0, -75, 0);
//   secTopY = map(second(), 80, 0, 45, 0);
//   secBottomX = map(second(), 80, 0, -45, 0);
//   secBottomY = map(second(), 80, 0, 75, 0);


// //changing sand shapes in hourglass
//   noStroke()
//   fill (lightPink)
//   quad (298, 265, 302,265, 335-secTopY, 205-secTopX, 265+secTopY, 205-secTopX )
//   quad (265, 345, 335,345, 335+secBottomX, 345-secBottomY, 265-secBottomX, 345-secBottomY )

//    //line of sand falling 
//   rect (298, 265, 4, 80)




// }