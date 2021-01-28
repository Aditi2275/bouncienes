const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ground;
var ball;
var box ;
var Abox;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box= new Box(200,300,50,50);
    Abox= new Box(240,100,50,100);
 /*   var object_options ={
        isStatic: true
    }

  // object= Bodies.rectangle(10,10,200,20,object_options);
    World.add(world,object);*/

    var ground_option ={
       isStatic: true   
    }
    

    ground=Bodies.rectangle(200,390,200,20,ground_option);
   World.add(world,ground);

  // var ball_option ={
    restitution: 2.0
}

  // ball=Bodies.rectangle(200,100,20,20,ball_option);
  // World.add(world,ball);

    //console.log(object);


function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
   // fill("brown");
   // rect(object.position.x,object.position.y,50,50);
    rect(ground.position.x,ground.position.y,400,20);
    box.display();
    Abox.display();
   // rect(ball.position.x,ball.position.y,20,20);
}
