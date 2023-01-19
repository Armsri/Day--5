let numArray=[0,1,2,3,10,55,11,47,33,71,29,38,37,79,73,25,35];

//Arrow function
let getPrime=(numArray)=>{
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

console.log("Arrow Function--> " + getPrime(numArray)); //output: Arrow Function--> 2,3,11,47,71,29,37,79,73