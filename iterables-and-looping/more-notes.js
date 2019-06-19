// This is an array of objects

// This document uses the following items to review sort,filter, map, and reduce
// Youtube video resource is https://www.youtube.com/watch?v=rRgD1yVwIvE
// Additional helpful page was: https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
// This page was practiced using console.log and the commande node more-notes.js

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
  { name: 'Company two', category: 'Retail', start: 1989, end: 2006 },
  { name: 'Company three', category: 'Auto', start: 1992, end: 2001 },
  { name: 'Company four', category: 'Technology', start: 1979, end: 1994 },
  { name: 'Company five', category: 'Finance', start: 1994, end: 1999 },
  { name: 'Company six', category: 'Auto', start: 1992, end: 2007 },
  { name: 'Company seven', category: 'Technology', start: 1984, end: 2003 },
  { name: 'Company eigth', category: 'Retail', start: 1998, end: 2010 },
  { name: 'Company nine', category: 'Finance', start: 1990, end: 2012 },
];

const ages = [34, 45, 39, 12, 11, 25, 21, 15, 35, 26, 85];

// foreach wont return anything, but does loop through
// Callback functions i need to understand
// This function takes in 3 params: an iterator, an index, and the array;
// companies.forEach(function(company, index) {
//   console.log(company, index);
// });

const canDrink = ages.filter(age => age > 20);

// console.log(canDrink);

// Filter retail categories, same array

// 80s companies
// const retailCompanies = companies.filter(
//   company => company.start > 1980 && company.start < 1990
// );

// Companies more than 10 years
// const retailCompanies = companies.filter(
//   company => company.end - company.start > 10
// );

// console.log(retailCompanies);

// map can create new arrays (or anything)

// make a new array of just company names
// Even though "company" is being created here, it can interact with
// the values of the object above through company.name or company.start
// const companyNames = companies.map(function(company) {
//   // returns an object
//   return company.name;
// });

const testMap = companies.map(
  // Pass in the company, AND the index
  (company, index) =>
    // returns an object
    [index + 1, company.end - company.start]
);
console.table(testMap);

// Find square of ages

// take the "ages" object, and for each "age", apply the math object, and
// store in the new const
// const agesSquare = ages.map(
//   (age, index) => `index: ${index} age squared: ${Math.pow(age, 2)}`
// );
// console.log(agesSquare);

// Sort companies by start year

// pass in company a and b, both objects.
// if object a.start > b.start, give 1; else, give -1, and it will be sorted
// const companiesByStartYear = companies.sort((a, b) =>
//   a.start > b.start ? 1 : -1
// );

// console.log(companiesByStartYear);

// reduce
// add all ages together
// const ageSum = ages.reduce((total, age) => total + age, 1);

// console.log(ageSum);

// // sort by company age
// const companyAge = companies.sort((a, b) =>
//   a.end - a.start > b.end - b.start ? 1 : -1
// );

// console.table(companyAge);
