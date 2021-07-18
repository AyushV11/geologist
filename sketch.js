
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
	


	engine = Engine.create();
	world = engine.world;
	hammer=new Hammer(700,250,100,20);
	ground=new Ground(600,height,1200,30);
	iron=new Iron(600,300,80,50)
	rubber=new Rubber(1000,0,100)
	
	
	fill ("brown")
	sand1 = Bodies.circle(40,378,15,{isStatic:true})
	World.add(world,sand1)
	sand2 = Bodies.circle(100,378,15,{isStatic:true})
	World.add(world,sand2)
	sand3 = Bodies.circle(300,378,15,{isStatic:true})
	World.add(world,sand3)
	sand4 = Bodies.circle(310,378,15,{isStatic:true})
	World.add(world,sand3)
	sand5 = Bodies.circle(320,378,15,{isStatic:true})
	World.add(world,sand3)
	sand6 = Bodies.circle(380,378,15,{isStatic:true})
	World.add(world,sand3)
	
	stone=new Stone(810,300,80,80)
  
	Engine.run(engine);
  }
  

function draw() {
  rectMode(CENTER);
  background(0);
  hammer.display()
  ground.display()
  iron.display()
  stone.display()
  rubber.display()
  circle(sand1.position.x,sand1.position.y,15)
  circle(sand2.position.x,sand2.position.y,15)
  circle(sand3.position.x,sand3.position.y,15)
  circle(sand4.position.x,sand4.position.y,15)
  circle(sand5.position.x,sand5.position.y,15)
  circle(sand6.position.x,sand6.position.y,15)

 
 
  drawSprites();
 
}



