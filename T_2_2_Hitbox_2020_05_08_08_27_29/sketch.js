function setup() {
  createCanvas(400, 400);
  background(220);
  rectMode(CENTER);
  const laengeBox = 100;
  const breite = 40;
 
  
  translate(width / 2, height / 2);
  rotate(0);
   rect(0,0, laengeBox, breite);
  strokeWeight(10);
  //Mittelpunkt der Box
  point(0,0);
  //Laenge der Linie vom Mittelpunkt zu einem Eck der Box
  const laenge = sqrt(laengeBox / 2 * laengeBox / 2 + breite / 2 * breite / 2);
 let festerWinkel = atan(breite / laengeBox );
  let x1 = laenge * cos(festerWinkel);
  let y1 = laenge * sin(festerWinkel);
  point(x1,y1);
  strokeWeight(1);
  line(0,0,x1,y1);
  strokeWeight(10);
  festerWinkel = atan(breite / laengeBox );
  let x2 = laenge * cos(-festerWinkel);
  let y2 = laenge * sin(-festerWinkel);
  point(x2,y2);
  strokeWeight(1);
  line(0,0,x2,y2);
  strokeWeight(10);
  
   festerWinkel = atan(breite / laengeBox );
  let x3 = laenge * cos(-festerWinkel+PI);
  let y3 = laenge * sin(-festerWinkel+PI);
  point(x3,y3);
  
  festerWinkel = atan(breite / laengeBox );
  let x4 = laenge * cos(festerWinkel+PI);
  let y4 = laenge * sin(festerWinkel+PI);
  point(x4,y4);
  print("Länge = " + nfc(laenge,2) + ", festerWinkel = " + nfc(festerWinkel,2) + ", x1 = " + nfc(x1,2) + ", y1 = " + nfc (y1,2));
  strokeWeight(2);
  //rotate(festerWinkel);
  line(-width, 0, width, 0);

}

function draw() {

}