
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  var ballHeight = map(drum, 0, 100, 0, height)

  fill(255,255,255)
  ellipse(50, ballHeight, 50)
}