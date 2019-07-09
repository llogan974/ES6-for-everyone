  const details = ['Wes Bos', 123, 'wesbos.com'];

// When you pull from an object, you use curly braces; arrays, square brackets


  // Use square brackets to destructure an array, not curly braces.
  // Values of name, id, and website values are created here
  const [name, id, website] = details;
  // console.log(name, id, website);

// If you have a comma separated list as a string
  const data = 'Basketball,Sports,90210,23,wes,bos,cool';
  // Destructure it AS AN ARRAY. data.split will turn it into an array
  const [itemName, category, sku, inventory] = data.split(',');
//   console.log(itemName, category, sku, inventory);

// What if there are extra variables without titles?
// The list below has captain, and assistant, and all other items are 'players'
  const team = ['Wes', 'Harry', 'Sarah', 'Keegan', 'Riker'];

// players are turned into an array
  const [captain, assistant, ...players] = team;

//   You can also target the items from this array
  console.log(captain);
