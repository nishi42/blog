let IN_CNT = 0; // 円の中に入った個数
let R = 200; // 円の半径・正方形の１辺の長さ
let N = 1000; // 試行回数


function setup() {
  createCanvas(400, 400);
  background(220);
  rect(100, 100, R);
  arc(100, 300, R*2, R*2 , -HALF_PI, 0);
  
  //frameRate(1000);
}

function draw() {
  translate(100, 300);
  if(frameCount < N){
    
    let x = random(0, 1);
    let y = -random(0, 1) ;

    circle(x * R, y * R, 1);
        
    if(x*x + y*y < 1.0){
      IN_CNT += 1;
      }
    }
  else{
    text(IN_CNT / N * 4, 100, 50);
  }
}