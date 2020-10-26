
class Hourglass {

  constructor() {
    this.secTopX = secTopX;
    this.secTopY = secTopY;
    this.secBottomX = secBottomX;
    this.secBottomY = secBottomY;
    
    
  }

  change() {
    //changing sand in hourglass, mapping area of the hourglass to the seconds passing
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
    fill(darkBlue)
    //top part 
    arc(300, 200, 100, 80, -PI, 0)
    quad(250, 200, 350, 200, 305, 275, 295, 275)
    
    //highlights top
    stroke (255)
    strokeWeight(2)
    noFill()
     arc(300, 200, 90, 70, -HALF_PI + radians (45), 0)
arc(300, 200, 90, 70, -HALF_PI , -HALF_PI + radians (35))
    arc(300, 350, 90, 70, 0, PI )
    
    
     noStroke()
    fill(darkBlue)
    //bottom part
    quad(305, 275, 295, 275, 250, 350, 350, 350)
    arc(300, 350, 100, 80, 0, PI)
    
    //highlights bottom
     stroke (255)
    strokeWeight(2)
 
  
    arc(300, 350, 90, 70, HALF_PI + radians (45), PI )
    arc(300, 350, 90, 70, HALF_PI , HALF_PI + radians (35) )

    // quad (290, 300, 265, 345, 335, 345, 310, 300)
  }


  displayCracks(x, y) {
    
    // this is the crack that shows up on the hourglass when you click it
    push()
    stroke(255)
    strokeWeight(2)
    translate(x, y)
    line(0, 0, 60, 40)
    line(10, 8, 20, 40)
    line(12, 15, 0, 20)
    line(0, 0, 50, 5)
    line(20, 2, 15, 10)
    line(0, 0, 30, -30)
    line(30, -30, 45, -20)
    line(10, -10, 40, 3)
    line(0, 0, -5, -30)

    pop()
  }


}