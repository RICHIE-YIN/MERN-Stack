class Ninja {
    constructor(name, health, speed, strength) {
        this.name = name;
        this. health = health;
        this.speed = 3
        this.strength = 3
    }
    
    sayName() {
        console.log(`${this.name}`)
        return this;
    }
    
    showStats() {
        console.log(` name: ${this.name},\n health: ${this.health},\n speed: ${this.speed},\n strength: ${this.strength} `)
        return this;
    }
    
    drinkSake() {
        this.health += 10
        return this;
    }
}

const Richie = new Ninja("Richie", 100)

Richie.showStats();
Richie.sayName();

module.exports = Ninja;