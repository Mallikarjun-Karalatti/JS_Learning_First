/*
   In JS "primitive" data types will be stored in "stack memory" and
   "Non-primitive" data types will be stored in heap "heap memory"
*/

let myName = "John"; // -> stored in stack 
let hisName = myName; // here a copy of myName varible is given not the reference. They are not pointing to the same value
console.table([myName,hisName]); 
hisName = "Robert"; // only hisName is changed not myName;
console.table([myName,hisName]);

let userOne = {               // value is stored in heap
    email : "abc@gmail.com",
    password : "xyz_124"
};

let userTwo = userOne ; // both userOne and userTwo variables are pointing to the same value in heap and copy is not given

console.table([userOne.email,userTwo.email]);

userTwo.email = "pqr@gmail.com"; // will be changed both variables since they are pointing to the same value

console.table([userOne.email,userTwo.email]);
