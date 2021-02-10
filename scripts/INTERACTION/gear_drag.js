function moveGear(){
    mouseAngle += (angleOffset)
    x = width / 2 + (R-r) * cos((mouseAngle+deltaAngle))
    y = height / 2 + (R-r) * sin((mouseAngle+deltaAngle))
  
    coordinates();
  
    penAngle = mouseAngle + deltaAngle + TWO_PI * counter;
  
    xpen = R * ((1 - k) * cos(penAngle) + (l * k * cos(((1-k) / k) * penAngle))) + (width) / 2
    ypen = R * ((1 - k) * sin(penAngle) - (l * k * sin(((1-k) / k) * penAngle))) + (height) / 2
  
  }