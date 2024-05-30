function setup() {
    createCanvas(600, 600);
  background("White");
  }
  
  function draw() {
    
    stroke("blue");
    fill("red");
    
      if (mouseIsPressed)
      rect(mouseX, mouseY, 20, 35);
  }