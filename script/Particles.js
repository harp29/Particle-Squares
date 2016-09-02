/**
 * Created by harpreetsingh on 2016-08-30.
 */
$(document).ready(function() {

    var canvas = document.createElement('canvas'),
        context = canvas.getContext('2d'),
        canvasWidth = canvas.width = 500,
        canvasHeight = canvas.height = 500,
        particles = {},
        particlesIndex = 0,
        particlesNum = 10,
        counter =0.1;

document.body.appendChild(canvas);

    function Particle(){
        this.posx = canvasWidth / 2;
        this.posy = canvasHeight / 4 + counter;
        this.vx = Math.random() * 10 - 5;
        console.log('random before: ' + this.vx);
        this.vy = Math.random() * 10 - 5;
        this.gravity = -1;
        particlesIndex++;
        particles[particlesIndex] = this;
        this.id = particlesIndex;
        this.life = 0;
        this.maxLife = Math.random() * 30 + 50,
        this.color = 'hsla('+parseInt(Math.random()*360,10)+',100%,20%,0.5)';
    };

    Particle.prototype.draw = function(){
        this.posx+= this.vx;
        this.posy+= this.vy;
        this.vy+= this.gravity;

        context.fillStyle = this.color;
        context.fillRect(this.posx,this.posy,Math.random() * 10 , Math.random() * 10);

        this.life++;
        if(this.life >= this.maxLife){
            delete particles[this.id];
        }

        if(Math.random() < 0.1){
            this.vx = Math.random() * 10 - 5; //0-1 * 10 - 5 =  0 10    5 -5
            this.vy = Math.random() * 10 - 5;
        }


    };


    setInterval(function(){
        context.globalCompositeOperation = 'source-over';
        context.fillStyle = 'rgba(0,0,0,0.3)';
        context.fillRect(0,0,canvasWidth,canvasHeight);

        for(var i=0; i<particlesNum; i++){
            new Particle();
        }

        context.globalCompositeOperation = 'lighter';
        for(var i in particles){

            particles[i].draw();
        }

        counter+=0.8;

    },30);


});

//add gravity to make the squares go down
//keep creating particles every 30ms
//place rgba on particles
//make particles move in random way via x and y axis if they are less than 0.1
//give particles longer life and make the particles fade/trail effect
//add random colors
//make colors get brighter as they overlap












/*Particle = {
 posx : canvas.width / 2,
 posy : canvas.height /2,
 vx : Math.random() * 10 - 5,
 vy : Math.random() * 10 - 5
 };*/


