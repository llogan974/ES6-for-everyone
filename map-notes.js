// map can transform each item in an array into something else.


/*
map returns a new array with the same number of variables as the original array.
*/

const strings = ['1','2','3','4','5'];
console.log(strings);

const numbers = strings.map(string => parseInt(string, 10));
console.log(numbers);


const fruits = ['apple', 'pear', 'cherry'];

const capitalizedFruits = fruits.map(fruit => fruit.toUpperCase());

console.log(capitalizedFruits);

const prices = [5, 4.23, 6.4, 8.09, 3.20];

const priceToUSD = prices.map(price => '$' + price.toFixed(2));

console.log(priceToUSD);