let firstRun = true;
let testbackground;
let midgroundcolour;
let midgroundlinework;
let foregroundcolour;
let foregroundlinework;
let floating1;
let floating2;
let floating3;
let floating4;
let floating5;
let floating6;
let floating4lines;
let floating5lines;
let floating6lines;
let townsillhouette;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if (firstRun) {
    rectMode(CENTER);
    testbackground = loadImage('testbackground.png');
    midgroundcolour = loadImage('midgroundcolour.png');
    midgroundlinework = loadImage('midgroundlinework.png');
    foregroundcolour = loadImage('foregroundcolour.png');
    foregroundlinework = loadImage('foregroundlinework.png');
    floating1 = loadImage('floating1.png');
    floating2 = loadImage('floating2.png');
    floating3 = loadImage('floating3.png');
    floating4 = loadImage('floating4.png');
    floating5 = loadImage('floating5.png');
    floating6 = loadImage('floating6.png');
    floating4lines = loadImage('floating4lines.png');
    floating5lines = loadImage('floating5lines.png');
    floating6lines = loadImage('floating6lines.png');
    townsillhouette = loadImage('townsillhouette.png');
    firstRun = false;
  }

  background(228, 217, 144);
  textFont('Helvetica'); // please use CSS safe fonts
  textSize(24);

  let tintRed = 100;
  let otherMapcolour = map(vocal, 0, 90, 0, 80, true);
  let otherMap2 = map(other, 60, 100, -0, -80, true);
  let drumMap = map(drum, 70, 100, 0, 15, true);
  let drumMap2 = map(drum, 75, 100, 0, 10, true);
  let bassMap = map(bass, 30, 100, -20, -80, true);
  let bassMap2 = map(bass, 50, 100, -50, -80);
  let vocalMap = map(vocal, 40, 100, 80, 500, true);
  let vocalMapcolour = map(vocal, 40, 100, 140, 0, true);
  let tintAlpha = otherMapcolour;
  let tintColour = color(tintRed, 0, 0, tintAlpha);
  let cloudColour = color(vocalMapcolour + 25, vocalMapcolour + 30, vocalMapcolour, 255)
  let ballHeight = 50;

  if (floating3) {
    image(floating3, 0, bassMap);
  }



  if (floating2) {
    image(floating2, 0, bassMap);
  }



  if (floating1) {
    image(floating1, 0, otherMap2);
  }

  noStroke();
  fill(200, 150, 100);

  ellipse(340, 210, 200);

  fill(cloudColour);

  for (let i = 1; i <= vocalMap; i++) {
    let ball2Step = i*2;
    ellipse(ball2Step - 50, 155, 180); // left cloud
  }

  for (let i = 1; i <= vocalMap; i++) {
    let ball2Step = i*2;
    ellipse(ball2Step - 100, 70, 50); // left cloud
  }

  for (let i = 1; i <= vocalMap; i++) {
    let barWidth = i*2;
    ellipse(-barWidth + 1900, 170, 220); // right cloud
  }

  for (let i = 1; i <= vocalMap; i++) {
    let barWidth = i*2;
    ellipse(-barWidth + 1950, 70, 70); // right cloud
  }

  for (let i = 1; i <= vocalMap; i++) {
    let barWidth = i*2;
    ellipse(-barWidth + 2100, 290, 200); // right cloud
  }

  if (townsillhouette) {
    image(townsillhouette, 0, drumMap2);
  }



  if (floating6) {
    image(floating6, 0, otherMap2 - 20);
  }



  if (floating5) {
    image(floating5, 0, otherMap2 - 20);
  }



  if (floating4) {
    image(floating4, 0, bassMap + 20);
  }



  if (midgroundcolour) {
    image(midgroundcolour, 0, 0);
  }

  rectMode(CORNER);
  fill(tintColour);
  rect(0, 0, 1920, 1080);

  if (midgroundlinework) {
    image(midgroundlinework, 0, 0);
  }



  if (foregroundcolour) {
    image(foregroundcolour, 0, drumMap);
  }



  if (foregroundlinework) {
    image(foregroundlinework, 0, drumMap);
  }



  if (floating4lines) {
    image(floating4lines, 0, bassMap + 20);
  }



  if (floating5lines) {
    image(floating5lines, 0, otherMap2 - 20);
  }



  if (floating6lines) {
    image(floating6lines, 0, otherMap2 - 20);
  }



//  if (drumMap >= 30) {
//    fill(255, 100, 100);
//    ellipse(450, 250, 200);
//  }


//  for (let i = 1; i <= drumMap; i++) {
//    let ballStep = i * 50;
//    ellipse(ballStep, ballHeight, 50);
//  }


}