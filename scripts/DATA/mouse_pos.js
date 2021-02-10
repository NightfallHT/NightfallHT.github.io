function determineMouseDirection(){
    if (mouseY < oldy) {
      direction = "up";
    }else if (mouseY > oldy) {
          direction = "down";
    }
    oldy = mouseY;
  }
  
  function mouseover(){
    let m_dist = dist(mouseX, mouseY, x, y);   
    if (m_dist < r) {                   
      rollover = true;
    } else {
      rollover = false;
    }
  }
  
  // Coordinates
  function coordinates(){
    window.addEventListener('mouseup', function(e) {dragging = false;
    rollover = false;}, false);
    // Counter
    if (mouseX < width / 2){
    if (direction == "up" && mouseY < windowHeight / 2 && crossedUp == false){
      counter++;
      crossedUp = true;
      crossedDown = false;
    }else if (direction == "down" && mouseY > windowHeight / 2 && crossedDown == false){
      counter--;
      crossedUp = false;
      crossedDown = true;
    }
    }else{
    if (direction == "down" && mouseY > windowHeight / 2 && crossedDown == false){
      crossedUp = false;
      crossedDown = true;
    }else if (direction == "up" && mouseY < windowHeight / 2 && crossedUp == false){
      crossedUp = true;
      crossedDown = false;
    }}
  }

  function mouseReleased(){
    dragging = false;
    currentAngle =  atan2(y - height/2, x - width/2)
  
  }
  
  
  function mouseMoved(){
    mouseAngle =  atan2(mouseY - height/2, mouseX - width/2)
  }
  function mouseDragged(){
    mouseAngle =  atan2(mouseY - height/2, mouseX - width/2)
  }
  
  function mousePressed(){
    deltaAngle = currentAngle - mouseAngle;
    let m_dist = dist(mouseX, mouseY, x, y);      //mouse distance from the inner circle
    if (m_dist < r) {                           //determines whether the mouse is hovering over
        dragging = true;
    }
  }
  