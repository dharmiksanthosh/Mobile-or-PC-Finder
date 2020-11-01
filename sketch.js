var dev,x = 500,y = 300,up,down,right,left;

function setup(){
    createCanvas(1000,600);

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        
        dev = "mobile"
    }else{

        dev = "pc"
    }
}

function draw(){
    background(0);
    fill(255)
    textSize(20);
   
    if (dev==="pc") {
        
        if (keyIsDown(UP_ARROW)) {
            
            y -= 5;
        }
        if (keyIsDown(DOWN_ARROW)) {
            
            y += 5;
        }
        if (keyIsDown(LEFT_ARROW)) {
            
            x -= 5;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            
            x += 5;
        }

    }else{

        up = createButton("Up");
        down = createButton("Down");
        right = createButton("Right");
        left = createButton("Left");

        up.position(850,400);
        down.position(850,500);
        left.position(750,450);
        right.position(950,450);
    }

    fill("red");
    rectMode(CENTER);
    rect(x,y,50,50);
}

