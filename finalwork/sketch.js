// 最終課題を制作しよう
let cx, cy; //時計の中心
let radius; //時計の半径
let secHandLength; // 針の長さ

function setup(){
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  textSize(30);
  textAlign(CENTER);
  cx = 1150; // キャンバスのセンター
  cy = 100;
  radius = 60; 

  secHandLength = radius - 20; // 針を半径より短くする
}



function draw(){


  background(240, 219, 189);
  for(let i = 400; i < windowWidth - 60; i += 150)
  child(i, 450)

  fill(89, 145, 67)
  stroke(145, 139, 100)
  rect(50, 30, windowWidth - 100, 300) //黒板

 noStroke();
  drawCircle();
 drawIndex();
 stroke(0)
 drawCenter(); 
 drawSecHand();
  
  fill(0); //黒板の板書
  noStroke();
  textSize(25)
  text("理科", 250, 70)
  textSize(15)
  stroke(250, 229, 45) 
  text("学習問題", 350, 100)
  noStroke();
  text("おもりの重さを重くすると、ふりこの周期を曲に合わせられるか？", 550, 120)
  fill(222, 2, 10)
  text("アーギュメントで考えよう！", 450, 150)
  fill(0)
  textSize(20)
  text("証拠 　　　 主張", 470, 180)
  text("理由付け", 465, 250)
  fill(250, 229, 45)
  text("⇒", 470, 180)
  text("⇒", 950, 190)
  textSize(28)
  text("⇑", 470, 220)
  text("⇑", 950, 230)
  fill(0)
  textSize(15)
  text("おもりの重さが10gと20gの", 750, 180)
  text("どちらのふりこも周期は平均1,4秒で同じだった", 750, 200)
  text("合わせられる", 1050, 190)
  text("おもりの重さは周期に関係がない", 950, 270)

  

  
  fill(242 ,229, 211) //先生
  noStroke();
  circle(225, 175, 150); //頭
  rect(150, 250, 150, 250, 20, 20, 0, 0); //胴体
  triangle(185, 475, 150, 550, 220, 550); //足
  triangle(255, 475, 230, 550, 295, 550); //足
  fill(0);
  ellipse(190, 170, 25, 30); //目
  ellipse(260, 170, 25, 30); //目
  strokeWeight(8);
  stroke(242 ,229, 211);
  line(155, 270, 50, 370); //右手
  line(300, 270, 400, 200); //左手



}


function drawCircle() {
  fill(255, 235, 171);
  ellipse(cx, cy, radius * 2);
}


function drawIndex() {
  fill(0);
  let count = 0;
  for (let angle = -60; angle <= 270; angle += 30) {
      const x = cx + cos(angle) * (radius - 20);
      const y = cy + sin(angle) * (radius - 20) + 10;
      count++;
      text(count, x, y);
  }
}
function drawCenter() {// 針の黒丸
  fill(0);
  ellipse(cx, cy, 1);
}

function drawSecHand() {// 針
  let sAngle = map(second(), 0, 60, 0, 360) - 90;
  strokeWeight(1);
  line(cx, cy, cx + cos(sAngle) * secHandLength, cy + sin(sAngle) * secHandLength);
}

const child = (a,b) => { //子ども
  push();
  translate(a, b);
  fill(0);
  noStroke();
  circle(0, 0, 120)
  fill(97, 210, 232)
  rect(-50, 58, 100)
  pop();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
