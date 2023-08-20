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

console.log(Object.keys(JsUser)); //gives array of keys
console.log(Object.values(JsUser));
console.log(Object.entries(JsUser));

//Accessing values from object
//console.log(JsUser.email);
//console.log(JsUser["email"])// since keys are stored as string
//console.log(JsUser["Full Name"]) //only square notation is only possible for such variables
//console.log( JsUser[mySymbol]);

JsUser.email = "chris@gmail.com";
//Object.freeze(JsUser); 
JsUser.email = "captain@gmail.com";
//console.log(JsUser);

JsUser.greeting = function(){
    //console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    //console.log(`Hello JS user, ${this.name}`);
}

//console.log(JsUser.greeting);
//console.log(JsUser.greeting());
//console.log(JsUser.greetingTwo());

const tinderUser1 = new Object(); //singleton object
const tinderUser2 = {}; //non singleton object
//console.log(tinderUser1);

tinderUser1.id = "123abc";
tinderUser1.name = "Sammy";
tinderUser1.isLoggedIn = false;

//console.log(tinderUser1);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
        firstname: "Tony",
        lastname: "Stark"
        }
    }
}

console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d"};
const obj3 = {obj1,obj2};
console.log(obj3);

const obj4 = Object.assign({},obj1,obj2);
console.log(obj4);

const obj5 = {...obj1, ...obj2};
console.log(obj5);


const users = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
            id: 2,
            email: "def@gmail.com"
    },
    {
        id: 1,
        email: "hij@gmail.com"
    }
]

console.log(users[0].email);
console.log(tinderUser1.hasOwnProperty('isLoggedIn'));