let firstRun = true;
let testbackground;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if (firstRun) {
    rectMode(CENTER);
    testbackground = loadImage('testbackground.png');
    firstRun = false;
  }

  background(239, 230, 169);
  textFont('Helvetica'); // please use CSS safe fonts
  textSize(24);

  let tintRed = 255;
  let otherMap = map(other, 60, 100, 0, 75, true);
  let tintAlpha = otherMap; // Declare and assign tintAlpha here
  let tintColour = color(tintRed, 0, 0, tintAlpha);
  let drumMap = map(drum, 0, 10, 0, 5);
  let ballHeight = 50;

  if (testbackground) {
    image(testbackground, 0, 0);
  }

  rectMode(CORNER);
  fill(tintColour);
  rect(0, 0, 1920, 1080);

  noStroke();
  fill(200, 150, 100);

  ellipse(450, 250, 200);

  if (drumMap >= 30) {
    fill(255, 100, 100);
    ellipse(450, 250, 200);
  }

  noStroke();
  fill(255, 255, 255);

  for (let i = 1; i <= drumMap; i++) {
    let ballStep = i * 50;
    ellipse(ballStep, ballHeight, 50);
  }

  for (let i = 1; i <= otherMap; i++) {
    let ball2Step = i * 50;
    ellipse(ball2Step, 500, 50);
  }
}