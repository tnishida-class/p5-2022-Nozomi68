// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  const red = color(255, 0, 0)
  const blue = color(0,0,255)
  balloon(0, 0, "I love keyakizaka46", red, blue);
}

function balloon(x,y,t,bc,fc){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  fill(bc);
  rect(x, y, x + w + p * 2, y + h + p * 2);
  triangle(x + w + p * 2 - 40, y + h + p * 2, x + w + p * 2 - 15, y + h + p * 2, x + w + p * 2, y + h + p * 2 + 30)
  fill(fc);
  text(t, p, h + p);
  
}
