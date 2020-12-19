//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogImage, happyDogImage;

function preload()
{
  //load images here
  dogImage = loadImage("dogImg.png");
happyDogImage = loadImage("dogImg1.png");
  
}

function setup() {
  createCanvas(500, 500);

  foodStock=database.ref("Food");
  foodStock.on("value",readStock);

  
  
  
}


function draw() {  
background(46,139,87);  
dog = createSprite(200,300,30,30);
dog.addImage(dogImage);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(haapyDogImage);

}


  drawSprites();
  //add styles here
  textSize(10);
  fill("red");
text("Food Stock", foodStock, 200,100);
}
function readStock(data){
  foodS= data.val();

}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}

