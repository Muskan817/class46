var bg,ground;
var fish1,fish_sprite;
var stars,star_img1,star_img2;
var score=0;
var stargrp;

function preload(){
bg = loadImage("Backgrounds.jpg");
fish1 = loadAnimation("fish1.png","fish2.png","fish3.png","fish4.png");
star_img1 = loadImage("golden star.png");
star_img2 = loadImage("blue star.png");

}


function setup() {
  createCanvas(1000,1000);
  ground = createSprite(400, 200, 50, 50);
  ground.addImage(bg);
  ground.scale = 3;
  ground.velocityY = 5;
  fish_sprite = createSprite(450,850,60,70)
  fish_sprite.addAnimation("mainCharacter",fish1);
  fish_sprite.scale = 1.5;

  stargrp = new Group();

}

function draw() {

  background(0,0,0);  

  if(ground.y>700){
    ground.y = 500
  }

  if(keyDown(LEFT_ARROW)){
    fish_sprite.x = fish_sprite.x - 10

  }

  if(keyDown(RIGHT_ARROW)){
    fish_sprite.x = fish_sprite.x + 10

  }

  spawnStars ();

  drawSprites();

  text("Score:"+score,100,50);

  if(fish_sprite.isTouching(stargrp)){
    stars.visible=false;
    console.log("reached")
    score = score+10
  }


}

function spawnStars (){
  if(frameCount%80===0){
  stars = createSprite(Math.round(random(50, 850),Math.round(random(0, 650))));
  stars.velocityY = 5;
  var rand=Math.round(random(1,2));
  if (rand===1){
    stars.addImage(star_img1);
  }else{
    stars.addImage(star_img2);
  } 
  stars.scale = 0.3
  stargrp.add(stars);
  

  }


}

