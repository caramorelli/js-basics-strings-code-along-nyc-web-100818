// Write your code in this file!

const currentUser = 'Grace Hopper';
 
const welcomeMessage = 'Welcome to Flatbook, ' + currentUser;

const myString = 'concatenat';
//=> undefined
 
const myNumber = 20;
//=> undefined
 
const myBoolean = true;
//=> undefined
 
"It's " + myBoolean + ' that we can ' + myString + 'e values of any data type into one long ' + typeof myString + '. We could even ' + myString + 'e ' + (22 + myNumber) + " things together if we wanted to. We don't have to convert things like " + typeof myNumber + 's or ' + typeof myBoolean + 's prior to ' + myString + 'ing them. ' +
 
'Even if we ' + myString + 'e across multiple lines, the return value is still a single, one-line ' + typeof myString + '.';
//=> "It's true that we can concatenate values of any data type into one long string. We could even concatenate 42 things together if we wanted to. We don't have to convert things like numbers or booleans prior to concatenating them. Even if we concatenate across multiple lines, the return value is still a single, one-line string."