var dragging = false; // Is the object being dragged?
var rollover = false; // Is the mouse over the ellipse?

var x, y, r;          // Location and size
var offsetX, offsetY; // Mouseclick offset
// Arrays
let xArr = [];
let yArr = [];
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

  setupButtons();
  
  // Dimensions
  R = 96 * 2;          //radius of the outside circle
  r = buttonVal*2;      //radius of the inside circle
  D = 2 * R;            //diameter of the outside circle
  d = 2 * r;            //diameter of the inside circle
  p = 10;  //distance of the pen

  setupSliders();
  
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
  // Clearing background
  background(25);
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
  drawGears();
  if(dragging){
    
    moveGear();
    
  }
  
  //Drawing

  for (let i = 0; i<xArr.length; i++){
    strokeWeight(1);
    stroke(red, green, blue);
    line (xArr[i-1], yArr[i-1], xArr[i], yArr[i]);
  }
}
