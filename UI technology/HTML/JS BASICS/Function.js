/* JS Functions----It is a block of statements which taken in a set of parameters and does some process
and returns the result. Re-usability*/

function printNumbers() {
    let result = '';
    for(let i=0; i<=10; i++){
        result += `${i}`;
    }
    console.log(result);
}
printNumbers();
printNumbers();
printNumbers();
printNumbers();
printNumbers();


//Types of functions
//1.Isolated Function--A function without any parameters(it doesnt take any input and not return any input)
function greet() {
    console.log('Good Morning');
}
greet();

//Function Expression
let greetMe = function() {
    console.log('Good Morning')
};
greetMe();

//function with parameters--A function with parameters(it  take any input and not return any input)
let wishMe = function(type,sex) {
    let message = 'Hello ${type} you are ${sex} yrs old';
    console.log(message);
};
wishMe(type='anil', sex='female');

//function with return type--A function with parameters(it takes input and return input)
let sum = function(a , b) {
    let result = 2 * (a + b);
    return result;
};
let output = sum(a= 10, b=20);
console.log(output);

//function with an object as paramater
let printObject = function(obj) {
    console.log(obj);
};
printObject(obj={name : 'Rajan' , age : 20});


let mobile = {
    brand : 'Apple',
    color : 'Silver',
    price : 35000
};
printObject(mobile);


//function with an array as a parameter
let printArray = function(array) {
    let result = '';
    for(let index in array) {
        result += 'INDEX : ${index} => VALUE : ${array[index]} \n';
    }
    console.log(result);
}
printArray(array=[10,20,30,4,50])
//  function inside an object
let student = {
    firstName : 'Kunchala',
    lastName : 'Anil',
    fullName : function() {
        return 'Kunchala Anil';
    }
};
console.log(student.fullName());

//Nested Function---a function inside a function
let outerFn = function() {
    console.log('Iam an outer function');
    let innerFn = function() {
        console.log('Iam an inner function');
    }
    innerFn();
};
outerFn();
//Twisted Function
let twistedFn = function() {
    let name = 'anu';
    let printStudent =function() {
        let student = {
            name : 'anuj',
            age : '23',
            stream : 'CIVIL'
        };
        return student;
    };
    return printStudent;
};
let innerFn = twistedFn();
let studentObj = innerFn();
console.log(studentObj.name);


//Prepare chicken curry with functions
let glassBowl = function(rawChicken,masala) {
    //marinating the chicken
    let marinatedChicken = `MIXING : (${rawChicken} + ${masala})`;
    return marinatedChicken;
};

let cookingBowl = function(marinatedChicken , water) {
    //Cooking Logic
    let cookedChicken = `COOKING (${marinatedChicken} + ${water})`
    return cookedChicken;
};
let eatingPlate = function(cookedChicken , rice) {
    //Eating Logic
    let eating = `EATING : (${cookedChicken} + ${rice})`;
    console.log(eating);
};

let rawChicken = '3Kg Chicken';
let masala = 'Garlic , Pepper , Salt';
let marinatedChicken = glassBowl(rawChicken , masala);
let water='1Ltr water';
let cookedChicken = cookingBowl(marinatedChicken , water);
let rice = '1Kg Rice';
eatingPlate(cookedChicken , rice);


// Functions of Arrays
// shift()->removes the first element from array
let technologies = ['html','css','js','jquerry','boostrap'];
console.log(technologies);
technologies.shift();
console.log(technologies);


// unshift()->adds the first element to array
let courses = ['html','css','js','jquerry','boostrap'];
console.log(courses);
courses.unshift(items='nodejs');
console.log(courses);

// push()->adds the last element to array
let anil = ['html','css','js','jquerry','boostrap'];
console.log(anil);
anil.push('nodejs');
console.log(anil);



// push()->removes the last element from array
let suji = ['html','css','js','jquerry','boostrap'];
console.log(suji);
suji.pop();
console.log(suji);

// sort()->to sort the array in ascending order
let babu = ['html','css','js','jquerry','boostrap'];
console.log(babu);
babu.sort();
console.log(babu);

// reverse()->reverse order
let pawan = ['html','css','js','jquerry','boostrap'];
console.log(pawan);
pawan.reverse();
console.log(pawan);

//reverse order of elements
let amar = ['html','css','js','jquerry','boostrap'];
console.log(amar);
amar.sort().reverse();
console.log(amar);

//splice(index)-->it removes all the elements from the given index
let dhom = ['html','css','js','jquerry','boostrap'];
console.log(dhom);
dhom.sort().splice(3,1);
console.log(dhom);

//join()-->to join the array elements to string
let king = ['html','css','js','jquerry','boostrap'];
console.log(king);
let kingString = king.join('-');
console.log(kingString);
let newTechs =kingString.split(seperator='-');
console.log(newTechs); 





















