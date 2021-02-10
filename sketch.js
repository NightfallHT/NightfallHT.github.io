var dragging = false; // Is the object being dragged?
var rollover = false; // Is the mouse over the ellipse?

var x, y, r;          // Location and size
var offsetX, offsetY; // Mouseclick offset
// Arrays
let xArr = [];
let yArr = [];
<<<<<<< HEAD
let colorArr = [];
let buttonArr = [24, 30, 32, 36, 40, 45, 48, 50, 52, 56, 60, 63, 64, 72, 75, 80, 84];

let normalizedAngle = 0;
let buttonVal = 24;
let currentAngle = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  //drawGui();

  buttonArr.forEach((buttonVal, i) => {
    const button = createButton(buttonVal);
    button.position(windowWidth/18 * (i+1), windowHeight-100);
    button.mousePressed(() => changeR(buttonVal));
  });

  // function drawGui(){
  //   for (i = 1; i <= 17; i++)
  //  {
  //   let button = [i];
  //   button[i] = createButton(buttonArr[i]);
  //   button[i].position(windowWidth/18 * i, windowHeight/2);
  //   button[i].mousePressed(buttonVal = buttonArr[i]);
  //   button[i].mousePressed(changeR);
  //  }
  
  
  // Dimensions
  R = 105 * 2;          //radius of the outside circle
  r = buttonVal*2;           //radius of the inside circle
  D = 2 * R;            //diameter of the outside circle
  d = 2 * r;            //diameter of the inside circle
  p = 20;               //distance of the pen



=======
var buttonArr = [24, 30, 32, 36, 40, 45, 48, 50, 52, 56, 60, 63, 64, 72, 75, 80, 84];
// Sliders
let pSlider
let rSlider 
let gSlider
let bSlider
// Colors
let red = 255
let green = 0
let blue = 0

let confirmButton;

var buttonVal = 24;
var buttonVal2 = 24;
let deltaAngle = 0;
let currentAngle = 0;
let mouseAngle = 0;
let angleOffset = 0;

let lastMouseAngle = null;
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Buttons
  buttonArr.forEach((buttonVal, i) => {
    button = createButton(buttonVal);
    button.position(windowWidth/2 - 390 + 1920/42 * (i+1), windowHeight - 100);
    button.size(31,31);
    button.mousePressed(() => changeR(buttonVal));


  });
  confirmButton = createButton("save current preset");
  confirmButton.position(windowWidth/2 + 290, windowHeight - 50);
  confirmButton.mousePressed(confirmPreset);
  // Dimensions
  R = 96 * 2;          //radius of the outside circle
  r = buttonVal*2;      //radius of the inside circle
  // Sliders
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
  // Dimensions
  D = 2 * R;            //diameter of the outside circle
  d = 2 * r;            //diameter of the inside circle
  p = pSlider.value();  //distance of the pen
>>>>>>> 0975452a500427fe26410b61fadb325077e42ec9

  counter = 0;          //how many times has the mouse angle reset
  crossedUp = false;    //has the mouse crossed from the bottom half to the upper half
  crossedDown = false;  //has the mouse crossed from the upper half to the bottom half

  mouseAngle = atan2(mouseY - height/2, mouseX - width/2);
  currentAngle =  0;
  penAngle = -((R-r)/r)*mouseAngle;

  // Starting location
  x = (R-r) + windowWidth/2;
  y = windowHeight/2;
  xpen = x + p;
  ypen = windowHeight/2;

  direction = "";       //which  direction is the mouse moving
  oldy = 0;
  oldx = 0;
}

function draw() {
<<<<<<< HEAD
  l = p/r;
  k = r/R;
  background(200);
 
  d = 2*r;
  //DISPLAY DATA
  displayData();
  
  determineMouseDirection();

  mouseover();

  stroke(0);
  
    //Different fill based on state
    if (dragging) {
      fill(150);
    } else if (rollover) {
      fill(175);
    } else {
      fill(175, 200);
    }
    
    ellipse(x, y, d);
    ellipse(xpen,ypen,10);
    noFill();
    ellipse (windowWidth/2, windowHeight/2, D);
    

  if (mouseIsPressed === true){
      xArr.push(xpen);
      yArr.push(ypen);
      colorArr.push(Math.random());
=======
  // Clearing background
  background(10);
  // Value reset
  l = p/r;
  k = r/R;
  d = 2*r;
  // User Interface
  drawGUI();
  drawOutline();
  //displayData();
  determineMouseDirection();
  mouseover();  
  // Gears
  stroke(200);
  fill(200);
  star (windowWidth/2, windowHeight/2, 240, 250, 120);
  fill(0);
  star (windowWidth/2, windowHeight/2, R, R+10, 96);
  push();
  translate (x,y)
  rotate(-((R-r)/r)*(currentAngle))  
  if (dragging) {
    fill(150);
  } else if (rollover) {
    fill(175);
  } else {
    fill(175, 200);
  }
  star(0, 0, r, r+10, r/2);
  pop()
  push()
  fill(0)
  ellipse(xpen,ypen,10);
  pop()
  noStroke();
  if(dragging){
    currentAngle =  atan2(y - height/2, x - width/2)
    moveGear();
  }
  // Drawing
  if (dragging === true){
    xArr.push(xpen);
    yArr.push(ypen);
  }
  
  for (let i = 0; i<xArr.length; i++){
    strokeWeight(2);
    stroke(red, green, blue);
    line (xArr[i-1], yArr[i-1], xArr[i], yArr[i]);
  }
}

//
function mouseReleased(){
  dragging = false;
  currentAngle =  atan2(y - height/2, x - width/2)

}
function moveGear(){
  mouseAngle += (angleOffset)
  x = width / 2 + (R-r) * cos((mouseAngle+deltaAngle))
  y = height / 2 + (R-r) * sin((mouseAngle+deltaAngle))

  coordinates();

  penAngle = mouseAngle + deltaAngle + TWO_PI * counter;

  xpen = R * ((1 - k) * cos(penAngle) + (l * k * cos(((1-k) / k) * penAngle))) + (width) / 2
  ypen = R * ((1 - k) * sin(penAngle) - (l * k * sin(((1-k) / k) * penAngle))) + (height) / 2

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

function determineMouseDirection(){
  if (mouseY < oldy) {
    direction = "up";
  }else if (mouseY > oldy) {
        direction = "down";
>>>>>>> 0975452a500427fe26410b61fadb325077e42ec9
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
<<<<<<< HEAD
  currentAngle = mouseAngle;
 
=======
  penAngle = TWO_PI * counter + mouseAngle;
>>>>>>> 0975452a500427fe26410b61fadb325077e42ec9
  xpen = R * ((1 - k) * cos(penAngle) + (l * k * cos(((1-k) / k) * penAngle))) + (width) / 2
  ypen = R * ((1 - k) * sin(penAngle) - (l * k * sin(((1-k) / k) * penAngle))) + (height) / 2
}

// Stars
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

<<<<<<< HEAD
function displayData (){
  text (mouseAngle, 10, 30);
text (penAngle, 10, 60)
=======
// User Interface
function drawGUI(){
  push();
  textAlign("center")
  textSize(20)
  stroke (0)
  fill(255)
  text('spirograph.exe', windowWidth/2, windowHeight*0.05)
  textSize(15)
  fill(50)
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
// Display data
function displayData(){
  stroke(255);
  noFill();
  text (mouseAngle, 10, 30); text (currentAngle, 200, 30);
  text (penAngle, 10, 60)
>>>>>>> 0975452a500427fe26410b61fadb325077e42ec9
  text(direction, 10, 90)
  text(crossedUp, 10, 120)
  text(crossedDown, 10, 150)
  text(counter, 10, 180)
  text(mouseY, 10, 210)
<<<<<<< HEAD
  text(normalizedAngle, 10, 240)
}

function determineMouseDirection(){
  if (mouseY < oldy) {              //determine the direction
    direction = "up";
} else if (mouseY > oldy) {
        direction = "down";
}
oldy = mouseY;
}

function mouseover(){
      // Is mouse over object
      let m_dist = dist(mouseX, mouseY, x, y);
      if (m_dist < r) {
        rollover = true;
      } else {
        rollover = false;
      }
  
}

// function drawGui(){
//   for (i = 1; i <= 17; i++)
//  {
//   let button = [i];
//   button[i] = createButton(buttonArr[i]);
//   button[i].position(windowWidth/18 * i, windowHeight/2);
//   button[i].mousePressed(buttonVal = buttonArr[i]);
//   button[i].mousePressed(changeR);
//  }

// }
function changeR(buttonVal){
  let prevR = r;
  r = buttonVal;
  let prevX = x;
  let prevY = y;
  l = p/r;
  k = r/R;
  x = width / 2 + (R-r) * cos(currentAngle);
  y = height / 2 + (R-r) * sin(currentAngle);
  penAngle = TWO_PI * counter + currentAngle;
  xpen = R * ((1 - k) * cos(penAngle) + (l * k * cos(((1-k) / k) * penAngle))) + (width) / 2
  ypen = R * ((1 - k) * sin(penAngle) - (l * k * sin(((1-k) / k) * penAngle))) + (height) / 2
  //y = windowHeight/2 - (R-r);
}
=======
  text(pSlider.value(), 10, 300)
  text(buttonVal, 10, 400)
  text(p, 10, 330)
  text(deltaAngle, 10, 500)
  noStroke();
}

function drawOutline(){
  fill(125);
  stroke(125);
  index = buttonArr.indexOf(buttonVal2);
  rect(windowWidth/2 - 394 + 1920/42 * (index+1), windowHeight - 104, 39, 39, 4, 4)  
}//yes

function windowResized(){
  window.location.reload()
}
>>>>>>> 0975452a500427fe26410b61fadb325077e42ec9
