class Card{
    constructor (name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power = 0, res = 0) {
        super(name, cost);
        this.power = power;
        this.res = res;
        
    }
    attack(target){
        if (target instanceof Unit){
            target.res -= this.power;
        } else {
            throw new Error ("Target must be a unit!");
        }
    }
}

class Effect extends Card {
    constructor (name, cost, text, stats, magnitude) {
        super(name, cost);
        this.text = text;
        this.stats = stats;
        this.magnitude = magnitude;

    }
    play(target){
        if (target instanceof Unit){
            if (this.stats == "resilience"){
                // console.log('this.stats == "resilience"');
                // console.log('target.res ', target.res);
                // console.log('this.magnitude: ', this.magnitude);
                target.res += this.magnitude;
            } 
            else if (this.stats == "power"){
                target.power += this.magnitude;
            } 
        } else {
            throw new Error ("Target must be a unit!");
        }
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

const effect1 = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3 )
const effect2 = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
const effect3 = new Effect("Pair Programming", 3, "increase target's power by 2","power", 2);

// console.log("blackBeltNinja:", blackBeltNinja);
// console.log("redBeltNinja:", redBeltNinja);
// 1	Player 1 summons "Red Belt Ninja"

// 1	Player 1 plays "Hard Algorithm" on "Red Belt Ninja"
// console.log('-------------------------------------');
// console.log('---------Player 1 plays "Hard Algorithm" on "Red Belt Ninja"');
effect1.play(redBeltNinja);
// console.log("blackBeltNinja:", blackBeltNinja);
// console.log("redBeltNinja:", redBeltNinja);

// 2	Player 2 summons "Black Belt Ninja"

// 2	Player 2 plays "Unhandled Promise Rejection" on "Red Belt Ninja"
// console.log('-------------------------------------');
// console.log('----------Player 2 plays "Unhandled Promise Rejection" on "Red Belt Ninja"');
effect2.play(redBeltNinja);
// console.log("blackBeltNinja:", blackBeltNinja);
// console.log("redBeltNinja:", redBeltNinja);

// 3	Player 1 plays "Pair Programming" on "Red Belt Ninja"
// console.log('-------------------------------------');
// console.log('----------Player 1 plays "Pair Programming" on "Red Belt Ninja');
effect3.play(redBeltNinja);
// console.log("blackBeltNinja:", blackBeltNinja);
// console.log("redBeltNinja:", redBeltNinja);

// 3	Player 1 has "Red Belt Ninja" attack "Black Belt Ninja"
// console.log('-------------------------------------');
// console.log('----------Player 1 has "Red Belt Ninja" attack "Black Belt Ninja"');
redBeltNinja.attack(blackBeltNinja);
// console.log("blackBeltNinja:", blackBeltNinja);
// console.log("redBeltNinja:", redBeltNinja);





