function setupSliders(){
    pSlider = createSlider (0, r-10, 10, 1);
    pSlider.position(windowWidth/2 - 335, windowHeight-50);
    pSlider.style('width', '600px');
  
    rSlider = createSlider (0, 255, 255, 1);
    rSlider.position(windowWidth/2 - 400, windowHeight - 140);
    rSlider.style('width', '200px');
  
    gSlider = createSlider (0, 255, 0, 1);
    gSlider.position(windowWidth/2 - 150, windowHeight - 140);
    gSlider.style('width', '200px');
  
    bSlider = createSlider (0, 255, 0, 1);
    bSlider.position(windowWidth/2 + 100, windowHeight - 140);
    bSlider.style('width', '200px');
  }