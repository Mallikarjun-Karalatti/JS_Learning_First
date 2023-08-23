const user = {
    username: "Chrish",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage();
//user.username = "Sam";
user.welcomeMessage();
console.log(this);

/*
function chai(){
    let username = "Evans";
    console.log(this);
    console.log(this.username);
}
chai();
*/

// Arrow functions

const chai = () => {
    let username = "Peter";
    console.log(this);
}
chai();
//explicit return --> using return keyword
// const addTwo = (num1,num2) => {
//     return num1+num2;
// }

//implicit return 
//const addTwo  = (num1,num2) => num1+num2;
//const addTwo  = (num1,num2) => (num1+num2);
const addTwo =  (num1,num2) => ({name: "Robin"});
console.log(addTwo(3,4));


//IIFE --> Immediately Invoked Functioned Expressions
//named IIFE
(function chai(){
  console.log("DB Connected")
})();

//unnamed IIFE
( () => { console.log('DB Connected again')})();
( (name) => { console.log(`Hello, ${name}`)})('Sam');