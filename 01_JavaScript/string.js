let myName = "Mallikarjun"; //string declaration
let repoCount = 22;

//string interpolation
console.log(`Hi!, my name is ${myName} and I have ${repoCount} repositories in my github profile.`);

//another way of declaring string
let gameName = new String('Pokemon-Game'); //it is an object with key value pairs where key will be index and value will be charecter at that index
console.log(gameName[0]); // gives 'P'
console.log(gameName.__proto__); //prototype, o/p will be {} and key value pairs in it
console.log(gameName.length); // legth is property of this string object and accessed using dot operator
console.log(gameName.toUpperCase()); //calling different funtions/methods on string and here object value will not be changed beacuse strings are immutable in JS.
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
