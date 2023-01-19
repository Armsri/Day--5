//initialising array
let num=[1,3,-2,-19,20,3,67.5,-2,10];

//anonymous function
let sum=function(num){
    let res=0;
    for(let i in num)
    res += num[i];

    return res;
}

console.log("anonymous function--> " + sum(num)); //output: anonymous function--> 81.5

//IIFE Function
(function(num){
    let res=0;
    for(let i in num)
    res += num[i];
    console.log("IIFE function--> " + res);  //output: IIFE function--> 81.5
})(num)