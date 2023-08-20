//singleton --> object is created using constructor , object.create

let mySymbol = Symbol("key1");


//object literals
const JsUser = {
    name : "Chris",
    "Full Name": "Chris Evans",
    age : 23,
    location: "Jaipur",
    email: "evans@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    [mySymbol]: "myKey1"
}

//key values are stored as strings

//Accessing values from object
console.log(JsUser.email);
console.log(JsUser["email"])// since keys are stored as string
console.log(JsUser["Full Name"]) //only square notation is only possible for such variables
console.log( JsUser[mySymbol]);

JsUser.email = "chris@gmail.com";
//Object.freeze(JsUser); 
JsUser.email = "captain@gmail.com";
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());