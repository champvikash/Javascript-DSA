const arr = ["sbi","pnb","indusind","rbi","canara"];

for(var i=0; i<arr.length; i++){
    console.log(arr[i]);
}


console.log("this is array");
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);



arr.push("x");
arr.push("y");

console.log(arr[arr.length-1]);

console.log(arr.length);
arr.pop();
console.log(arr.length);

arr.push('a',1);
console.log(arr[2]);

// this is updated array .

for(var i=0; i<arr.length; i++){
    console.log(arr[i]);
}