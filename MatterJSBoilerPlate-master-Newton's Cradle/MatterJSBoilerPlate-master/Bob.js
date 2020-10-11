class bob{
    constructor(x,y,diameter){
        var options={
            restitution:0.3,
            isStatic:true,
            friction:0.5,
            density:1.2,
        }

        this.body = Bodies.circle(x, y,60, options);
        this.diameter = diameter;
        
       World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        fill("purple");  
        circle(pos.x,pos.y,this.diameter);
       

    }

}