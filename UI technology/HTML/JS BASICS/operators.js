/*
Javascript operators
->Assignment operators:=*/
let test = 10;
console.log(test)

//Arithmatic operators: +-/*%
let num1 = 10;
let num2 = 20;
console.log(`sum : ${num1 + num2}`);
console.log(`sum : ${num1 - num2}`);
console.log(`sum : ${num1 * num2}`);
console.log(`sum : ${num1 / num2}`);

// find the number is even or odd
let number = 11;
if(number % 2 === 0){
    console.log(`${number} is an even number`)
}
else{
    console.log(`${number} is an odd number`)

}

//Short hand math opertaors : += , -+ , /= , *=
let a = 20;
let b = 30;
let add = 10;
//add = add + (a+b); //or
add += (a+b) //same for / * -.
console.log(add);

// Conditional Operators : < ,> , <= , >= , !==

let marks = 75;
if(marks <= 35) {
    console.log('ypu failed the exam')
}
else{
    console.log('you have cleared the exam')
}
//Unary Operators : ++ , --.
let x=10;
x = x + 1;
x += 1;
x ++;
x --;
console.log(x)
// Logical Operators : && , || , ^
/* 
AND - T && T -> T-if both operands are true then only true remaininga all cases false
OR -  F || F -> F-if both operands are false/true then only true remaininga all cases false
^ - T ^ F , F ^ T-if both are different then only it is true otherwise false
*/
let inRelation = true;
let parentsAgreed = true;
if(inRelation && parentsAgreed) { // same for || , ^ operators
    console.log('get marry soon')
}
else{
    console.log('you have to wait until the parents aGreed')
}

//Ternary Operators ?:
/*
syntax : (condition) ? trur : false;
*/
let beans = 65;
let message = '';
(beans <= 35) ? message = 'you failed the exam' : message = 'you cleared the exam';
console.log(message);


// Equality Operator : == , ===
a = 10;
b = 10;
if(a == b) {
    console.log("both are equal");
}
else{
    console.log('both are not equal');
}
c = 10;
d = '10';
if(a === b) {
    console.log("both are equal");
}
else{
    console.log('both are not equal');
}



let num3 = 5;
let num4 = 7;
console.log(`sum is : ${num3 + num4}`);
console.log(`subtract is : ${num4-num3}`);
console.log(`multiply is : ${num4*num3}`);
console.log(`division is : ${num4/num3}`);


