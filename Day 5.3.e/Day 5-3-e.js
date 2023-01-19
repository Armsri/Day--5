//initialising array 

let array=["Mom", "123", "radar", "empty", "3553", "1671", "leVEl"];

//arrow function
let palindrome=(array)=>{
    let palinArray=[];
    for(let i in array){
        //logic to check palindrome by ignoring cases
        if(array[i].toLowerCase() === array[i].toLowerCase().split("").reverse().join("")){
        palinArray.push(array[i]);
        }
    }
    return palinArray;
}

console.log("Arrow function--> " + palindrome(array));  //output: Arrow function--> Mom,radar,3553,leVEl