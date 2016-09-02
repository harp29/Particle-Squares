$(document).ready(function(){

    createCanvas();

});


function createCanvas(){

    var canvas = document.createElement('canvas'),
        context = canvas.getContext('2d'),
        canvasWidth = canvas.width = 500,
        canvasHeight = canvas.height = 500,
        posx = 10,
        posy = canvasWidth / 2,
        vx = 5,
        vy = -10,
        gravity = 1;

    document.body.appendChild(canvas);

    setInterval(function(){

        context.fillStyle = 'black';
        context.fillRect(0,0,canvasWidth,canvasHeight);

        posx+= vx;
        posy+= vy;

        if(posy > 300){
            posy = 300;
            vy*= -0.8;
            vx*= -0.5;
        }

        vy+= gravity;

        context.fillStyle = 'white';
        context.fillRect(posx,posy,10,10);

    }, 30);



};

