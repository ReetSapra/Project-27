class Rope {
    constructor (bodya, bodyb, offsetX, offsetY){

        this.offsetX = offsetX
        this.offsetY = offsetY

        var options = {
            bodyA: bodya,
            bodyB: bodyb,
            //stiffness: 0.04,
            //length: 10,

            pointB: {x: this.offsetX, y: this.offsetY}
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }


    display(){
    
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
       // push();
        strokeWeight(1);
       // line (pointA.x, pointA.y, pointB.x, pointB.y);
        //pop(); 
        
        var Anchor1X = pointA.x
        var Anchor1Y = pointA.y

        var Anchor2X = pointB.x+this.offsetX
        var Anchor2Y = pointB.y+this.offsetY
        
        line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y)
    }
}