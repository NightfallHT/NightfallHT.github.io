//------------MOUSE DIRECTION-----------------
//determines whether the cursor is moving up or down by comparing it to its' old position
function determineMouseDirection() {
  if (mouseY < oldy) {
    direction = "up";
  } else if (mouseY > oldy) {
    direction = "down";
  }
  oldy = mouseY;
}

//------------MOUSEOVER-----------------
//determines whether the mouse is hovering over the gear by comparing its position to the gear borders
//rollover is used to highlight the gear whenever we hover over it

function mouseover() {
  let m_dist = dist(mouseX, mouseY, x, y);
  if (m_dist < r) {
    rollover = true;
  } else {
    rollover = false;
  }
}

//------------COORDINATES-----------------
//determines on which half is the cursor positioned and whether it crossed the angle resetting point or not
//reason: whenever cursor crosses the resetting point, the angle resets and the program doesn't work, so this code detects the crossing point and compensates for it

function coordinates() {
  window.addEventListener('mouseup', function(e) {
    dragging = false;
    rollover = false;
  }, false);
  // Counter
  if (mouseX < width / 2) {
    if (direction == "up" && mouseY < windowHeight / 2 && crossedUp == false) {
      counter++;
      crossedUp = true;
      crossedDown = false;
    } else if (direction == "down" && mouseY > windowHeight / 2 && crossedDown == false) {
      counter--;
      crossedUp = false;
      crossedDown = true;
    }
  } else {
    if (direction == "down" && mouseY > windowHeight / 2 && crossedDown == false) {
      crossedUp = false;
      crossedDown = true;
    } else if (direction == "up" && mouseY < windowHeight / 2 && crossedUp == false) {
      crossedUp = true;
      crossedDown = false;
    }
  }
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