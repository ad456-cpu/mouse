var cat;
var mouse;
var background
var mouseImg1,mouseImg2,mouseImg3;
var catImg1,catImg2,catImg3;
function preload() {
    //load the images here
    backgroundImage=loadImage("garden.png");
   
     catImg1=loadAnimation("images/cat1.png");  
     catImg2=loadAnimation("images/cat2.png","images/cat3.png");
     catImg3=loadAnimation("images/cat4.png");

mouseImg1=loadAnimation("images/mouse1.png");
mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
mouseImg3=loadAnimation("images/mouse4.png");
}
function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(870,600);
cat.addAnimation("catSleeping",catImg1);
cat.scale=0.2;

mouse=createSprite(200,600);
mouse.addAnimation("mouseStanding",mouseImg1);
mouse.scale=0.15;



}

function draw() {

    
    //Write condition here to evalute if tom and jerry collide

    background(backgroundImage);

    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    {
     cat.velocityX=0;
     cat.addAnimation("catimage",catImg3);
     cat.x=300;
     cat.scale=0.2;
     cat.changeAnimation("catimage");
     mouse.addAnimation("mouseimage",mouseImg3);
     mouse.scale=0.15;
     mouse.changeAnimation("mouseimage");
    }

   
  
    

    drawSprites();
}

function keyPressed(){
    if(keyCode === LEFT_ARROW){
        cat.velocityX=-5;
        cat.addAnimation("catRunning",catImg2);
        cat.changeAnimation("catRunning");

        mouse.addAnimation("mouseTeasing",mouseImg2);
        mouse.frameDelay = 25;
        mouse.changeAnimation("mouseTeasing");

    }
}

