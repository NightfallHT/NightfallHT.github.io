// Click and Drag an object
var dragging = false; // Is the object being dragged?
var rollover = false; // Is the mouse over the ellipse?

var x, y, r;          // Location and size
var offsetX, offsetY;    // Mouseclick offset
// Arrays
let xArr = [];
let yArr = [];
let colorArr = [];
let buttonArr = [24, 30, 32, 36, 40, 45, 48, 50, 52, 56, 60, 63, 64, 72, 75, 80, 84];
// Slider
let pSlider

let confirmButton;

let normalizedAngle = 0;
let buttonVal = 24;
let currentAngle = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  //drawGui();

  buttonArr.forEach((buttonVal, i) => {
    const button = createButton(buttonVal);
    button.position(400 + windowWidth/30 * (i+1), windowHeight-100);
    button.mousePressed(() => changeR(buttonVal));
  });
  confirmButton = createButton("save current preset");
  confirmButton.position(1325 + windowWidth/30, windowHeight - 50);
  confirmButton.mousePressed (confirmPreset);

  // Dimensions
  R = 105 * 2;          //radius of the outside circle
  r = buttonVal*2;      //radius of the inside circle
  // Slider
  pSlider = createSlider (0, r-10, 10, 1);
  pSlider.position(400 + windowWidth/30, windowHeight-50);
  pSlider.style('width', '900px');
  // Dimensions continuation
  D = 2 * R;            //diameter of the outside circle
  d = 2 * r;            //diameter of the inside circle
  p = pSlider.value();               //distance of the pen




  counter = 0;          //how many times has the mouse angle reset
  crossedUp = false;    //has the mouse crossed from the bottom half to the upper half
  crossedDown = false;  //has the mouse crossed from the upper half to the bottom half

  mouseAngle = atan2(mouseY - height/2, mouseX - width/2);
  penAngle = -((R-r)/r)*currentAngle;

  // Starting location
  x = (R-r) + windowWidth/2;
  y = windowHeight/2;
  xpen = x + p;
  ypen = windowHeight/2;

  

  direction = "";                  //which  direction is the mouse moving
  oldy = 0;
  oldx = 0;
}

function draw() {
  l = p/r;
  k = r/R;
  
  background(200);
 
  d = 2*r;
  push()
  stroke(0)
  fill(50)
  rect(400, windowHeight - 200, windowWidth-740, 200)
  pop()
  //DISPLAY DATA
  displayData();
  
  determineMouseDirection();

  mouseover();

  coordinates();

  noStroke();
  
    //Different fill based on state
    if (dragging) {
      fill(150);
    } else if (rollover) {
      fill(175);
    } else {
      fill(175, 200);
    }
    stroke(0);
    ellipse(x, y, d);
    ellipse(xpen,ypen,10);
    noFill();
    ellipse (windowWidth/2, windowHeight/2, D);
    noStroke();

  if (dragging === true){
      xArr.push(xpen);
      yArr.push(ypen);
      colorArr.push(Math.random());
  }
  
  for (let i = 0; i<xArr.length; i++){
      strokeWeight(1);
      stroke( 255, 0, 0);
      line (xArr[i-1], yArr[i-1], xArr[i], yArr[i]);
      strokeWeight(1);

  }
  
}
 
function mouseMoved(){
 translate(width / 2, height / 2);
 mouseAngle =  atan2(mouseY - height/2, mouseX - width/2);
 //penAngle = TWO_PI * counter + (-((R-r)/r) * mouseAngle);
 //penAngle = TWO_PI * counter + mouseAngle;
}

function mouseDragged(){
  
  let m_dist = dist(mouseX, mouseY, x, y);      //mouse distance from the inner circle
    if (m_dist < d/2) {                         //determines whether the mouse is hovering over
      dragging = true;
  }
  translate(width / 2, height / 2);

  mouseAngle =  atan2(mouseY - height/2, mouseX - width/2);
  //penAngle = -((R-r)/r)*mouseAngle;
  penAngle = TWO_PI * counter + currentAngle;
  //penAngle = TWO_PI * counter + (-((R-r)/r) * mouseAngle);

  if(dragging){
  dragging = true;
  x = width / 2 + (R-r) * cos(mouseAngle);
  y = height / 2 + (R-r) * sin(mouseAngle);
  currentAngle = mouseAngle;
 
  xpen = R * ((1 - k) * cos(penAngle) + (l * k * cos(((1-k) / k) * penAngle))) + (width) / 2
  ypen = R * ((1 - k) * sin(penAngle) - (l * k * sin(((1-k) / k) * penAngle))) + (height) / 2
  }
}

function displayData (){
  stroke(0);
  text (mouseAngle, 10, 30);
  text (penAngle, 10, 60)
  text(direction, 10, 90)
  text(crossedUp, 10, 120)
  text(crossedDown, 10, 150)
  text(counter, 10, 180)
  text(mouseY, 10, 210)
  text(normalizedAngle, 10, 240)
  text(pSlider.value(), 10, 300)
  noStroke();
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

  tempR = buttonVal;
  
   noStroke();
   pSlider.remove();
  
  // dragging = false;
  // let prevR = r;
  // r = buttonVal;
   pSlider = createSlider (0, tempR-10, 10, 1);
   pSlider.position(400 + windowWidth/30, windowHeight-50);
   pSlider.style('width', '900px');
   tempP  = pSlider.value();
  // let prevX = x;
  // let prevY = y;
  // l = p/r;
  // k = r/R;
  // x = width / 2 + (R-r) * cos(currentAngle);
  // y = height / 2 + (R-r) * sin(currentAngle);
  // penAngle = TWO_PI * counter + currentAngle;
  // xpen = R * ((1 - k) * cos(penAngle) + (l * k * cos(((1-k) / k) * penAngle))) + (width) / 2
  // ypen = R * ((1 - k) * sin(penAngle) - (l * k * sin(((1-k) / k) * penAngle))) + (height) / 2
  //pSlider = createSlider(0, r-10, 10, 1);
  //y = windowHeight/2 - (R-r);
}


function coordinates(){
window.addEventListener('mouseup', function(e) {dragging = false;
  rollover = false;}, false);
//COUNTER METHOD
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
   //counter--;
   crossedUp = false;
   crossedDown = true;
 }else if (direction == "up" && mouseY < windowHeight / 2 && crossedUp == false){
   //counter--;
   crossedUp = true;
   crossedDown = false;
 }
}
}
function confirmPreset(){
  noStroke();
  dragging = false;
  let prevR = r;
  r = tempR;
  p = tempP;
  l = p/r;
  k = r/R;
  x = width / 2 + (R-r) * cos(currentAngle);
  y = height / 2 + (R-r) * sin(currentAngle);
  penAngle = TWO_PI * counter + currentAngle;
  xpen = R * ((1 - k) * cos(penAngle) + (l * k * cos(((1-k) / k) * penAngle))) + (width) / 2
  ypen = R * ((1 - k) * sin(penAngle) - (l * k * sin(((1-k) / k) * penAngle))) + (height) / 2
  p = pSlider.value();
  xArr = [];
  yArr = [];
}
