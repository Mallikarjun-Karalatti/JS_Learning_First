let myName = "Mallikarjun"; //string declared as premitive
let repoCount = 22;

// template literal used to string interpolation
console.log(`Hi!, my name is ${myName} and I have ${repoCount} repositories in my GitHub profile.`);

//another way of declaring a string as an object (type object)

let gameName = new String('Pokemon-Game'); 
//it is an object with key-value pairs where the key will be indexed and the value will be a character at that index

//Difference between primitive and object string
let str1 = "2+2";
let str2 = new String("2+2");
console.log(eval(str1)); //gives 4
console.log(eval(str2)); //gives  [String: '2+2']

//object -> premitive
console.log(eval(str2.valueOf()));

console.log(gameName[0]); 
// gives 'P' here-string is treated as an array of characters and in this way you can only fetch characters and can not delete or modify them

console.log(gameName.__proto__); //prototype, o/p will be {} and key-value pairs in it
console.log(gameName.length); // length is property of this string object and accessed using dot operator
console.log(gameName.toUpperCase()); //calling different functions/methods on a string and here object value will not be changed because strings are immutable in JS.
console.log(gameName.charAt(2));
console.log(gameName.indexOf('o'));
console.log(gameName.indexOf('x'));


const newString = myName.substring(6,11); //considers only positive values as argument
console.log(newString);

const anotherString = myName.slice(2,5); //can take negative index
console.log(anotherString);

const newStringTwo = "  Arjun  ";
console.log(newStringTwo);
console.log(newStringTwo.trim()); // startTrim() & endTrim() also there

const url = "https://abcGoggle.com/hello%20world";
console.log(url.replace('%20','-'));
console.log(url.includes('xyz'));
console.log(gameName.split('-'));
