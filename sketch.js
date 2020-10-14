 var c1,c2,c3,c4;
 var w1,w2,w3,w4,w5,w6,wall,wall2,wall3,wall4;
 var d1,d3;
 var speed,speed1,speed2,speed3;
 var weight,weight1,weight2,weight3;
 var testwall1,testwall2,testwall3,testwall4;
 var thickness,thickness1,thickness2,thickness3;
 var damage,damage1,damage2,damage3;

 function setup() {
  createCanvas(1100,500);
  
  c1 = createSprite(45,140,30,20);
  c2 = createSprite(45,240,30,20);
  c3 = createSprite(45,340,30,20);
  c4 = createSprite(45,440,30,20);

  w1 = createSprite(535,10,1100,20);
  w2 = createSprite(535,90,1100,20);
  w3 = createSprite(535,190,1100,20);
  w4 = createSprite(535,290,1100,20);
  w5 = createSprite(535,390,1100,20);
  w6 = createSprite(535,490,1100,20);
  wall = createSprite(1080,height/2,40,height);
  wall2 = createSprite(20,50,40,60);
  wall3 = createSprite(350,50,20,60);
  wall4 = createSprite(750,50,20,60);
  
  d1 = createSprite(100,50,70,20);
  d3 = createSprite(810,50,70,20);

  speed  = Math.round(random(180,200));
  speed1 = Math.round(random(180,200)); 
  speed2 = Math.round(random(180,200));
  speed3 = Math.round(random(180,200));

  weight  = Math.round(random(30,52));
  weight1 = Math.round(random(30,52));
  weight2 = Math.round(random(30,52));
  weight3 = Math.round(random(30,52));
   
  thickness  = Math.round(random(20,80));
  thickness1 = Math.round(random(20,80));
  thickness2 = Math.round(random(20,80));
  thickness3 = Math.round(random(20,80));

  testwall1 = createSprite(1000,140,thickness,60);
  testwall2 = createSprite(1000,240,thickness1,60);
  testwall3 = createSprite(1000,340,thickness2,60);
  testwall4 = createSprite(1000,440,thickness3,60);

}

function draw() {

  background(80,80,80); 

  c1.shapeColor="black";
  c2.shapeColor="black";
  c3.shapeColor="black";
  c4.shapeColor="black";

  w1.shapeColor="black"; 
  w2.shapeColor="black";
  w3.shapeColor="black"; 
  w4.shapeColor="black";
  w5.shapeColor="black";
  w6.shapeColor="black";
  wall.shapeColor="black";
  wall2.shapeColor="black";
  wall3.shapeColor="black";
  wall4.shapeColor="black";

  testwall1.shapeColor="white";
  testwall2.shapeColor="white";
  testwall3.shapeColor="white";
  testwall4.shapeColor="white";

  d1.shapeColor="red";
  d3.shapeColor="green";

  if(keyWentDown("space")){
  c1.velocityX=speed;
  c2.velocityX=speed;
  c3.velocityX=speed;
  c4.velocityX=speed; 

  }

  c1.collide(testwall1);
  c2.collide(testwall2);
  c3.collide(testwall3);
  c4.collide(testwall4);

  c1.collide(wall);
  c2.collide(wall);
  c3.collide(wall);
  c4.collide(wall);

  if(c1.collide(testwall1)){
    c1.velocityX=speed - speed1;
  }
  if(c2.collide(testwall2)){
    c2.velocityX=speed1 - speed2;
  }
  if(c3.collide(testwall3)){
    c3.velocityX=speed2 - speed3;
  }
  if(c4.collide(testwall4)){
    c4.velocityX=speed3 - speed1;
  }

  if(c1.collide(wall)){
    c1.velocityX=0;
  }
  if(c2.collide(wall)){
    c2.velocityX=0;
  }
  if(c3.collide(wall)){
    c3.velocityX=0;
  }
  if(c4.collide(wall)){
    c4.velocityX=0;
  }

if(testwall1.x - c1.x < c1.width + wall.width){
  
  damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

  if(damage < 10){
    testwall1.shapeColor=color(255,0,0);
  }
  
  if(damage > 10){
    testwall1.shapeColor=color(0,255,0);
  }
}

if(testwall2.x - c2.x < c2.width + wall.width){
  
  damage1 = 0.5 * weight1 * speed1 * speed1 / (thickness1 * thickness1 * thickness1);

  if(damage1 < 10){
    testwall2.shapeColor=color(255,0,0);
  }
  
  if(damage1 > 10){
    testwall2.shapeColor=color(0,255,0);
  }
}

if(testwall3.x - c3.x < c3.width + wall.width){
  
  damage2 = 0.5 * weight2 * speed2 * speed2 / (thickness2 * thickness2 * thickness2);

  if(damage2 < 10){
    testwall3.shapeColor=color(255,0,0);
  }
  
  if(damage2 > 10){
    testwall3.shapeColor=color(0,255,0);
  }
}

if(testwall4.x - c4.x < c4.width + wall.width){
  
  damage3 = 0.5 * weight3 * speed3 * speed3 / (thickness3 * thickness3 * thickness3);

  if(damage3 < 10){
    testwall4.shapeColor=color(255,0,0);
  }
 
  if(damage3 > 10){
    testwall4.shapeColor=color(0,255,0);
  }
}

  drawSprites();

  textStyle("BOLD");
  textFont("Georgia");
  textSize(30);
  fill("black");
  text("WALL FAIL",160,60);
  text("WALL PASS",870,60);
  textSize(35);
  text("DAMAGE TEST",420,50);
  textSize(15);
  text("CLICK SPACE",500,70);
  
}