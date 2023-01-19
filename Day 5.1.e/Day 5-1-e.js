//initialising array 

let array=["Mom", "123", "radar", "empty", "3553", "1671", "leVEl"];

//anonymous function
let palindrome=function(array){
    let palinArray=[];
    for(let i in array){
        //logic to check palindrome by ignoring cases
        if(array[i].toLowerCase() === array[i].toLowerCase().split("").reverse().join("")){
        palinArray.push(array[i]);
        }
    }
    return palinArray;
}

console.log("Anonymous function--> " + palindrome(array));  //output: Anonymous function--> Mom,radar,3553,leVEl

(function(array){
    let palinArray=[];
    for(let i in array){
        //logic to check palindrome by ignoring cases
        if(array[i].toLowerCase() === array[i].toLowerCase().split("").reverse().join("")){
        palinArray.push(array[i]);
        }
    }
    console.log("IIFE Function--> " + palinArray); //output: IIFE Function--> Mom,radar,3553,leVEl
})(array)