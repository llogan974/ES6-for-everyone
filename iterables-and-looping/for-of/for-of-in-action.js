const cuts = ['Chuck', 'Brisket', 'Shank', 'Short Rib'];

// cuts.entries is the generator

// For of is great for everything but objects
for (const [i, cut] of cuts.entries()){
    console.log(`${cut} is the ${i}`);
}