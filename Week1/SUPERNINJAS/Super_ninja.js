const Ninja = require('./Ninjas_P.js')

class Sensei extends Ninja{
    constructor(name, wisdom){
        super(name, 200, 10, 10)
        this.wisdom = 10
    }

    showStats() {
        console.log(` name: ${this.name},\n health: ${this.health},\n speed: ${this.speed},\n strength: ${this.strength}, \n wisdom: ${this.wisdom} `)
        return this;
    }

    speakWisdom() {
        super.drinkSake();
    }

}

const Ricky = new Sensei("Ricky Yin");
Ricky.speakWisdom()
Ricky.showStats()