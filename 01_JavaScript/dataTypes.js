"use strict"; //treat all JS as newer version
// alert(3+3); -> we are using nodejs not browser

//DataTypes in JS
// two types premitive and non-premitive(reference type) based on how data is stored in memory and access from memory
/*
    a)Premitive => call by value (copy of data is given when fetched and reference of address in memory is not given)
        TYPES     :   values 
      1)number    => 
      2)string    => from empty string("") with zero 
                     length to the length with 2^53-1 charecters               
      3)boolean   => true/false
      4)null      => has only one value i.e null
      5)undefined => has only one value i.e undefined
      6)symbol    => unique and unmutable
                     set of all non-String values that may be used as the key of an Object property 
      7)bigint    =>

     b)Non-premitive or Reference
       8)Object
       9)Arrays
       10)Functions 
 */
     
       //JS is dynamically typed lang because we don't need to specify the datatype specifically while declaring variables

       //examples
       let name = "Mallikarjun"; //string
       let age = 21;             //number
       let isDeveloper = true;   //boolean
       let  inComplete;        //undefined
       let whtsInThere = null;   //null
       let id = Symbol('123') //symbol
       let anotherId = Symbole('123') //symbol
       const bigNumber = 23525421451451453235n;

       const heroes = ["Captain America", "Superman", "Batman","Spiderman"]; //Array 
       const myObj = {
          iAm: "Mallikarjun",
          age: 21
       }   // object
       const myFunction = function(){
        console.log("Hello world");
       }


       console.log(typeof inComplete); // => type undefined
       console.log(typeof(whtsInThere)); // => type object **Important** typeof gives object
       console.log(id === anotherId) ; // false as symbol will be uique