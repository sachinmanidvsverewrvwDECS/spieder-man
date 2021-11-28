const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var h1,h2,h3
var hero
var bg,bgImg
var score=0
var wall1,wall2
function preload(){
hero_runningImg=loadAnimation("sh0.png","spiderRunning1.png","spiderRunning2.png","spiderRunning3.png","spiderRunning4.png","spiderRunning5.png","spiderRunning6.png","spiderRunning7.png")
heroImg=loadImage("spiderRunning7.png")
spp_runiing=loadAnimation("spyPunch00.png","spyPunch01.png","spyPunch02.png","spyPunch03.png","spyPunch04.png","spyPunch05.png","spyPunch06.png","spyPunch07.png","spyPunch08.png","spyPunch09.png","spyPunch10.png")
bgImg=loadImage("city20.png")
bg2=loadImage("Cn.jpg")
carImage=loadImage("cars0.png")
sand_running=loadAnimation("san00.png","san01.png","san02.png","san03.png","san04.png","san05.png","san06.png","san07.png","san08.png","san09.png","san10.png","san11.png")
logoImg=loadImage("lol0.png")
homeImg=loadImage("home0.png")
homeImg2=loadImage("home20.png")
homeImg3=loadImage("home30.png")
homeImg4=loadImage("home40.png")
homeImg5=loadImage("home50.png")
sandImg=loadImage("san00.png")
shImg=loadImage("sh0.png")
logoImg=loadImage("logo0.png")
goblinImg=loadImage("goblin10.png")
goblinImg2=loadImage("rungo0.png")
bombImg=loadAnimation("bomb0.png","bomb1.png")
craneImg=loadImage("crane0.png")
webImg=loadImage("web0.png");
ropeImg=loadImage("rope20.png")
girlImg=loadImage("girl0.png")
carImg=loadImage("accident.jpg")
shootSound=loadSound("shoot.mp3.mp3")
hospitalImg=loadImage("hospital0.png")

}
function setup(){
     createCanvas(1800,800);
    engine = Engine.create();
    world = engine.world;
    ground=createSprite(900,790,10000,20);
    ground.shapeColor="red"
    ground2=new Ground(900,790,10000,20);
    home=createSprite(100,650,40,120);
    home.addImage(homeImg);

    home2=createSprite(500,501,40,120);
    home2.addImage(homeImg2)
    home2.scale=1.9
   
    home3=createSprite(1200,674,40,120);
    home3.addImage(homeImg3);

    home4=createSprite(1500,674,40,120);
    home4.addImage(homeImg4);

    home5=createSprite(1800,605,40,120);
    home5.addImage(homeImg5)
    home5.scale=1.3

    home6=createSprite(3000,605,40,120);
    home6.addImage(homeImg5)
    home6.scale=1.3

    home7=createSprite(3200,674,40,120);
    home7.addImage(homeImg4);

    home8=createSprite(3600,641,40,120);
    home8.addImage(hospitalImg)
    home8.scale=1.5
    
    home8=createSprite(4118,501,40,120);
    home8.addImage(homeImg2)
    home8.scale=1.9

    home5=createSprite(4500,605,40,120);
    home5.addImage(homeImg5)
    home5.scale=1.3
    
   
    sandman=createSprite(350,730,40,40)
  //  sandman.addImage(sandImg)
    sandman.setCollider("circle",0,0,60)
    sandman.debug=false

    sandman2=createSprite(950,730,40,40)
    //sandman2.addImage(sandImg)
    sandman2.setCollider("circle",0,0,60)
    sandman2.debug=false


    spider=createSprite(50,750,40,40)
    spider.addImage(shImg)
    spider.scale=1.7
    spider.setCollider("rectangle",0,0,160,20)
    spider.debug=false

    h1=createSprite(-740,70,30,30)
    h1.addImage(logoImg)
    h1.scale=0.2
    h2=createSprite(-680,70,30,30)
    h2.addImage(logoImg)
    h2.scale=0.2
    h3=createSprite(-620,70,30,30)
    h3.addImage(logoImg)
    h3.scale=0.2

    h4=createSprite(1193,753,30,30)
    h4.addImage(logoImg)
    h4.scale=0.1
    h5=createSprite(1587,750,30,30)
    h5.addImage(logoImg)
    h5.scale=0.1
    h6=createSprite(2345,750,30,30)
    h6.addImage(logoImg)
    h6.scale=0.1


    goblin=createSprite(605,650,40,40)
    goblin.addImage(goblinImg)
    goblin.setCollider("circle",0,0,70)
    goblin.debug=false


    wall1=createSprite(605,550,60,20)
   wall1.visible=false
    wall2=createSprite(605,790,60,20)
    wall2.visible=false
    
    //sling=new SlingShot(spider.body,{x:400,y:500})
    bomb=createSprite(1808,770,10,10)
    bomb.addAnimation("kh",bombImg)
    bomb.scale=0.03
    bomb.setCollider("circle",90,0,5)
    bomb.debug=false
   
    bomb2=createSprite(1408,770,10,10)
    bomb2.addAnimation("kh",bombImg)
    bomb2.scale=0.03
    bomb2.setCollider("circle",90,0,5)
    bomb2.debug=false

    bomb3=createSprite(1008,770,10,10)
    bomb3.addAnimation("kh",bombImg)
    bomb3.scale=0.03
    bomb3.setCollider("circle",100,0,3)
    bomb3.debug=false
    crane=createSprite(2634,120,30,30)
    crane.addImage(craneImg)

    home0=createSprite(2634,485,40,120);
    home0.addImage(homeImg2)
    home0.scale=2

    rope=createSprite(2540,125,40,120);
    rope.addImage(ropeImg)
    rope.scale=1.3

    girl=createSprite(rope.x,rope.y+50,40,40)
    girl.addImage(girlImg)
    girl.scale=0.1
    girl.setCollider("circle",0,0,20)
    girl.debug=false
    
  wall=createSprite(2423,rope.y+410,60,10)
  wall.setCollider("rectangle",0,0,60,40)
  wall.debug=false
  wall.visible=false
  wall23=createSprite(2463,rope.y+310,60,10)
  wall23.setCollider("rectangle",0,0,60,40)
  wall23.debug=false

  home9=createSprite(2217,674,40,40)
  home9.addImage(homeImg4);
   
   
}

function draw(){
    background("black");
    Engine.update(engine);
    score++
   
    if(keyDown("right")){
       spider.x=spider.x+9
       spider.addAnimation(hero_runningImg)
    }else{
        spider.addImage(shImg)
    }

    if(keyDown("left")){
        spider.x=spider.x-9
     }
    if(spider.isTouching(sandman)){
        sandman.velocityX=-3
       
    }else{
        sandman.addAnimation("hg",sand_running)
    }
    if(spider.isTouching(sandman2)){
        sandman.velocityX=-3
       
    }else{
        sandman2.addAnimation("hg",sand_running)
    }
    if(girl.x>3585){
        girl.x=3585
        girl.lifetime=100
    }

    
    camera.x=spider.x
    console.log(spider.x)
    if(keyDown("w")){
        web()
        score=score+1
        //spider.addSound(shootSound)
    }
    strokeWeight(20)
    text("score=0", 400,70);
    

   h1.x=spider.x-740
   h2.x=spider.x-680
   h3.x=spider.x-620
  

   if(spider.isTouching(goblin)){
       goblin.addImage(goblinImg2)
       goblin.velocityX=23
      // box=new BoX(goblin.x,goblin.y,30,30)
      ball()
   }
   if(goblin.x===2353){
       goblin.velocityX=0
       goblin.velocityY=5
       goblin.addImage(goblinImg)
   }else{
       goblin.velocityY=0
   }
   ground2.display()
   if(spider.isTouching(sandman)){
    sand()
    
   
   
   }

   if(spider.isTouching(sandman2)){
    sand()
    }
  
   if(keyDown("space")){
       spider.y=spider.y-20
   }
   spider.velocityY=spider.velocityY+0.8
   spider.collide(ground)

   wall1.x=goblin.x-10
   wall2.x=goblin.x+10
   goblin.velocityY=3
   goblin.bounceOff(wall1)
   goblin.bounceOff(wall2)
  // sling.display()

  if(spider.isTouching(bomb)){
      bomb.destroy()
    if(h1!=null||h2!=null||h3!=null){
        h3.destroy()
    }
    if(h1!=null||h2!=null){
        h2.destroy()
    }
    if(h1!=null){
        h1.destroy()
        spider.destroy()
        //camera.x=home2.x
    }

  }

  if(spider.isTouching(bomb2)){
    bomb2.destroy()
  if(h1!=null||h2!=null||h3!=null){
      h3.destroy()
  }
  if(h1!=null||h2!=null){
      h2.destroy()
  }
  if(h1!=null){
      h1.destroy()
      spider.destroy()
      //camera.x=home2.x
  }

}

if(spider.isTouching(bomb3)){
    bomb3.destroy()
  if(h1!=null||h2!=null||h3!=null){
      h3.destroy()
  }
  if(h1!=null||h2!=null){
      h2.destroy()
  }
  if(h1!=null){
      h1.destroy()
      spider.destroy()
      //camera.x=home2.x
  }

}


crane.depth=home0.depth+3
spider.depth=home0.depth+3
spider.depth=home9.depth+3
girl.depth=home9.depth+3


spider.collide(wall)
spider.collide(wall23)


    if(spider.isTouching(girl)){
        girl.x=spider.x
        girl.y=spider.y
    }


    if(spider.x>2125){
        girl.velocityY=girl.velocityY+0.3
    }

    if(girl.y>800){
        girl.destroy()
        text("you lose mission failed",girl.x,750)
    }
    girl.collide(ground)
    drawSprites();
    
   }


function web(){
    if(frameCount%10===0){
        var car=createSprite(1950,630,4,4,PI/160)
        car.addImage(webImg)
        car.velocityX=34
        car.scale=1.5
        car.x=spider.x-50
        car.y=spider.y
      //  car.addAnimation("k",sandImage)  
        if(spider.isTouching(sandman)){
           // car.destroy();
            sandman.destroy()
           // car.destroy()
            
        }

        if(spider.isTouching(sandman2)){
            // car.destroy();
             sandman2.destroy()
             //car.destroy()
             
         }
         if(spider.isTouching(goblin)){
            // car.destroy();
             goblin.destroy()
             //car.destroy()
             
         }
        
       
      

     
    }
    
}

function sand(){
    if(frameCount%40==0){
        var sand=createSprite(350,700,10,10)
        sand.shapeColor="lightyellow"
        sand.velocityX=-20
        if(h1!=null||h2!=null||h3!=null){
            h3.destroy()
        }
        if(h1!=null||h2!=null){
            h2.destroy()
        }
        
    }
}
function ball(){
    if(frameCount%40===0){
        var ball=createSprite(goblin.x,goblin.y,10,10)
    ball.velocityX=-12
    ball.addAnimation("w",bombImg)
    ball.scale=0.03
    ball.velocityY=ball.velocityY+0.9
    if(h1!=null||h2!=null||h3!=null){
        h3.destroy()
    }
    if(h1!=null||h2!=null){
        h2.destroy()
    }
    if(h1!=null){
        h1.destroy()
        spider.destroy()
        camera.x=goblin.x
    }else{
       // camera.x=spider.x
    }
    }
    

}