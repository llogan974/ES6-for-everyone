// Extract data from arrays and objects, pick and choose the values we want.

// Part 1: destructuring and objects

let person = {
    name: "Pookie",
    age: 34,
    location: "Greensboro"
}

person.age;
person["age"];

// "age" is the key; personAge is the new variable; "person" is the object we are working with.

// So, we use the key, and create a "value"
let { age, location: currentLocation } = person;

// console.log(age, currentLocation);

let car = {
    name: "Acura",
    year: 2011,
    owners: ["taylor", "Luke"]
}

// let {name, owners: } = car;

// console.log(name, ...owners);


let ages = [43, 34, 34, 27, 47, 21, 28];

let [first, ...second] = ages;
console.log(first, second);