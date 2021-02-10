//------------GUI-----------------
//draws top texts and bottom rectangle, all of the graphic stuff

function drawGUI(){
//------------TOP TEXT-----------------
//draws text displaying on the top of the page

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

//------------GUI-----------------
//draws all of the GUI elements

  rect(windowWidth/2 - 450, windowHeight - 160, 900, 150, 20, 20,)   //ui Rectangle
  stroke(rSlider.value(), gSlider.value(), bSlider.value())          //changes RGB value to the r, g, b variables values
  fill(rSlider.value(), gSlider.value(), bSlider.value())
  rect(windowWidth/2 + 325, windowHeight - 140, 90, 20, 5, 5)        //draws the RGB box to preview the color
  pop()
  stroke(0)
  fill(255)
  text('Gear Size', windowWidth/2 - 425, windowHeight-80)            //GUI legends
  text('Pen Distance', windowWidth/2 - 425, windowHeight - 37)
  text('R', windowWidth/2 - 425, windowHeight - 125)
  text('G', windowWidth/2 - 175, windowHeight - 125)
  text('B', windowWidth/2 + 75, windowHeight - 125)
  
}

//------------BUTTON OUTLINE-----------------
//draws an outline around the selected button

function drawOutline(){
  fill(125);
  stroke(125);
  index = buttonArr.indexOf(buttonVal2);
  rect(windowWidth/2 - 394 + 1920/42 * (index+1), windowHeight - 104, 39, 39, 4, 4)  
}

//------------RESIZE GUI-----------------
//resizes the GUI by forcing the tab to refresh whenever user resizes the window

function windowResized(){
  window.location.reload()
}