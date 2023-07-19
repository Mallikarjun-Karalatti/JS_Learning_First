const value = 400; //premitive
console.log(value); // returns 400

const balance = new Number(100); // object
console.log(balance); //returns [Number: 100]

console.log(balance.toString().length); //3
console.log(balance.toFixed(1)); // 100.0

const otherNumber = 1123.8966;
console.log(otherNumber.toPrecision(5)); // 1123.9
console.log(otherNumber.toPrecision(4)); //1124
console.log(otherNumber.toPrecision(3)); //1.12e+3

const price = 1000000;
console.log(price.toLocaleString('en-IN'));

const min = Number.MIN_VALUE;
const max = Number.MAX_VALUE;
console.log(min);
console.log(max);

// *************** Math **************//

console.log(Math);
console.log(Math.abs(-1));
console.log(Math.round(4.6));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.9));
console.log(Math.min(5,7,3,9,2));

console.log(Math.random()); //value between 0 and 1;
console.log(Math.random()*6); // range of 0 t0 6;

const low = 10;
const high = 20;
console.log(Math.floor(Math.random()*(max-min+1))+min);