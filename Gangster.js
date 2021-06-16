class Gangster{
    constructor(x){
        this.spt = createSprite(1215,x,20,20);
        this.spt.addAnimation("enemy",gangsterAnimation1);
        this.spt.scale = 0.5;
        this.spt.velocityY = 3;
        
        

    }
}