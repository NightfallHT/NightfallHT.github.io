function moveGear(){
    currentAngle =  atan2(y - height/2, x - width/2)
    mouseAngle += (angleOffset)
    x = width / 2 + (R-r) * cos((mouseAngle+deltaAngle))
    y = height / 2 + (R-r) * sin((mouseAngle+deltaAngle))
  
    coordinates();
  
    penAngle = mouseAngle + deltaAngle + TWO_PI * counter;
  
    xpen = R * ((1 - k) * cos(penAngle) + (l * k * cos(((1-k) / k) * penAngle))) + (width) / 2
    ypen = R * ((1 - k) * sin(penAngle) - (l * k * sin(((1-k) / k) * penAngle))) + (height) / 2
  
    xArr.push(xpen);
    yArr.push(ypen);
  }

//determines whether mouse is released, sets dragging to false and saves current gear angle

function mouseReleased() {
  dragging = false;
  currentAngle = atan2(y - height / 2, x - width / 2)

}

//sets mouse angle whenever mouse is moved

function mouseMoved() {
  mouseAngle = atan2(mouseY - height / 2, mouseX - width / 2)
}

//sets mouse angle whenever mouse is dragged because mouseMoved doesn't work when the mouse is pressed

function mouseDragged() {
  mouseAngle = atan2(mouseY - height / 2, mouseX - width / 2)
}

//determines if the mouse is hovering over the circle when it's pressed, sets dragging to true

function mousePressed() {
  deltaAngle = currentAngle - mouseAngle;
  let m_dist = dist(mouseX, mouseY, x, y);
  if (m_dist < r) {
    dragging = true;
  }
}