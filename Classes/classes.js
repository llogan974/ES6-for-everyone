/* Take this function, and turn it into a class
    Two ways to make a class in ES6:

    Way #1) Class Declaration:
    class Dog {
    }

    Way #2) Class Expression -
    const Dog = class {
    }

     */
class Dog {
  //  The only thing that is required in a class is a constructor,
  // just like an object shorthand.
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  bark() {
    console.log(`Bark Bark! My name is ${this.name}`);
  }

  cuddle() {
    console.log(`I love you owner!`);
  }

  /*
      Because it is static, we can only call it on Dog directly.
      snickers.info wouldin't work,
      Dog.info would work
       */
  static info() {
    console.log('A dog is better than a cat');
  }

  // This is a getter and does not need () when called; it is not a function
  get description() {
    return `${this.name} is a ${this.breed} type of dog`;
  }

  // in console type
  set nicknames(value) {
    this.nick = value.trim();
  }

  get nicknames() {
    return this.nick.toUpperCase();
  }
}

/* We are creating a new instance of this OBJECT, and the items
passed in, Snickers and King Charles, are immediately pullled in the
CONSTRUCTOR method
*/
const snickers = new Dog('Snickers', 'King Charles');
const sunny = new Dog('Sunny', 'Golden Doodle');

// Set the nickname
snickers.nicknames = '        snicky       ';

// get the nickname
console.log(snickers.nicknames);

// Call the prototypes that were created
console.log(snickers.cuddle());
console.log(Dog.info());

// description is a getter, does not need () bc it is not a function
console.log(snickers.description);
