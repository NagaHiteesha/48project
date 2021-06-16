//const Engine = Matter.Engine;
//const World = Matter.World;
//const Bodies = Matter.Bodies;
var bullet,bullet1,bullet3;
var s;
var c,c1,c2,bGroup,bGroup2,bGroup3;
var gunshot,start,win;
var player,people,gangster1,gangster2;
var bgAnimation,gangsterAnimation1,gbullet,pbullet;
var playerAnimation1,playerAnimation2,carAnimation,peopleAnimtion1,peopleAnimtion2,peopleAnimtion3,peopleAnimtion4,peopleAnimtion5;
function preload(){
playerAnimation1 = loadAnimation("images/player.PNG");
carAnimation = loadAnimation("images/car.PNG");
peopleAnimtion1 = loadAnimation("images/people1.PNG");
peopleAnimtion2 = loadAnimation("images/people2.PNG");
peopleAnimtion3 = loadAnimation("images/people3.PNG");
peopleAnimtion4 = loadAnimation("images/people4.PNG");
peopleAnimtion5 =  loadAnimation("images/people5.PNG");
bgAnimation = loadImage("images/bg2.PNG");
gangsterAnimation1 = loadAnimation("images/gangster1.2.PNG");
gbullet = loadAnimation("images/gangsterbullet.png");
pbullet = loadAnimation("images/pbullet.png");
gunshot = loadSound("sounds/N - gunshot.mp3");
start = loadSound("sounds/S - round starting.mp3");
win = loadSound("sounds/S - Applause.mp3")


}
function setup() {
  
  createCanvas(displayWidth,displayHeight);
  
  player = new Player(81,715,20,20);
  people = new People();
  gangster1 = new Gangster(450);
  gangster2 = new Gangster(200)
  c = 0;
  c1 = 0;
  c2 = 0;
  s = 0;
  bGroup = createGroup();
  bGroup2 = createGroup();
  bGroup3 = createGroup();
  start.play();
}

function draw() {
  background(bgAnimation);  
  fill("white");
  text("X:" +mouseX + "Y:" +mouseY , 50,50)

  if(keyDown("D")){
    player.spt.changeAnimation("player",playerAnimation1);
  }

  if(keyDown("left")){
    player.moveLeft();
  }
  if(keyDown("right")){
    player.moveRight();
  }
  if(keyDown("up")){
    player.up();
  }
  if(keyDown("down")){
    player.down();
  }
  if(player.spt.isTouching(people.spt1)){
    people.spt1.destroy();
     s= s+1;
  }
  if(player.spt.isTouching(people.spt2)){
    people.spt2.destroy();
    s = s + 1;
  }
  if(player.spt.isTouching(people.spt3)){
    people.spt3.destroy();
    s = s +1;
  }
  if(player.spt.isTouching(people.spt4)){
    people.spt4.destroy();
    s = s + 1;
  }
  if(player.spt.isTouching(people.spt5)){
    people.spt5.destroy();
    s = s + 1;
  }
  if(gangster2.spt.y>400){
    gangster2.spt.velocityY = -3;
  }
  else if(gangster2.spt.y<230){
    gangster2.spt.velocityY = 3;
  }
  if(gangster1.spt.y>700){
    gangster1.spt.velocityY = -3;
  }
  else if(gangster1.spt.y<530){
    gangster1.spt.velocityY = 3;
  }
  if(gangster1.spt.y == player.spt.y){
    bullet = createSprite(1150,gangster1.spt.y -20);
    bullet.velocityX = -8;
    bullet.addAnimation("bullet",gbullet);
    bullet.scale = 0.03;
    bGroup2.add(bullet);
    gunshot.play();
  }
    if(gangster2.spt.y == player.spt.y){
      bullet3 = createSprite(1150,gangster2.spt.y -20);
      bullet3.velocityX = -8;
      bullet3.addAnimation("bullet",gbullet);
      bullet3.scale = 0.03;
      bGroup3.add(bullet3);
      gunshot.play();
  }
  if(keyWentDown("space")){
    bullet1 = createSprite(player.spt.x + 80,player.spt.y - 40);
    bullet1.velocityX = 8;
    bullet1.addAnimation("bullet",pbullet);
    bullet1.scale = 0.03;
    bGroup.add(bullet1);
    gunshot.play();
  }
  if(bGroup.isTouching(gangster1.spt)){
    bGroup.destroyEach();
    c=c+1;
  }
  if(bGroup.isTouching(gangster2.spt)){
    bGroup.destroyEach();
    c=c+1;
  }
  if(bGroup2.isTouching(player.spt)){
    bGroup2.destroyEach();
    c1 = c1+1;
  }
  if(bGroup3.isTouching(player.spt)){
    bGroup3.destroyEach();
    c2 = c2+1;
  }
  if(c===5){
    gangster1.spt.destroy();
  }
  if(c2===5){
    gangster2.spt.destroy();
  }
  if(c1 === 5){
    player.spt.destroy();
  }
  if(s == 5){
    textSize(30);
    fill("white");
    text("You Win");
    win.play();
  }
  drawSprites();
}