var dog, happyDog, database, foodS, foodStock

function preload() {
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(100, 200);
  happyDog = createSprite(100, 200);
  //dog.addImage(dog);
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", readfoodStock);
}


function draw() {
  background(46, 139, 87);
  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    //dog.addImage(happyDog);
  }
  drawSprites();
}



function readfoodStock(data) {

  foodS = data.val();
}

function writeStock(x) {
  if (x <= 0) {
    x = 0
  } else {
    x = x - 1;
  }


  database.ref('/').update({
    Food: x
  })

}




