var c = 300; 
let a = 300;

//var has function scope
//let and const have block scope

if(true){
    let a = 10;
    const b = 20;
    //var c = 30;
   console.log("Inner: " ,a);
}

function one(){
    const username = "hitesh";

    function two(){
        const website = "youtube"; 
        console.log(username); //closure --> ability of innner funciton to acces variables of outside function
    }
    //console.log(website); // gives error
    two()
}
one()

/* if(true){
    const username = "hitesh";
    if(username === "hitesh"){
        const website = "youtube";
        console.log(username + website);
    }
    console.log(website); //gives error
}

console.log(username); //gives error
*/
 
/*********   interesting *********/

console.log(addone(5)); // Hoisting --> using variable or calling before its declarationv
function addone(num){
   return num+1;
}


//Expression
//console.log(addTwo(5)); // gives error
const addTwo = function(num){
    return num+2;
}
