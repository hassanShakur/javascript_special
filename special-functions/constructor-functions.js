// Prefered to start with caps for special functions
// Main concept is the this and new keywords
// No return value

function Car(model, speed) {
  this.model = model;
  this.speed = speed;
  this.move = function () {
    console.log(`The ${this.model} moves at a speed of ${this.speed}kph`);
  };
}

mercedes = new Car('benz', 250);
mercedes.move();

// Prints the constructor function used to create the object
console.log(mercedes.constructor);

// Constructor can be used to initialize other objects
toyota = new mercedes.constructor('toyota34', 200);
toyota.move();

// Other constructors
array = [];
console.log(array.constructor);

object = {};
console.log(object.constructor);

function func() {}
console.log(func.constructor);
