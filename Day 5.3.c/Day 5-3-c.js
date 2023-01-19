//initialising array
let num=[1,3,-2,-19,20,3,67.5,-2,10];

//arrow function
let sum=(num)=>{
    let res=0;
    for(let i in num)
    res += num[i];

    return res;
}

console.log("arrow function--> " + sum(num)); //output: arrow function--> 81.5