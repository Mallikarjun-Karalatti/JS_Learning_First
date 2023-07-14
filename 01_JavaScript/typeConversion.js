
   //Different data types
   let accountHolder = "Mallikarjun";   //string which is not a  Number 
   let ageAsString = "21"      //string which is a  Number
   let age = 21;
   let isDeveloper = true;     //boolean 
   let inComplete = undefined; // undefined
   let whtsInThere = null;     //null;

   //conversion of other types to  Number
   // syntax ->  Number();  all the below converion have type  Number
   console.log( Number(accountHolder)+" : "+typeof( Number(accountHolder))); // value = NaN (Not a  Number)
   console.log( Number(ageAsString)+" : "+typeof( Number(ageAsString))); // value = 21
   console.log( Number(isDeveloper)+" : "+typeof( Number(isDeveloper))); // value = 1 and value for false is 0
   console.log( Number(inComplete)+" : "+typeof( Number(inComplete))); // value = Nan
   console.log( Number(whtsInThere)+" : "+typeof( Number(whtsInThere))); // value = 0

   //conversion of other types to  String
   // syntax ->  String();  all the below converion have type  string
   console.log( String(age)+" : "+typeof( String(age))); // value = 21 means "21"
   console.log( String(isDeveloper)+" : "+typeof( String(isDeveloper))); // value = true means "true"
   console.log( String(inComplete)+" : "+typeof( String(inComplete))); // value = undefined means "undefined"
   console.log( String(whtsInThere)+" : "+typeof( String(whtsInThere))); // value = null means "null"

   //conversion of other types to  Boolean
   // syntax ->  Boolean();  all the below converion have type  Boolean
   console.log( Boolean(accountHolder)+" : "+typeof( Boolean(accountHolder))); // value = NaN (Not a  Boolean)
   console.log( Boolean(ageAsString)+" : "+typeof( Boolean(ageAsString))); // value = 21
   console.log( Boolean(inComplete)+" : "+typeof( Boolean(inComplete))); // value = Nan
   console.log( Boolean(whtsInThere)+" : "+typeof( Boolean(whtsInThere))); // value = 0