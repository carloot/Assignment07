var mic;
var myImage1;
var myImage2;
var myImage3;
var myImage4;
var myImage5;
var myImage6;
var myImage0;
function preload() {
    
    myImage1 =  loadImage('./assets/vetro1.png');
    myImage2 =  loadImage('./assets/vetro2.png');
    myImage3 =  loadImage('./assets/vetro3.png');
    myImage4 =  loadImage('./assets/vetro4.png');
    myImage5 =  loadImage('./assets/vetro5.png');
    myImage6 =  loadImage('./assets/vetro6.png');
    myImage5 =  loadImage('./assets/vetro0.png');
}




function setup() {
  createCanvas (500,500);

    mic = new p5.AudioIn();
    
    mic.start();
     
}




function draw() {

    background (210,220,233);
    
    var vol = mic.getLevel();
    
    

    if (vol >= 0.13) { 
 image(myImage1,0,0,500,500);
} 
    
    if (vol >= 0.17) { 
 image(myImage2,0,0,500,500);
    }
    
    if (vol >= 0.20) { 
 image(myImage3,0,0,500,500);
}
    
    if (vol >= 0.23) { 
 image(myImage4,0,0,500,500);
}

    if (vol >= 0.26) { 
 image(myImage5,0,0,500,500);
}

       if (vol >= 0.30) { 
 image(myImage6,0,0,500,500);
}

       if (vol >= 0.35) { 
 image(myImage0,0,0,500,500);
}
    
}

