let v;
let start;
let renner, racetrack;

function preload() {
  renner = loadImage('assets/Renner_03.svg');
  racetrack = loadImage('assets/racetrack.png');
}

function setup() {
  createCanvas(400, 400);
  millisOld = millis();
  x = 0;
  imageCounter = 0;
  v = new Vehicle(100,50);
  frameRate(10);
}

function draw() {
  background(220);
  v.lenken();
  v.update();
  v.display();
 
}