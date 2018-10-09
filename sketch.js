function preload(){
  // put preload code here

}

function setup() {
  // put setup code here
  createCanvas(600, 600);
  background(214, 109, 145);
  angleMode(DEGREES);
  frameRate(50);
}

function draw() {
  // put drawing code here


  for(x = 28; x < width - 25; x += 40){
    for(y = 28; y < height - 25; y += 40){
      fill(247, 252, 95);
      strokeWeight(2);
      stroke('#111111');
      rect(x, y, 22, 22);
    }
  }

  for(x = 39; x < width - 25; x += 80){
    for(y = 39; y < height - 25; y += 80){
      noStroke();
      ellipse(x, y, 8, 8);
      if(random()<0.5)
     {
        fill(255, 0, 182);
     } else {
        noFill();
     }
    }
  }

  for(x = 79; x < width - 25; x += 80){
    for(y = 79; y < height - 25; y += 80){
      noStroke();
      ellipse(x, y, 5, 5);
      if(random()<0.3)
     {
        fill(148, 0, 255);
     } else {
        noFill();
     }
    }
  }

  for(x = 70.5; x < width - 25; x += 80){
    for(y = 30.5; y < height - 25; y += 80){
      if(random()<0.5)
     {
        fill(255, 0, 0);
        rect(x, y, 17, 17);
     } else {
       fill(0, 55, 255);
       rect(x+5, y+5, 7, 7);
     }
    }
  }

  for(x = 30.5; x < width - 25; x += 80){
    for(y = 70.5; y < height - 25; y += 80){
      if(random()<0.5)
     {
        fill(121, 94, 255);
        rect(x, y, 17, 17);
     } else {
       fill(249, 141, 0);
       rect(x+5, y+5, 7, 7);
     }
    }
  }

  translate(height/2, width/2);
  rotate(frameCount);
  for(x = 25; x < width - 45; x += 40){
    for(y = 25; y < height - 45; y += 40){
      strokeWeight(2);
      stroke('#111111');
      if(random()<0.85)
     {
        fill(58, 183, 232);
     } else {
        fill(214, 109, 145);
     }
      rect(x, y, 28.5, 28.5);
    }
  }
}
