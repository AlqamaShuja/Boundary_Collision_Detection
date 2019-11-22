
var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');

var animate = true;
var animateID;
var startTime;


window.onkeydown = function(){
    animate = !animate;
    if(animate) window.requestAnimationFrame(gameLoop)
    else cancelAnimationFrame(animateID);
}

window.onclick = click;
function click(e){
    animate = !animate;
    if(animate) window.requestAnimationFrame(gameLoop)
    else cancelAnimationFrame(animateID);
}


var cultus = new Car(20,10);

window.requestAnimationFrame(gameLoop);


function update(){
    cultus.advancePosition(0.91, 0.4);
}

function render(){
    ctx.beginPath();
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    clearCanvas(canvas);
    ctx.drawImage(cultus.img, cultus.x, cultus.y);
    ctx.rect(cultus.x, cultus.y, cultus.img.width, cultus.img.height);
    ctx.strokeStyle= 'black';
    ctx.stroke();
    ctx.closePath();

    // if(cultus.x > 800 || cultus.y > 500){
    //     console.log("the value of x is ",cultus.x);
    //     console.log("the value of y is ",cultus.y);
    //     ctx.translate(-1, -1);
    // }

    // if(cultus.x > 1000 || cultus.y > 900){
    //     console.log("the value of x is ",cultus.x);
    //     console.log("the value of y is ",cultus.y);
    //     ctx.translate(1, 1);
    // }

    // if(cultus.x > 1400 || cultus.y > 1000){
    //     console.log("the value of x is ",cultus.x);
    //     console.log("the value of y is ",cultus.y);
    //     ctx.translate(1, -5);
    // }
    
    
    //** Last code but not running
    // var A = canvas.width/cultus.width;
    // var B = canvas.height/cultus.height;
    // var C = -cultus.img.width;
    // var D = (canvas.height-cultus.img.height)-B+cultus.y;

    if(cultus.x > canvas.width-cultus.img.width && cultus.x < 660){
        ctx.translate(-1, -1);
        // cultus.x = A*cultus.x + C;
        console.log("Cultus.X = ",cultus.x);
        console.log("Cultus ...... y = ",cultus.y);
        console.log("canvas.height - cultus.img.height = ",canvas.height - cultus.img.height);

    }
    else if(cultus.y < canvas.height - cultus.img.height){
        ctx.translate(0.5,0.5);
        // cultus.y = B*cultus.y + D;
        console.log("Cultus.Y = ",cultus.y);
    }
    

    // if(cultus.y > 0 && cultus.y > 315){
    //     ctx.translate(1, 0);
    //    // cultus.y = B*cultus.y+D;
    //     console.log("Cultus.y = ", cultus.y)
    // }
    

}

function clearCanvas(cvs){
    const ctx = cvs.getContext('2d');
    ctx.save();
    ctx.globalCompositeOperation = 'copy';
    ctx.strokeStyle = 'transparent';
    ctx.beginPath();
    ctx.lineTo(0, 0);
    ctx.stroke();
    ctx.restore();
}

function gameLoop(){
    if(animate){
        let elm = document.querySelector('#animated');
        animateID = window.requestAnimationFrame(gameLoop);
        elm.style.left = ((Date.now() - startTime) / 4 % 600) + "px";
    }
    
    render();
    update();
}

function start(){
    animate = true;
    startTime = Date.now();
    console.log("start time = ", startTime);
    animateID = window.requestAnimationFrame(gameLoop);
}

function stop(){
    if(animateID){
        window.cancelAnimationFrame(animateID);
    }
    animate = false;
}