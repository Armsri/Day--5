
//initialising array
let array = [10, 41, -17, 22, 5, 6, 18, 43, 66, 77, 99, 62]

//anonymous function
let getOdd=function(array){
    //initialising an array to push odd elements
    let odd=[];
    //logic to check odd elements
    for(let i in array){
        if(array[i]%2 !== 0)
        odd.push(array[i]);
    }
    return odd;
}

//function call and print odd elements in an array in sorted order
console.log("Anonymous Function--> " + getOdd(array).sort());   //output: Anonymous Function--> -17,41,43,5,77,99

//IIFE Function
(function(array){
    //initialising an array to push odd elements
    let odd=[];
    //logic to check odd elements
    for(let i in array){
        if(array[i]%2 !== 0)
        odd.push(array[i]);
    }
    console.log("IIFE function--> " + odd.sort());  // output: IIFE function--> -17,41,43,5,77,99
})(array);