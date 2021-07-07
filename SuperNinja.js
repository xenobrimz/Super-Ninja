class Ninja {
    constructor(name, health,){
        this.name = name;
        this.health = health;
        this.strength = 3;
        this.speed = 3;
    }

    sayName(){
        console.log('my name is ' + this.name + "!")
    }

    showStats(){

        console.log("------------------------------------" + "\n" + "              -[STATS]-" + "\n" + "Name: " + this.name + "\n" + "Health: " + this.health + "\n" + "Strength: " + this.strength + "\n" + "Speed: "+ this.speed + "\n" +"------------------------------------" )
    }

    drinkSake(){
        this.health += 10
        console.log(this.name+' drinks the Sake. | '+ "Health: "+(this.health - 10)+ ' => ' + this.health)
    }
    
}

class Sensei extends Ninja {
    constructor(name){
        super(name, 200)
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months. -" + this.name)
    }

    drinkSake(){
        this.health += 10
        console.log(this.name+' drinks the Sake. | '+ "Health: "+(this.health - 10)+ ' => ' + this.health)
    }

    showStats(){

        console.log("------------------------------------" + "\n" + "              -[STATS]-" + "\n" + "Name: " + this.name + "\n" + "Health: " + this.health + "\n" + "Strength: " + this.strength + "\n" + "Speed: "+ this.speed + "\n" +"------------------------------------" )
    }
}

const sensei1 = new Sensei('Ken Hyabusa')
sensei1.speakWisdom();
sensei1.drinkSake();
sensei1.showStats();