// 最終課題を制作しよう

function setup(){
  createCanvas(windowWidth, windowHeight);
}

let x, y;

function draw(){
  background(160, 192, 255);

  fill(89, 145, 67)
  stroke(145, 139, 100)
  rect(50, 30, windowWidth - 100, 200)

  fill(240 ,238, 225)
  noStroke();
  circle(225, 125, 150);
  rect(150, 200, 150, 200, 20, 20, 0, 0);
  triangle(185, 375, 150, 450, 220, 450);
  triangle(255, 375, 230, 450, 295, 450);

  fill(0);
  ellipse(190, 120, 25, 30);
  ellipse(260, 120, 25, 30);
  
  strokeWeight(8);
  stroke(240 ,238, 225);
  line(155, 230, 50, 100);
  
  Push();
  Translate()
 line(300, 230, 400, 350);
 
 
 

}




function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
