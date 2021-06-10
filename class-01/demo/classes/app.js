'use strict';

class Animal { // pascal Notation

    constructor(name, breed, color) {
        this.name = name;
        this.breed = breed;
        this.color = color;
    }

    eating() {
        console.log(`${this.name} is eating`);
    }

    sleeping() {
        console.log(`${this.name} is sleeping`);
    }



}

// the cat class is taking the new properties
// the constructor in the cat class is passing this properties to the extended(inherited) Animal Class through the super keyword

class Cat extends Animal {

    constructor(name, breed, color, sound) {
        super(name, breed, color)
        this.sound = sound;
    }

    ruinFurniture() {
        console.log(`The cat is ruining the furniture!`);
    }
}

const cat = new Cat('mishmish', 'orange tabby', 'orange', 'meow')

console.log(cat);

cat.sleeping();
cat.eating();
cat.ruinFurniture();