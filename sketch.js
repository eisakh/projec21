
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var rw,lw




function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground = new Ground(400,590,10000,10)
     rw=new Ground(550,545,10,80)
	 lw=new Ground(700,545,10,80)
	


	
	var ball_options = {
		
		restitution:0.5,
		friction:0.4,
		density:1.2,
	}
 

ball=Bodies.circle(200,350,30,ball_options);
 World.add(world,ball)

 

Engine.run(engine);
  
}


function draw() {
  
  background(0);
  
ellipseMode(CENTER);
ellipse (ball.position.x,ball.position.y,30,30)
 

ground.show()
rw.show()
lw.show()
}

function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:100,y:-200});


}
}

