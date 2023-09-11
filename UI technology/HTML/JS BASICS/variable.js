/*
let -> keyword to declare a variable
a -> variable name/reference variable
= ->  assignment operator
10 -> value/data
; -> end of the statement
*/


let a = 10;
let b = 20;
let sum = a + b;
console.log(sum)
console.log('The Sum of a , b is :' + sum)
console.log('The Sum of' + a +',' + b + 'is :' + sum)  //ES5
// ES6->Template string / Template literal ('') back ticK Operator
console.log(`The sum of ${a} , ${b} is : ${sum}`); //ES6

// Rules in Declaring Variables
//All variables are case sensitive  HTML,html,Html..all are different
// if we have multiple words we can write in camelCase ex;myEmployeeName
//max allowed characters of a variable name is 15
//chars allowed are A-Z , a-z , $ , _ , 0-9 Never a variable starts with a number or #
// A variable must not re-declared

/*JS Data Types
The type of data which we can assign to a variable
1.Number->Any number
2.String->Any text data
3.Boolean->True,False
4.Undefined
5.Null*/

let k = 5;
let p = 7;
let anil = p+k;
console.log(anil);
console.log(`The sum of k , p is:` +anil);
console.log(`The sum of` +k+ `and` +p+ `is :` +anil);
console.log(`The sum of ${k} and ${p} is ${anil}`);

