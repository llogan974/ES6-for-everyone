let body = document.querySelector('body');


/*
Create a list of terms

Create categories for terms (an object?)


Create links
*/

// The terms class.
class jsTerms {
    constructor(category, term, definition, problem, link){
        this.category = category;
        this.term = term;
        this.definition = definition;
        this.link = link;
        this.problem = problem;
    }
    displayInfo() { body.innerHTML +=`
    <div class="card">
        <h2 class="category">Category: ${this.category}</h2>
        <p class="term"> Term: ${this.term} </p>
        <p class="definition">Definition: ${this.definition}</p>
        <p class="problem">Problem: ${this.problem}</p>
        <p class="link>Link: ${this.link} </p>
      </div>  `;

    }
}

// Arrays
const es6Array = new jsTerms('arrays', 'array.some()', 'Array.some will check the data in an array to see if SOME or EVERY item matches what you are looking for in the array', 'check through an array if some items match a criteria','link' );
es6Array.displayInfo();

const es6ArrayFilter = new jsTerms('arrays', 'array.filter()', 'Array.filter will go through and return all items in an array that fit a certain criteria', 'Which items in an array match this criteria?', 'link' );
es6ArrayFilter.displayInfo();

const es6ArraySome = new jsTerms('arrays', 'array.some()', 'Array.some will go through array and return a boolean', 'Do SOME items in an array match criteria?', 'link' );
es6ArraySome.displayInfo();

const es6ArrayEvery = new jsTerms('arrays', 'array.every()', 'Array.every will go through array and return a boolean if ALL items match a criteria', 'Do all items in this array match the criteria?', 'link' );
es6ArrayEvery.displayInfo();

const es6ArrayFrom = new jsTerms('arrays', 'array.from()', 'Array.from will create an array', 'how can I create an array from nodes?', 'link');
es6ArrayFrom.displayInfo();

const es6ArrayOf = new jsTerms ('arrays', 'array.of()', 'Array.of() will create an ARGUMENT from all items you pass into it. Arguments are really objects that act line an array, and can be created from nodes', 'how can I create an array from nodes in the DOm?','link');
es6ArrayOf.displayInfo();



const es6AsynAwait = new jsTerms ('Async-await', 'new Promise(resolve, reject)', 'A prmise simply waits on something else before it executes. It will use resolve for when the promise is successful, and reject when the promise fails', 'How can I catch an error? What is a promise?', 'link' );
es6AsynAwait.displayInfo();

const es6TryCatch = new jsTerms ('Async-await', 'try{}, catch (err)', 'This is a function that uses ASYNC and will try to execute, and CATCH if there is an error', 'How can I test my promise, and use it even if it fails?', 'link');
es6TryCatch.displayInfo();

const es6Then = new jsTerms ('Async-await', '.then()', '.then(res=>{} is used to string together functions used with a promise', 'How can I compile and configure all of the JSON data in a promise?', 'link');
es6Then.displayInfo();

const es6Fetch = new jsTerms ('Async-await', 'fetch(urlstring)', 'fetch(url) will return a promise. From this promise, you can map over the data', 'How can I get data from an API?', 'link');
es6Fetch.displayInfo();

const es6PromiseAll = new jsTerms('Async-await', 'Promise.all()', 'this will wait until all promises are returned before executing', 'How can I wait until all info is returned from the API before running the function?What if I want to fire off several things at the same tinme?', 'link' );
es6PromiseAll.displayInfo();

const es6Await = new jsTerms('Async-await', 'await Promise', 'wait until promise resolves before executing; MUST be used with ASYNC', 'How do I use fetch? What do I do after calling the data?', 'link');
es6Await.displayInfo();

const es6Destructure = new jsTerms('destructuring', 'const { first, last, twitter } = person', 'destructuring allows you to extract data from arrays, objects, dates, and sets into our own variable. For example, if you have a variable with several properties, and you need to create a variable from something inside the object or variable', 'What if I want to re-order the data from an API? What if I only want certain info from the object?', 'link');
es6Destructure.displayInfo();

const es6DestructureDefault = new jsTerms('destructuring', 'const settings = {width: 300, color: black}', 'default settings can be applied to destrutured data', 'what if not all items have a value?', 'link');
es6DestructureDefault.displayInfo();