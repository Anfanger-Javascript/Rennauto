let angle = 0;

function setup() {
  createCanvas(400, 400);
  strokeWeight(6);
  stroke(250);
}

function draw() {
  background(150);
  push();
  translate(width / 2, height / 2);
  if (keyIsPressed) {
    if (keyCode === LEFT_ARROW) {
      angle -= PI / 60;
      print('Links gedrückt');
    }
  }
  if (keyIsPressed && keyCode === RIGHT_ARROW) {
    angle += PI / 60;
    print('Rechts gedrückt');
  }


  rotate(angle);
  line(0, 100, 0, -100);
  line(0, -100, -50, -50);
  line(0, -100, +50, -50);
  pop();



}