var s;
var pix = 15;
var food1,food2,specfood;
var randomfood;
var Hscore = 0;
var scorenum=0;

function setup() {
    createCanvas(1517, 750);
    s = new snake();
    frameRate(25);
    picklocation();
}
function eat(){
  if (dist(food1.x, food1.y, s.x, s.y) < 1){
    s.total ++;
    scorenum ++;
    return true;
  }
  else if (dist(food2.x, food2.y, s.x, s.y) < 1 && (randomfood == 3 || randomfood == 4)){
      s.total ++;
      scorenum ++;
      return true;
  }
  else if (dist(specfood.x, specfood.y, s.x, s.y) < 1 && randomfood == 5 ){
      s.total ++;
      scorenum += 5;
      return true;
  }
  else false
}
function dead(){
  if (s.x > 1510 || s.y > 750 || s.x < 0 || s.y < 0){
    Hscore = max(Hscore, scorenum);
    s = new snake();
    scorenum = 0;
    picklocation();
  }
  else {
    for (var i = 0; i < s.tail.length; i ++){
      if (dist(s.x, s.y, s.tail[i].x, s.tail[i].y) < 1){
        Hscore = max(Hscore, scorenum);
        s = new snake();
        scorenum = 0;
        picklocation();
      }
    }
  }
}
function picklocation(){
  var row = floor(windowWidth / pix)-10;
  var col = floor(windowHeight / pix)-10;
  randomfood= floor(random(6));
  food1 = createVector(floor(random(row)),floor(random(col)));
  food1.mult(pix);
  food2 = createVector(floor(random(row)),floor(random(col)));
  food2.mult(pix);
  specfood = createVector(floor(random(row)),floor(random(col)));
  specfood.mult(pix);
}
function showfood(){
    fill(255,0,100);
    rect(food1.x,food1.y,pix,pix);
    if(randomfood > 2){
      fill(255,0,100);
      rect(food2.x, food2.y, pix, pix);
    }
    if (randomfood == 5){
      fill(255, 252, 0);
      rect(specfood.x, specfood.y, pix, pix);
  }
}
function copyright(){
  var gamename = 'Snake Game';
  textSize(100);
  fill(255, 255, 255, 20);
  nameWidht = textWidth(gamename);
  text(gamename, (width - nameWidht)/2, height/2 - 40,);
  var name = 'Created By Arnav Kumar Mandal';
  textSize(20);
  fill(255, 255, 255, 30);
  nameWidht = textWidth(name);
  text(name, (width - nameWidht)/2, height/2 - 5,);
}
function score(){
  var score = 'Score - ' + scorenum;
  textSize(20);
  fill(255, 148, 0);
  textAlign(LEFT);
  nameWidht = textWidth(score);
  text(score, 10, 30);
  var Highscore = 'Highscore - ' + Hscore;
  textSize(20);
  fill(255, 148, 0);
  textAlign(LEFT);
  nameWidht = textWidth(score);
  text(Highscore, 10, 60);

}
function draw() {
  background(51);
  if (eat()) picklocation();
  s.update();
  s.show();
  score();
  copyright();
  showfood()
  dead();
}
function keyPressed(){
    if (keyCode == UP_ARROW){
        if (s.yspeed != 1)
        s.dir(0, -1);
      }
    if (keyCode == DOWN_ARROW){
      if (s.yspeed != -1)
      s.dir(0, 1);
    }
    if (keyCode == RIGHT_ARROW){
      if (s.xspeed != -1)
      s.dir(1, 0);
    }
    if (keyCode == LEFT_ARROW){
      if (s.xspeed != 1)
      s.dir(-1, 0);
    }
}
