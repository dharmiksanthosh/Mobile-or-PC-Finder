var dev,x = 500,y = 300,up,down,right,left;

function setup(){
    createCanvas(1000,600);

    
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

        up.position(845,420);
        down.position(845,520);
        left.position(795,470);
        right.position(895,470);

        fill(240,240,240)
        noStroke();
        rectMode(CENTER);
        rect(870,490,50,60)

        up.size(50,50);
        down.size(50,50);
        right.size(50,50);
        left.size(50,50);

        up.mousePressed(() => {
            
            y -= 5;
        })
        down.mousePressed(() => {
            
            y += 5;
        })
        right.mousePressed(() => {
            
            x += 5;
        })
        left.mousePressed(() => {
            
            x -= 5;
        })

    }

    fill("red");
    rectMode(CENTER);
    rect(x,y,50,50);
}

