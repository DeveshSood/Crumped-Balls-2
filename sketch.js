const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,box1,box2,box3,paper1;
var i, edges, edge1, edge2, edge3, edge4;

function preload()
{
	boximage = loadImage('box.png');
}

function setup() {
	
	
	var canvas = createCanvas(1400, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	
	createEdges();

	box1 = new Box(1100,495,150,15);
	box2 = new Box(1185,420,15,170);
	box3 = new Box(1015,420,15,170);
	
	ground1 = new Ground(700,550,1400,30);
	
	paper1 = new Paper(200,300);
	
	 Engine.run(engine);
  
}


function draw() {
	background(206,237,227);
	Engine.update(engine);
	
	
	
	ground1.display();
	box3.display();
	box1.display();
	box2.display();
	image(boximage,1000,330,200,200);
	paper1.display();
	
 
}

	function keyPressed()	{
		if(keyCode===UP_ARROW)	{
			Matter.Body.applyForce(paper1.body,paper1.body.position,{x:110,y:-110});

		}
		else if(keyCode===DOWN_ARROW)	{
			Matter.Body.applyForce(paper1.body,paper1.body.position,{x:-110,y:-110});

		}
	}

	function createEdges(){
		var options2 = 
		  {
			  isStatic:true,
			  'restitution':0.8,
			  'friction':0.3,
			  'density':1.2
		  }
		  
		edge1 = createSprite(0, height/2, 5, height);
		edge1.visible = false;
		edge1 = Bodies.rectangle(0, height/2, 5, height, options2);
		World.add(world, edge1);
	
		edge2 = createSprite(width, height/2, 5, height);
		edge2.visible = false;
		edge2 = Bodies.rectangle(width, height/2, 5, height, options2);
		World.add(world, edge2);
	
		edge3 = createSprite(width/2, 0, width, 5);
		edge3.visible = false;
		edge3 = Bodies.rectangle(width/2, 0, width, 5, options2);
		World.add(world, edge3);
	
		edge4 = createSprite(width/2, height, width, 5);
		edge4.visible = false;
		edge4 = Bodies.rectangle(width/2, height, width, 5, options2);
		World.add(world, edge4);
	}