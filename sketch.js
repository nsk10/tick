var h,m,s;
var ha,ma,sa;


function setup() {
  createCanvas(800,400);
  angleMode (DEGREES);
  }

function draw() {
  background(255,255,255);  
  translate (400,200);
 rotate (-90);
 h = hour  ();
 m = minute ();
 s = second ();
 ha=map (h%12,0,12,0,360);
 ma=map (m,0,60,0,360);
 sa=map (s,0,60,0,360);

 push();
rotate(sa);
stroke ("blue")
strokeWeight (2)
line (0,0,100,0)
 pop();
 
 push();
 rotate(ma);
 stroke ("gold")
 strokeWeight (4)
 line (0,0,75,0)
  pop();

  push();
rotate(ha);
stroke ("orange")
strokeWeight (6)
line (0,0,50,0)
 pop();
}