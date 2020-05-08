let v;
let cat = [];
let x, millisOld, imageCounter;

function preload() {
  cat[0] = loadImage("assets/cat_1.svg");
  cat[1] = loadImage("assets/cat_2.svg");
  cat[2] = loadImage("assets/cat_3.svg");
  cat[3] = loadImage("assets/cat_4.svg");
  cat[4] = loadImage("assets/cat_5.svg");
  cat[5] = loadImage("assets/cat_6.svg");
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