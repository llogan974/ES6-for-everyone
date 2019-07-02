const person = {
    first: 'Wes',
    last: 'Bos',
    country: 'Canada',
    city: 'Hamilton',
    twitter: '@wesbos'
  };


//   Destructuring allows us to extract data from arrays, objects, maps, and sets into their own variables. You can extract multiple at the same time.

/*
From above, what if you want a first name variable,
and a last name vsariable?
*/


// Take the properties from the object above, and put them into two variables.
const { first, last } = person;

// console.log(first);


const runs = {
    id: 738430,
    type: 'run',
    splits: {
        split1: {
            pace: 8.43,
            time: 1282,
            speed: 6.7,
        },
        split2: {
            pace: 6.87,
            time: 1453,
            speed: 7.4,
        }
    }
}

// Pull out pace:
console.log(runs.splits);
