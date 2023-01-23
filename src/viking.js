// Soldier
class Soldier {
    constructor (health, strength){
        this.health = health
        this.strength = strength
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength)
        this.name = name
    }

    receiveDamage(damage) {
        this.health -= damage

        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry(){
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {

    attack(){
        return this.strength
    }

    receiveDamage(damage){
        this.health -= damage

        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }

    }
}

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(Viking){
        this.vikingArmy.push(Viking)
    }

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }

    vikingAttack(){

        const indexRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length)

        let randomSaxon = this.saxonArmy[indexRandomSaxon]
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]

        let damage = randomSaxon.receiveDamage(randomViking.strength)

        if (randomSaxon.health <= 0){
            this.saxonArmy.splice(indexRandomSaxon, 1)
        }

        return damage
    }
    saxonAttack(){

        const indexRandomViking = Math.floor(Math.random() * this.vikingArmy.length)

        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let randomViking = this.vikingArmy[indexRandomViking]

        let damage = randomViking.receiveDamage(randomSaxon.strength)

        if (randomViking.health <= 0){
            this.vikingArmy.splice(indexRandomViking, 1)
        }

        return damage
    }

    showStatus(){
        /** if the Saxon array is empty, should return 
        * "Vikings have won the war of the century!"
        * if the Viking array is empty, should return 
        * "Saxons have fought for their lives and survived another day..."
        * if there are at least 1 Viking and 1 Saxon, should return 
        * "Vikings and Saxons are still in the thick of battle."
        */

        if(this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
            return "Vikings and Saxons are still in the thick of battle."
        } else if (this.vikingArmy.length == 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings have won the war of the century!"

        }
    }
}