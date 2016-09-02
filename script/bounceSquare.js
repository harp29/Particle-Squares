/**
 * Created by harpreetsingh on 2016-08-31.
 */
$(document).ready(function(){

    createCanvas();

});

function createCanvas() {
    var canvas = document.createElement('canvas'),
        context = canvas.getContext('2d'),
        body = $('body');

    canvas.width = 400;
    canvas.height = 400;

    var posX = 20,
        posY = canvas.height / 2,
        vX = 5,
        vY = -10,
        gravity = 1;

    document.body.appendChild(canvas);

    setInterval(function () {

        posX += vX;
        posY += vY;

        if (posY > 300) {
            vY *= -0.5;
            vX *= -0.5;
            posY = 300;
        }

        vY += gravity;

        context.fillStyle = 'black';
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = 'white';
        context.fillRect(posX, posY, 10, 10);


    }, 30);
};


