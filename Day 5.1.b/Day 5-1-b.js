//Anonymous Function

let titleCase=function (string) {
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
    console.log("Anonymous Function--> " );
    console.log(titleCase(string)); //output:Anonymous Function--> 
                                //['Hello', 'There', 'World', 'Survive']

//IIFE Function
(function(string){
    let str=[...string];
    for(let i in str){
        str[i] = str[i].toLowerCase();
    for (i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].slice(1);
    }
    }
    console.log("IIFE Function--> ") 
    console.log(str);  //output:IIFE Function--> 
                    //['Hello', 'There', 'World', 'Survive']
    
})(string);