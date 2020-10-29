
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bottomside
function preload()
{
	bottomside=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper=new Paper(100,200,35);
ground= new Ground (400,680,800,20);
//dustbin1= new Dustbin(645,530,250,300);
dustbin2= new Dustbin(750,585,20,150);
dustbin3= new Dustbin(550,585,20,150);
	Engine.run(engine);
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
		
	}
}

function draw() {
  rectMode(CENTER);
  background("white");
  
  

  paper.display();
  ground.display();
  dustbin2.display();
  dustbin3.display();
  //dustbin1.show();
  imageMode(CENTER)
  image(bottomside,645,530,250,300)
}



