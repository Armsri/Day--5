let numArray=[0,1,2,3,10,55,11,47,33,71,29,38,37,79,73,25,35];

//Anonymous function
let getPrime=function(numArray){
    let prime=[];
    for(let i=0; i<numArray.length; ++i){
        let count =0;
        //logic to check if a number in an array in prime or not
        if(numArray[i] !== 0 && numArray[i] !== 1 && numArray[i]%2 !== 0 || numArray[i] === 2){
        for(let j=2; j<=Math.floor(numArray[i]/2); ++j){
             if(numArray[i]%j === 0){
                ++count;
             }
             
        }
        //to push prime elements to an array
        if(count === 0 || numArray[i] === 3 || numArray[i] === 2)
             prime.push(numArray[i]);
      }

    }
    return prime;
}

console.log("Anonymous Function--> " + getPrime(numArray)); //output: Anonymous Function--> 2,3,11,47,71,29,37,79,73

//IIFE
(function(numArray){
    let prime=[];
    for(let i=0; i<numArray.length; ++i){
        let count =0;
        //logic to check if a number in an array in prime or not
        if(numArray[i] !== 0 && numArray[i] !== 1 && numArray[i]%2 !== 0 || numArray[i] === 2){
            //checking for all values within the num range if divisible 
        for(let j=2; j<=Math.floor(numArray[i]/2); ++j){
             if(numArray[i]%j === 0){
                ++count;
             }
             
        }
        //to push prime elements to an array
        if(count === 0 || numArray[i] === 3 || numArray[i] === 2)
             prime.push(numArray[i]);
      }

    }
console.log("IIFE Function--> " + prime);  //output: IIFE Function--> 2,3,11,47,71,29,37,79,73

})(numArray);