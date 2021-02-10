function drawGUI(){
  push();
  textAlign("center")
  textSize(20)
  stroke (0)
  fill(255)
  text('spirograph.exe', windowWidth/2, windowHeight*0.05)
  textSize(15)
  fill(70)
  text('pIease be gentIe', windowWidth/2, windowHeight*0.09)
  pop();
  stroke(50)
  fill(50)
  rect(windowWidth/2 - 450, windowHeight - 160, 900, 150, 20, 20,)   //ui Rectangle
  stroke(rSlider.value(), gSlider.value(), bSlider.value())
  fill(rSlider.value(), gSlider.value(), bSlider.value())
  rect(windowWidth/2 + 325, windowHeight - 140, 90, 20, 5, 5)                //color rectangle
  pop()
  stroke(0)
  fill(255)
  text('Gear Size', windowWidth/2 - 425, windowHeight-80)
  text('Pen Distance', windowWidth/2 - 425, windowHeight - 37)
  text('R', windowWidth/2 - 425, windowHeight - 125)
  text('G', windowWidth/2 - 175, windowHeight - 125)
  text('B', windowWidth/2 + 75, windowHeight - 125)
  
}


function drawOutline(){
  fill(125);
  stroke(125);
  index = buttonArr.indexOf(buttonVal2);
  rect(windowWidth/2 - 394 + 1920/42 * (index+1), windowHeight - 104, 39, 39, 4, 4)  
}

function windowResized(){
  window.location.reload()
}