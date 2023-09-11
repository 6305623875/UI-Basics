/*Object-camera,fan,tv all are objects
if we want represent single object properties we will go with object
ARRAY  ia a collection of values or objects it means if we want to represent multiple objects then we go for array
Array is an indexed collection of elements(obj/str/array/bool/num)
*/
let numbers = [10, 20, 30];
console.log(numbers);

//To access the elements of an array
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);


//Iteration of array elements
let colors = ['white','black','silver','purple','blue','yellow']
//Normal for loop
let result = '';
for(let i=0; i<=colors.length-1; i++){
    result += `${colors[i]} `;
}
console.log(result);

//For-in loop upto ES5
result = '';
for(let index in colors){
    result += `${colors[index]} `;
}
console.log(result);

//For-of loop upto ES5
result = '';
for(let color of colors){
    result += `${color} `;
}
console.log(result);

//ForEach function upto ES5
result = '';
colors.forEach(function(color){
    result += `${color} `;
});
console.log(result);

//ForEach with Arrow function from ES6
result = '';
colors.forEach((color) => {
    result += `${color} `;
});
console.log(result);

//Array of objects
let employee = [
    {
        id : 1,
        name : 'Anil',
        age : 23,
        designation : 'Manager',
        isActive : true
    },
    {
        id : 2,
        name : 'pawan',
        age : 25,
        designation : 'sr.Manager',
        isActive : false
    },
    {
        id : 3,
        name : 'dhom',
        age : 24,
        designation : 'TL',
        isActive : true
    },
    {
        id : 4,
        name : 'Suji',
        age : 23,
        designation : 'Manager',
        isActive : true
    },
    {
        id : 5,
        name : 'Srinu',
        age : 23,
        designation : 'Manager',
        isActive : true
    }
];
console.log(employee);
console.log(employee[0]);
console.log(employee[0].name);


