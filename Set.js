

  /*  
  intilizing the Set set contain only primitive data types and or add duplicate value;


   intilizig the Set 
   variable_types Set_name  = new Set();

   adding the value in set use     set_name.add(key);


  
  
  */



const set1  = new Set();

set1.add(1);
set1.add(2);
set1.add(3);
set1.add(1);
set1.add(2);
set1.add(3);

console.log(set1);
//output --->>> Set(3) { 1, 2, 3 } set not conataing the duplicate values;

// how to check the value of set key in value in set_name.has(key);

var val1 = set1.has(1); 
var val2 = set1.has(2);
var val3 = set1.has(3);
var val4 = set1.has(4);
var val5 = set1.has(5);
var val6 = set1.has(6);


/* 
value in set available or not
1:true;
2:true;
3:true;
4:false;
5:false;
6:false;

*/


console.log(val1);   // true
console.log(val2);   // true 
console.log(val3);   // true
console.log(val4);   //false 
console.log(val5);   //false
console.log(val6);   // false

console.log(set1);

/**
 * how to delele the value of set 
 * set_name.dalet();
 * before deleting the key of set
 * output --->>Set(3) { 1, 2, 3 }
 */




set1.delete(1);
set1.delete(2);

console.log(set1);

/**
 * after deleting the val of set
 * Set(1) { 3 }
 */


/*** Itrating on the sets;
 * for (const item of mySet1) {
  console.log(item);
}
 * 
 */


for(const item of set1){
    console.log(item);
}

set1.add(2);
set1.add(3);
set1.add(4);
set1.add(5);
set1.add(6);
set1.add(7);
set1.add(8);
set1.add(9);

for(const item of set1){
    console.log("items in set: "+item);
 
}

console.log("size of set :"+set1.size);


for(const item of set1.keys()){
    console.log("items in set: "+item);
 
}

for(const item of set1.values()){
    console.log("items in set: "+item);
 
}


for (const [key, value] of set1.entries()) {
    console.log(key);
  }




//// Removing  Duolicate element from the set 

const array  = [1,2,4,3,6,6,5,7,4,2,1,0,8,7];



const set2 = new Set();
// set2.add(array);

// console.log(set2);


console.log(set2);

for(var i=0; i<array.length; i++){
    set2.add(array[i]);
}
console.log(set2); // output-->> Set(9) { 1, 2, 4, 3, 6, 5, 7, 0, 8 }

//another way to add the values of array in the set 
const array1 = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];
console.log([...new Set(array1)]);



// Relation to string

const str1 = "Vikashaaaaaa";

const set3 = new Set(str1);

set3.add(str1);
console.log(set3);
/** 
 * if you pass the string as parameter in set then you got the non duplicate characters as a output
 */



