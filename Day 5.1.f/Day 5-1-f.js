//initialising  2 arrays
let array1=[0, -1, 20, 11, 15, 10, 19, 22];
let array2=[17, -21, 34, 46, 1, 20, -2, 65];

//anonymous function
let median=function(array1, array2){
    let array3=[...array1.sort(),...array2.sort()];
    //sort array3
    array3.sort();
    let len=array3.length;
    //return median based on length
    if(len%2 === 0){
        return (((array3[Math.floor(len/2)]+array3[Math.floor(len/2)-1])/2).toFixed(2));
    }
    else{
        return array3[Math.floor(len/2)];
    }

}

console.log("Anonymous function--> " + median(array1, array2)); //output: Anonymous function--> 16.00
//IIFE function
(function(array1, array2){
    let array3=[...array1.sort(),...array2.sort()];
    //sort array3
    array3.sort();
    let len=array3.length;
    //return median based on length
    if(len%2 === 0){
        console.log("IIFE Function--> " + ((array3[Math.floor(len/2)]+array3[Math.floor(len/2)-1])/2).toFixed(2));
    }
    else{
        console.log("IIFE function--> " + array3[Math.floor(len/2)]) ;
    }
//output: IIFE Function--> 16.00
})(array1, array2)