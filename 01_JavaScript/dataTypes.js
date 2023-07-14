"use strict"; //treat all JS as newer version
// alert(3+3); -> we are using nodejs not browser

//DataTypes in JS
/*
    a)Premitive
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

     b)UserDefined
       8)Object 
 */

       //examples
       let name = "Mallikarjun"; //string
       let age = 21;             //number
       let isDeveloper = true;   //boolean
       let  inComplete;        //undefined
       let whtsInThere = null;   //null

       console.log(typeof inComplete); // => type undefined
       console.log(typeof whtsInThere); // => type object **Important**