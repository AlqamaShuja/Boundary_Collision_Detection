
window.onload = myInit();

function myInit(){
    myDisplay();
};

function myDisplay(){

    var cvs = document.getElementById("mycanvas");
    var ctx = cvs.getContext('2d');

    var rect = {
        x: 10,
        y: 10,
        width: 200,
        height: 100
    };

    const path = new Path2D();
    path.rect(rect.x,rect.y,rect.width,rect.height);
    path.rect(25,72, 32, 32);
    path.closePath();

    ctx.fillStyle = "red";
    ctx.fill(path);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#000000";
    ctx.stroke(path);

    cvs.addEventListener('click', function(event){
        var mousePos = getMousePos(cvs, event);
        if(isInside(mousePos, rect)){
            alert("Clicked Inside of the rectangle");
        }
        else{
            alert("Clicked outside of the rectangle");
        }
    });
};

function isInside(pos, rect){
    return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y;
}

function getMousePos(canvas, event){
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
};


