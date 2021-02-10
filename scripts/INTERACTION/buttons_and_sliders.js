//------------CHANGE RADIUS-----------------
//changes radius of the dragging gear based on the value of the button

function changeR(buttonVal){
  buttonVal2 = buttonVal;
  tempR = buttonVal*2;
  
  //------------ADJUST PEN DISTANCE-----------------
  //adjusts the range of the p slider (pen distance) by removing and creating a new one so when the radius changes, pen distance can't be larger than it

  pSlider.remove();
  pSlider = createSlider (0, tempR-10, 10, 1);
  pSlider.position(windowWidth/2 - 335, windowHeight-50);
  pSlider.style('width', '600px');
}



//------------CONFIRM BUTTON-----------------
//when pressed the button saves values inputted in the gui and applies them onto the drawing canvas

function confirmPreset(){

  //changes pen distance according to the slider value
  p = pSlider.value();

  //------------COLORS-----------------

  //changes pen color
  red = rSlider.value();
  green = gSlider.value();
  blue = bSlider.value();

  //removes previous color sliders
  rSlider.remove();
  gSlider.remove();
  bSlider.remove();

  //creates sliders with updated color values
  //red
  rSlider = createSlider (0, 255, red, 1);
  rSlider.position(windowWidth/2 - 400, windowHeight - 140);
  rSlider.style('width', '200px');
  //green
  gSlider = createSlider (0, 255, green, 1);
  gSlider.position(windowWidth/2 - 150, windowHeight - 140);
  gSlider.style('width', '200px');
  //blue
  bSlider = createSlider (0, 255, blue, 1);
  bSlider.position(windowWidth/2 + 100, windowHeight - 140);
  bSlider.style('width', '200px');
  
  //resets the drawing by removing all of the coordinates from the arrays
  xArr = [];
  yArr = [];

  //------------VALUE RESET-----------------
  // resets all of the values just for a good measure
  noStroke();
  dragging = false;
  r = tempR;
  l = p/r;
  k = r/R;
  x = width / 2 + (R-r) * cos(mouseAngle);
  y = height / 2 + (R-r) * sin(mouseAngle);
  penAngle = TWO_PI * counter + mouseAngle;
  xpen = R * ((1 - k) * cos(penAngle) + (l * k * cos(((1-k) / k) * penAngle))) + (width) / 2
  ypen = R * ((1 - k) * sin(penAngle) - (l * k * sin(((1-k) / k) * penAngle))) + (height) / 2
}