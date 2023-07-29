// Dates

let myDate = new Date();

console.log(myDate);
console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let myCreateDate = new Date(2023,0,29);// in this format months start form 0
console.log(myCreateDate.toLocaleString());
myCreateDate = new Date(2023,0,29,5,3);
console.log(myCreateDate.toLocaleString());
myCreateDate = new Date("2023-01-14"); // in this fromat months start from 1
console.log(myCreateDate.toLocaleDateString());
myCreateDate = new Date("01-29-2023");
console.log(myCreateDate.toLocaleDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Date.now());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1) // starts from 0
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long"
});