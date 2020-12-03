
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var floor,paperBall,box_bottom,box_left,box_right,dustbin_img,dustbin;

function preload()
{
	dustbin_img = loadImage("sprites/dustbingreen.png");
}

function setup() {
  createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  	floor = new Ground(400,680,800,50);
    paperBall = new paper(100,350,20,20);
    box_bottom = new Box(650,645,100,20);
  	box_left = new Box(595,575,20,150);
    box_right = new Box(704,575,20,150);
    
    dustbin = createSprite(650,580);
    dustbin.scale = 0.5;
    dustbin.addImage(dustbin_img);


	Engine.run(engine);
  
}


function draw()
 {
  rectMode(CENTER);
  Engine.update(engine);
  background(255);

  text("press Space to jump",400,350)

  if(keyWentDown("space"))
  {
    Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:1.5,y:-25})
  }
  if(0<1)
  {
    Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:0,y:1})
  }

  paperBall.display();
  floor.display();
  box_bottom.display();
  box_right.display();
  box_left.display();
   
  drawSprites();
 
}



