let v;


function setup() {
  createCanvas(600, 400);
  v = new Vehicle(100,50);
 frameRate(60);
  background(0,200,0);
  noStroke();
}

function draw() {
  v.lenken();
  v.update();
  v.display();
 
}

function keyPressed(){
 if (keyIsPressed && key ==='p') saveCanvas('rennbahn', 'png');
  if (keyIsPressed && keyCode ===DOWN_ARROW) noLoop();
   if (keyIsPressed && keyCode ===UP_ARROW) loop();
   
}