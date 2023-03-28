/**
 * Function in javascript 
 * 
 * function function_name(){
 *     //procedure 
 * }
 */



function sqr(a) {
    return a * a;
}

console.log(sqr(2));




function adding(a) {
    return a + a;
}

console.log(adding(3));


function myFunc(theobject) {
    theobject.make = "Toyota";
}


const myCar = {
    make: "Honda",
    model: "acode",
    year: 1998
}

const x = myCar.make;
console.log(x);


myFunc(myCar);

const y = myCar.make;
console.log(y);

function myFunc1(thearr) {
    thearr[0] = 30;
}


const arr = [70];

console.log(arr);

myFunc1(arr);
console.log(arr);



const sqrure = function (number) {
    return number * number;
}

console.log(sqrure(5));




//Nested Function 

// function addsqr(a,b){
//     function add1(c,d){
//         return c+d;
//     }

//     return add1(a) + add1(b);
// }

// console.log(addsqr(2,4));


function addSquares(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}
const a = addSquares(2, 3); // returns 13
const b = addSquares(3, 4); // returns 25
const c = addSquares(4, 5); // returns 41

console.log(a);
console.log(b);
console.log(c);



//**Since the inner function forms a closure, you can call the outer function and specify arguments for both the outer and inner function: */


function outside(x) {
    function inside(y) {
      return x + y;
    }
    return inside;
  }
  const fnInside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
  const result = fnInside(5); // returns 8
  const result1 = outside(3)(5); // returns 8
  

console.log(fnInside);

console.log(result);

console.log(result1)




function A(x){
    function B(y){
        function C(z){
            return x+y+z;
        }
        C(3);
    } 
       B(2);
}
C(1);


console.log(A);
