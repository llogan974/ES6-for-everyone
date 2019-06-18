for(let i = 0; i <= cuts.length; i++){
    console.log(cuts[i]);
}

for(const index in cuts ){
    console.log(index[cuts]);
}

  // You can destructure this immediately
  for (const [i, cut] of cuts.entries()) {
    console.log(`${cut} is the ${i + 1} item`);
  }

//   for...in will use the index

// Array.from will allow for you to MAP over the data

// This will give a name to each item in the array
// const [letter1, letter2, letter3] = letters;

// Array.find to match the protein string