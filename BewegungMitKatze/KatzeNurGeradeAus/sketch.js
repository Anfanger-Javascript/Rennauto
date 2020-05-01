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
}

function draw() {
  background(220);
  if (millis() > millisOld + 200) {
    imageCounter++;
    millisOld = millis();
    if (imageCounter === 6) {
      imageCounter = 0;
    }
    x += 2;
    if (x > width) x = 0;
  }
  image(cat[imageCounter],x, height/2, 25, 15);




}