class waterFaucet {
  constructor() {
    this.startAngle = 1;
    this.angleVel = 0.1;
    this.colorPick = [color("#8ed6ef"), color("#aae588F"), color("#f4ca8e"), color("#256eaf"), color("#031153")];
  }

  //drawing the faucet itself
  faucet() {
    push()
scale (1.1)
    translate (-30, -30)
    fill(color('#f4bae5'))
    noStroke()
    rect(300, 300, 205, 75)
    arc(300, 375, 150, 150, PI, PI + HALF_PI)
    rect(225, 370, 80, 50)

    // arc(342, 423, 120, 120, PI, PI +HALF_PI)

    //rounded rectangle
    fill(255)
    rect(294, 373, 220, 70, 20)

    fill(color('#f4bae5'))
    rect(390, 240, 30, 100)

    //faucet turning thing

    rect(345, 220, 120, 30, 30)

    rect(370, 190, 70, 20, 30)



    rect(370, 285, 70, 30, 30)

    rect(515, 275, 20, 120, 20)
    rect(210, 430, 100, 20, 20)
    //   fill(0)

    //   ellipse (405, 215, 50, 50)
pop()
  }

  
}