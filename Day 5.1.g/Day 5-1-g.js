let array1 = [1, -1, 2, 0, 1, 10, 18, -10, 2, 0, 3, 3, 18, 2, "apple", "orange", "orange", "grapes", "apple"];

//anonymous function

let remDuplicate=function(array1){
    let uniqueArray=[...new Set(array1)];

    return [uniqueArray];
}

console.log("Anonymous function--> " + remDuplicate(array1)); //output: Anonymous function--> 1,-1,2,0,10,18,-10,3,apple,orange,grapes

//IIFE Function
(function(array1){
    let uniqueArray=[...new Set(array1)];
    
        console.log("IIFE function--> " + uniqueArray) ;
//output: IIFE function--> 1,-1,2,0,10,18,-10,3,apple,orange,grapes
})(array1)