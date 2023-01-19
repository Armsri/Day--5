//arrow Function

let titleCase=(string)=>{
    let str=[...string];
    for(let i in str){
        str[i] = str[i].toLowerCase();
    for (i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].slice(1);
    }
    }
    return str;
    }
    let string=["hello", "THERE", "World", "sURVIVE"];
    console.log("Arrow Function--> " );
    console.log(titleCase(string)); //output:Arrow Function--> 
                                //['Hello', 'There', 'World', 'Survive']
