//operations

let a = 4;
let b = 3;
let ans;

ans = a + b; //additon
console.log(ans);
ans = a - b; //subtraction
console.log(ans);
ans = a * b ; //multiplication
console.log(ans);
ans = a / b; //division
console.log(ans);
ans = a % b; //modulus or remainder
console.log(ans);

console.log("*****");
 a += b;     //agumented additon
 console.log(a);
 a -= b;     //agumented subtraction
 console.log(a);
 a *= b;     //agumented multiplication
 console.log(a);
 a /= b;     //agumented division
 console.log(a);


 console.log("*****");
 console.log(a);
 console.log(a++);//a++ is post increment i.e increase a value by 1 after this line
 console.log(a);
 console.log(b);
 console.log(++b); // ++b is pre increment i.e increase b value by 1 before this line
 // same goes for a-- or --a;

 console.log("*****");
 let str1 = "hello";
 let str2 = "world";
 let greeting = str1 + " " + str2; // concatination
 console.log(greeting);

 console.log("*****");
 console.log("2"+2+2);  // execution goes from left to right and if it hits
 console.log(2+2+"2");  // string from there everything will be considered as 
console.log(2+"2"+2);   // string