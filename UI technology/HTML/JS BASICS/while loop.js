//While loop
/*intialization
while(condition){
   statements
   incre/decre(always last line)
} */

let k = 0;
while(k <= 10){
   console.log(k);
   k++;
}
let result = '';
let i = 0;
while(i <= 10){
    if(i <= 9){
   result += `${i} ,`;
    }
    else{
        result +=   `${i}`;
    }
    i++;
}
console.log(result);


result='';
i = 20;
while(i >= 0){
    if(i > 0){
        result += `${i} `;
    }
    else{
        result += `${i} `;
    }
    i -= 2;
}
console.log(result);



// Do While loop
/*intialization
do{
   statements
   incre/decre(always last line)
} 
while(condition);
*/

let output = '';
let a = 0;
do{
    if(i <= 9){
        output += `${a} ,`;
    }
    else{
        output += `${a}`;
    }
    a++;
}
while(a <= 10);
console.log(output); 


