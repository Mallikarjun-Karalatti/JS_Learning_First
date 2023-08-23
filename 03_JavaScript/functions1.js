function sayMyName(){
    console.log("H");
    console.log("r");
    console.log("r");
    console.log("y");
}

//sayName --> reference sayName() --> call
sayMyName();

//functions with parameters
function addTwoNumbers(num1, num2){
    console.log(num1+num2);
}
addTwoNumbers(); //gives NaN
addTwoNumbers(3,5); //gives 8
addTwoNumbers(3,"5"); // gives 35
addTwoNumbers(3,null); // gives 3

function addTwoNumbers2(a,b){
    // let result = a+b;
    // return result;
    return a+b;
}

const ans = addTwoNumbers2(5,6);

function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("Please enter username");
        return;
    }
    return `${username} just logged in`;
}
console.log(loginUserMessage());
console.log(loginUserMessage("Potter"));

function calculateCartPrice(...num){
    return num;
}
console.log(calculateCartPrice(200)); // gives [200]
console.log(calculateCartPrice(100,300,500)); // gives [100,300,500]

function calculateCartPrice2(val1,val2, ...num){
    return num;
}
console.log(calculateCartPrice2(10,20,100,200,400));

const user = {
    username : "Tom Halland",
    price : 190
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user);

const myNewArray = [200,400,100,600];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));