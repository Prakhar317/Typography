let font;
let m1 = '2020';
let x, y, x2, x3, y2, y3;
let bbox;
let fontsize = 50;
let m2 = 'bro';
let m3 = 'ken';
let angle = 0;
let o=0;


function preload() {
  font = loadFont('assets/BlissfulThinking.otf');
}

function setup() {
  createCanvas(550, 550);

  textFont(font);
  textSize(fontsize);
  textAlign(LEFT, CENTER);

  bbox1 = font.textBounds(m1, 0, 0, fontsize);
  bbox2 = font.textBounds(m2, 0, 0, fontsize);
  bbox3 = font.textBounds(m3, 0, 0, fontsize);

  x2 = width / 2 - 3 * bbox2.w / 4;
  x3 = width / 2 + 3 * bbox3.h / 4;
  y2 = height / 2;
  y3 = height / 2;
  
  // angle=0;
}

function draw() {

  background(200, 240, 240);
  push();
  text(m1, width / 2, height / 2);
  if (key == 'n') {
    background(200, 240, 240);
    push();
    text(m2, x2-22, y2);
    if (mouseIsPressed == true && y2 < height - bbox2.h) {
      y2 += 12;
      //rotate(radians(frameCount));
    }
    if (y2 < height - bbox2.h - 10) {

    }
  }
  pop();

  push()
  
    if (key == 'n') {
      if (mouseIsPressed == true) {
        translate(width/2,height/2)
        if(angle<=(PI/3))
          angle=angle+0.05;
        rotate((angle));
        o=1;
        
      }
      else{
        o=0;
      }
      if(o===0){
        text(m3,width/2,height/2)
      }
      else{
       text(m3, 0, 0); 
      }
    }
  
  pop();




}