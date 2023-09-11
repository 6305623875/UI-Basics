// Number
//max Number
console.log(Number.MAX_SAFE_INTEGER);
//Min Number
console.log(Number.MIN_SAFE_INTEGER);

//Positive infinity
console.log(Number.POSITIVE_INFINITY);
//Negative infinity
console.log(Number.NEGATIVE_INFINITY);

//Parse Int
let str1 = '100';
let num1 = Number.parseInt(str1);
console.log(`${typeof str1} => ${typeof num1}`);

//Parse float
let str2 = '100.777';
let num2 = Number.parseInt(str2);
console.log(`${typeof str2} => ${typeof num2}`);

//toString
let num3 = 1000;
let numString = num3.toString();
 console.log(`${typeof num3} => ${typeof numString}`);

 //toFixed
 let amount = 777;
 console.log(amount.toFixed(fractionDigits=2));


 //String related operations
 let msg = String('Good Morning');
//length
console.log(msg.length);
//lowercase
console.log(msg.toLowerCase());
//uppercase
console.log(msg.toUpperCase());
//substring(index,no of chars)
console.log(msg.substr(from= 0,length=4)); //good
console.log(msg.substr(from= 5)); 
console.log(msg.charAt(5)); 
console.log(msg.charCodeAt(5)); 

//JSON Object---this is used to convert str to obj
/*  string => object : Parse()
    object => string : Stringify()
*/
let student = {
    name : 'anil',
    age : 23,
    course : 'Civil',
    college : 'Narayana'

};
console.log(student);
//obj to string
let studentStr = JSON.stringify(student);
console.log(studentStr);

//str to obj
let newStudent = JSON.parse(studentStr);
console.log(newStudent);







