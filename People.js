class People{
    constructor(){
        this.spt1 = createSprite(1400,350,20,20);
        this.spt2 = createSprite(1400,500,20,20);
        this.spt3 = createSprite(1500,300,20,20);
        this.spt4 = createSprite(1500,520,20,20);
        this.spt5 = createSprite(1350,450,20,20);
        this.spt1.addAnimation("people1",peopleAnimtion1);
        this.spt2.addAnimation("people2",peopleAnimtion2);
        this.spt3.addAnimation("people3",peopleAnimtion3);
        this.spt4.addAnimation("people4",peopleAnimtion4);
        this.spt5.addAnimation("people5",peopleAnimtion5);
        this.spt1.scale = 0.2;
        this.spt2.scale = 0.2;
        this.spt3.scale = 0.2;
        this.spt4.scale = 0.2;
        this.spt5.scale = 0.2;


        

    }
}