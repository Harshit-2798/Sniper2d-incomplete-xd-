var city ,car1 ,car1img, car2,car2img,aim,aimimg
var man1 , man1img,man2 , man2img,man3 , man3img,man4 , man4img,child1,child1img
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	man1img = loadImage("man1.gif")
	man2img = loadImage("walking1.gif")
	man3img = loadImage("walking2.gif")
	man4img = loadImage("walkinhg 3.gif")
	child1img = loadImage("walking4.gif")
	city = loadImage("City.png")
	aimimg = loadImage ("aim.png")
	car1img = loadImage("car1.gif")
	car2img = loadImage("car2.gif")
}

function setup() {
	createCanvas(1000, 400);

frameRate(60)
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	aim=createSprite(mouseX,mouseY,20,20)
	aim.addImage(aimimg)
	aim.scale=0.1
	
man1 = createSprite (1000,366,20,20)
man1.addImage(man1img)
man1.scale=0.4
man1.velocityX=-2
man2 = createSprite (200,370,20,20)
man2.addImage(man2img)
man2.scale=0.35
man2.velocityX=0.5
man3 = createSprite (600,366,20,20)
man3.addImage(man3img)
man3.scale=0.4
man3.velocityX=1.25
man4 = createSprite (300,370,20,20)
man4.addImage(man4img)
man4.scale=0.2
man4.velocityX=1.5
child1 = createSprite (700,370,20,20)
child1.addImage(child1img)
child1.scale=0.175
child1.velocityX=1.75

car1 = createSprite (0,370,20,20)
car1.addImage(car1img)
car1.scale=0.75
car1.velocityX=5



car2 = createSprite (1000,373,20,20)
car2.addImage(car2img)
car2.scale=0.75
car2.velocityX=-2.5
	Engine.run(engine);
	Engine.update(engine)
  
}


function draw() {
  rectMode(CENTER);
  background(city);
 
if (man1.x < -100)
{
	man1.x = 1000
}
 	
if (man2.x > 1100)
{
	man2.x = 0
}
 	
if (man3.x > 1100)
{
	man3.x = 0
}
 	
if (man4.x >1100)
{
	man4.x = 0
}
if ( child1.x >1100)
{
	child1.x = 0
}
 	
if (car1.x > 1100)
{
	car1.x = 0
}
if (car2.x < -100)
{
	car2.x = 1000
}
aim.x=mouseX
aim.y=mouseY
  drawSprites();

}



