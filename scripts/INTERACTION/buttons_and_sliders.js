// Gear button
function changeR(buttonVal){
    buttonVal2 = buttonVal;
    tempR = buttonVal*2;
    
    pSlider.remove();
    
    pSlider = createSlider (0, tempR-10, 10, 1);
    pSlider.position(windowWidth/2 - 335, windowHeight-50);
    pSlider.style('width', '600px');
  }



// PresetButton
function confirmPreset(){
    p = pSlider.value();
    // Colors
    red = rSlider.value();
    green = gSlider.value();
    blue = bSlider.value();
    //remove
    rSlider.remove();
    gSlider.remove();
    bSlider.remove();
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
    //
    xArr = [];
    yArr = [];
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