//Create variables here
 var dog, happyDog, database, foodS, foodStock;



function preload()
{
  dogImag = loadImage("images/dogImag.png");
  happyDogImg = loadImage("images/dogImag1.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
 
 foodStock = database.ref('Food');
foodStock.on("value",readStock);





dog = createSprite(250,350,10,60);
 dog.addImage(dogImag);
 dog.scale(0.2);
}


function draw() {  
  background("green");
 
 if(foodS !== undefined){
   textSize(20);
   fill(255);
   text("Note: Press UP ARROW to feed the dog milk",50,50);
   text("Food Remaining:"+foodS,150,150);

  if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDogImg);

  }

  if(keyWentup(UP_ARROW)){
  dog.addImage(dogImag);

  }
if(foodS === 0){
  foodS = 20;
}

 drawSprites();
 

}



 
  //add styles here

}
function writeStock(x){



  if (x<=0) {
    x=0;
  }
  else{
    x=x-1;
    }

database.ref("/").update({
  Food:x
});




}

function readStock(data) {
  foodS = data.val();
}
