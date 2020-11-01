function setup(){
    createCanvas(1000,600);

}

function draw(){
    background(0);
    fill(255)
    textSize(20);
   
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        
        text("This is a Mobile",400,300);
    }else{

        text("This is a PC",400,300);
    }
}

