function setup(){
    createCanvas(winWidth, 30);
                       
        gui = createGui();
        b = createButton("Button", 50, 50);
      }

      function draw(){
        background(200);
        drawGui();

        if(b.isPressed) {
          print(b.label + " is pressed.");
        }
      }
