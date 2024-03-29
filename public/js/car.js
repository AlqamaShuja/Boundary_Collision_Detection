
class Car {
    constructor(x, y){
       // alert("Inside Constructor");
        this.x = x;
        this.y = y;
        const img = new Image();
        img.src = 'images/car.jpg';
        img.onload = () => {
            ctx.drawImage(img, 0, 0);
        }
        this.img = img;
    }

    lerp(start, end, amt){
        return (1-amt)*start+amt*end;
    }

}

Car.prototype.advancePosition = function(x, y){
    this.x = this.lerp(this.x, this.x+x, 1);
    this.y = this.lerp(this.x, this.y+y, 1);
}


