//------------DRAW GEARS-----------------
//draws gears

function drawGears() {
  stroke(200);
  fill(200);
  outsideGear();
  insideGear();
  pen();
  noStroke();

}

//------------OUTSIDE GEAR-----------------
//gear drawn in the middle of the scree, consists of two star shapes, one inside the other

function outsideGear(){
  star(windowWidth / 2, windowHeight / 2, 240, 250, 120);
  fill(25);
  star(windowWidth / 2, windowHeight / 2, R, R + 10, 96);
}

//------------INSIDE GEAR-----------------
//draws and rotates the draggable gear, highlights it on the mouseover and darkens on drag

function insideGear(){
  push();
  translate(x, y)
  rotate(-((R - r) / r) * (currentAngle))     //rotates inside gear according to its' angle and position
  if (dragging) {
    fill(130);
  } else if (rollover) {
    fill(170);
  } else {
    fill(175, 200);
  }
  star(0, 0, r, r + 10, r / 2);
  pop()
}

//------------PEN-----------------
//draws the pen, nothing special here

function pen(){
  push()
  fill(0)
  ellipse(xpen, ypen, 10);
  pop()
}


//------------STAR FUNCTION-----------------
//function star, allowing to draw gears easier

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}