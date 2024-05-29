const animalData = require('./animal-data.json');

class Animal {
    // object constructor
    constructor(name, species, color, hunger = 50) {
        this.name = name
        this.species = species
        this.color = color
        this.hunger = hunger
    }

    // greet method
    greet(greeting = 'Hi') {
        console.log(`${greeting}, my name is ${this.name} the ${this.species}`)
    }

    // feed method
    feed(food = 'food') {
        this.hunger -= 20
        console.log(`Yum, I love ${food}`)
    }
}

class Cat extends Animal {
    // object constructor
    constructor(name, color, hunger = 50) {
        super(name, 'cat', color, hunger)
        this.food = 'fish'
    }

    // overrite greet() method from Animal class
    greet() {
        super.greet('Meow')
    }

    // overrite feed() method from Animal class
    feed() {
        super.feed(this.food)
    }
}

class Dog extends Animal {
    // object constructor
    constructor(name, color, hunger = 50) {
        super(name, 'dog', color, hunger)
        this.food = 'kibble'
    }

    // overrite greet() method from Animal class
    greet() {
        super.greet('Woof')
    }

    // overrite feed() method from Animal class
    feed() {
        super.feed(this.food)
    }
}

class AnimalShelter {
    // object constructor
    constructor() {
        this.animals = []
    }

    // addAnimal method
    addAnimal(animal) {
        this.animals.push(animal)
    }

    // adopt method
    adopt(animal) {
        this.animals.splice(this.animals.indexOf(animal), 1)
    }

    // getAnimalsBySpecies method
    getAnimalsBySpecies(species) {
        return this.animals.filter((animal) => animal.species === species)
    }
}

const shelter = new AnimalShelter()

animalData.forEach((animal) => {
    let newAnimal

    switch (animal.species) {
        case 'cat':
            newAnimal = new Cat(animal.name, animal.color, animal.hunger)
            break
        case 'dog':
            newAnimal = new Dog(animal.name, animal.color, animal.hunger)
            break
        default:
            newAnimal = new Animal(animal.name, animal.species, animal.color, animal.hunger)
            break
    }
    shelter.addAnimal(newAnimal)
})

for (let animal of shelter.animals) {
    animal.greet()
    animal.feed()
}

const bandit = new Cat('Bandit', 'toasted marshmallow', 75)
console.log(bandit)