class Card {
    constructor(name, cost) {
        this.name = name;
        this. cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name,cost)
        this.power = power,
        this.res = res
    }
    attack (target) {
        this.res -= this.power
        //reduces target res by power
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name,cost,)
        this.text = text,
        this.stat = stat,
        this.magnitude = magnitude
    }

}

const Red_Belt_Ninja = new Unit("Red Belt Ninja", 3, 3, 4);
const Black_Belt_Ninja = new Unit("Black Belt Ninja", 4, 5, 4);

const Hard_Algorithm = new Effect("Hard Algorithim", 2, "increase target's resilience by 3", resilience, +4)
const Unhandled_Promise_Rejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", resilience, -2)
const Pair_Programming	 = new Effect("Pair Programming	", 3, "increase target's power by 2", power, +2)

Black_Belt_Ninja.Hard_Algorithm







