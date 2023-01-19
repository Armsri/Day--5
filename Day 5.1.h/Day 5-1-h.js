let array = [ 2, -1, 10, 11, 7, -19];
let n = array.length;
let k = 2; //No. of rotations
k = k % n;
let i, j;
 
let rotateArray=function(array){
let arr=[...array];
// Reverse last k numbers
for (i = n - k, j = n - 1; i < j; i++, j--) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
 
// Reverse the first n-k terms
for (i = 0, j = n - k - 1; i < j; i++, j--) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
// Reverse the entire array
for (i = 0, j = n - 1; i < j; i++, j--) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


return arr;
}
console.log("Anonymous Function--> " + rotateArray(array)); //output:Anonymous Function--> 7,-19,2,-1,10,11

//IIFE Function
(function(array){
let arr=[...array];
    // Reverse last k numbers
for (i = n - k, j = n - 1; i < j; i++, j--) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
 
// Reverse the first n-k terms
for (i = 0, j = n - k - 1; i < j; i++, j--) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
// Reverse the entire array
for (i = 0, j = n - 1; i < j; i++, j--) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log("IIFE Function--> " + arr); //output:IIFE Function--> 7,-19,2,-1,10,11


}(array))