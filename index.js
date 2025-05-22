// Part 1
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: [
        "sword",
        "potion",
        "artifact"
    ],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            inventory: [
                "small hat",
                "sunglasses"
            ]
        }
    },

    logInventory() {
        for (let item of this.inventory) {
            console.log(item)
        }
    },

    roll(mod=0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod
        console.log(`${this.name} rolled a ${result}.`)
    }
}




// Part 2
class Character {
    constructor(name) {
        this.name = name
        this.health = 100
        this.inventory = []
    }

    roll(mod=0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod
        console.log(`${this.name} rolled a ${result}.`)
    }
}




// Part 3
class Adventurer extends Character {
    constructor(name, role, inventory=[], strength=1, dexterity=1, speed=1) {
        super(name)
        this.role = role
        this.inventory.push(["bedroll", "50 gold coins", ...inventory])
        this.strength = strength
        this.dexterity = dexterity
        this.speed = speed
        this.level = 1
    }

    scout() {
        console.log(`${this.name} is scouting ahead...`)
        super.roll()
    }

    sleep() {
        console.log(`${this.name} is sleeping...`)
        super.health = 100
        console.log(`${this.name} has been restored to full health.`)
    }

    levelUp() {
        this.strength++
        this.dexterity++
        this.speed++
        console.log(`Strength: ${this.strength}\nDexterity: ${this.dexterity}\nSpeed: ${this.speed}`)
    }
}


class Companion extends Character {
    constructor(name, type, inventory=["10 gold"]) {
        super(name)
        this.type = type
        this.inventory.push(inventory)
    }
}




const robin = new Adventurer("Robin", "Swordsman", ["sword", "potion", "artifact"])
robin.companion = new Companion("Leo", "Cat")
robin.companion.companion = new Companion("Frank", "Flea", ["small hat", "sunglasses"])


robin.roll()
robin.companion.roll()
robin.companion.companion.roll()

console.table([robin])