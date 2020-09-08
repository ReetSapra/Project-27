
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground (540, 400, 100,10)
	//Create the Bodies Here.
	bob1 = new bob (500,600,10)
	bob2 = new bob (520,600,10)
	bob3 = new bob (540,600,10)
	bob4 = new bob (560,600,10)
	bob5 = new bob (580,600,10)


	chain = new Rope (bob1.body,ground.body,-40,0);
	chain2 = new Rope(bob2.body,ground.body,-20,0);
	chain3 = new Rope(bob3.body,ground.body,0,0);
	chain4 = new Rope(bob4.body,ground.body,20,0);
	chain5 = new Rope(bob5.body,ground.body,40,0);

  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  bob1.display ();
  bob2.display ();
  bob3.display ();
  bob4.display ();
  bob5.display ();
  ground.display();
  chain.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  drawSprites();
 
}

function keyPressed (){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce (bob1.body,bob1.body.position, {x: -10, y:10})
	}
}

