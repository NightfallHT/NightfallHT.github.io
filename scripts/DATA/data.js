function displayData(){
    stroke(255);
    noFill();
    text (mouseAngle, 10, 30); text (currentAngle, 200, 30);
    text (penAngle, 10, 60)
    text(direction, 10, 90)
    text(crossedUp, 10, 120)
    text(crossedDown, 10, 150)
    text(counter, 10, 180)
    text(mouseY, 10, 210)
    text(pSlider.value(), 10, 300)
    text(buttonVal, 10, 400)
    text(p, 10, 330)
    text(deltaAngle, 10, 500)
    noStroke();
  }