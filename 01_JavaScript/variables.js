const accountId = 12223423;
let costemer = "Mallikarjun";
var emailId = "abd@gmail.com";
var password = "xyz@123"
cityName = "Bengaluru";
let stateName;

// -> single line comment , makes code comment from where it is put to the end of the line
/*
...
multiline comment
...
*/
/*
   comments are use to leave notes and to test how block code works
 */
//accountId = 2232342;//It's not valid beacuse constant variable cannot be changed or reassigned once it is assigned
emailId = "xyz@gmail.com";
password = "pqe@321";
console.log("Customer Details");
console.table([accountId,costemer,emailId,password,cityName,stateName]);

//Note
// Prefer not to use var because it has function scope but not block scope and use let because it has block scope