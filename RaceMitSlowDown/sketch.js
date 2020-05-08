//Jetzt sind die Punkte der Hitbox markiert
//Die Koordinaten der Pixel des Hintergrundes werden berechnet

let v;
let start;
let renner, racetrack;
let c;

function preload(){
 renner = loadImage('assets/Renner_03.svg'); 
  racetrack = loadImage('assets/racetrack.png');
}

function setup() {
  createCanvas(600, 600);
 
  v = new Vehicle(100, 50);
  
  frameRate(10);
  start = false; 
  background(racetrack);
  loadPixels(); //lädt die Farbwerte des Hintergrundbildes in das pixels-Array
   c = get(590,590);
  print(c);
}

function draw() {
  background(racetrack);
 //  c = get(590,590);
 // print(c);
  //loadPixels();// sollte nicht nötig, weil der Hintergrund sich nicht ändert
  if (keyIsPressed && key === 's') start = true;
  if (start) {
    v.lenken();
    v.update();
    v.display();
     if (keyIsPressed && keyCode === DOWN_ARROW) noLoop();
  }
  
}

function keyReleased() {
  if (keyCode === UP_ARROW) saveCanvas('track', 'png');
   if (key === 'c') loop();
 
}