"use strict"; //treat all JS as newer version
// alert(3+3); -> we are using nodejs not browser

//DataTypes in JS
/*
    a)Premitive
      1)number    => till 2^53
      2)string    => ""
      3)boolean   => true/false
      4)null      => standalone value 
      5)undefined =>
      6)symbol    => for uniqness
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