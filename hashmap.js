// creating new hashmap()

let firsthashmap = new Map();

let secondHashmap = new Map(
    [
        ['Vikash', 24],
        ['suraj', 26],
        ['deep', 25]
    ]
);


console.log(firsthashmap);
console.log(secondHashmap);

//HashMap size
console.log(firsthashmap.size);
console.log(secondHashmap.size)

//HashMap Key 

let hashmap = new Map([
    [1, "first"],
    [2, "second"],
    [3, "third"]
]);

console.log(hashmap.get(1));
console.log(hashmap.get(2));
console.log(hashmap.get(3));

//hashmap.has(<key>) mean you are checking boolean value in your existing hashmap if you pur the value inside the () you just cheking the value;
console.log(hashmap.has(1));
console.log(hashmap.has(2));
console.log(hashmap.has(3));
console.log(hashmap.has("first"));
console.log(hashmap.has("second"));
console.log(hashmap.has("third"));

//putting new havues in hashmap with the help of .set(<key> , <value>);

hashmap.set(4,"fourth");
//Now checking this value

console.log(hashmap.get(4));
console.log(hashmap.has(4));


console.log(hashmap);
// output -->> Map(4) { 1 => 'first', 2 => 'second', 3 => 'third', 4 => 'fourth' }   // you succesessflly add the the value in  the hashmap 

// delete the key,pair from hashmap hashmap.delete() pass the argument as mathch the value;
hashmap.delete(4);
console.log(hashmap);

//outpur ->>> Map(3) { 1 => 'first', 2 => 'second', 3 => 'third' }
 

// detete all the value of hashmap use .clear();

//before clearing the value of hashmap //outpur ->>> Map(3) { 1 => 'first', 2 => 'second', 3 => 'third' }


hashmap.clear();
// print the value of after clearing of the hashmap 

console.log(hashmap);



// clear all the value of hashmap we have now three hashmap name: (firsthashmap,secondHashmap,hashmap);
firsthashmap.clear();

secondHashmap.clear();

console.log(firsthashmap);
console.log(secondHashmap);
console.log(hashmap);

//output --->>> Map(0) {}
// Map(0) {}
// Map(0) {}






// console.log(secondHashmap.get(1));
// console.log(secondHashmap.get(2));




/*
hashmap.size() returns the # of elements in the hashmap
hashmap.get(<key>) returns the value of the element of the given key
hashmap.has(<key>) checks to see if the hashmap contains the key that is passed as an argument
hashmap.set(<key>, <value>) accepts 2 arguments and creates a new element to the hashmap
hashmap.delete(<key>) deletes the key/value pair that matches the key that is passed in as an argument
hashmap.clear() clears all elements from the hashmap
*/