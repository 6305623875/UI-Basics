  /*conditional and looping statements
  1)If-Else
  2)Switch
  3)For loop
  4)While loop
  5)Do-While loop




  */
 //If-else-
 let time = 24;
 let wishMessage = ''
 if(time <= 12){
    wishMessage = 'Good Morning';
 }
 else if(time > 12 && time <= 17 ){
    wishMessage = 'Good Afternoon';
 }
 else if(time > 17 && time <= 23){
    wishMessage = 'Good Evening';
 }
 else{
    wishMessage = 'Enter a proper time';
 }
 console.log(wishMessage)
//Switch condition-it will never check all the conditions it neglects all false statmnts and executes true statement only
let day = new Date() .getDay();
let today = '';
day = 1;
switch(day) {
   case 0:
   today = 'Sunday';
   break;
   case 1:
   today = 'Monday';
   break;
   case 2:
   today = 'Teusday';
   break;
   case 3:
   today = 'Wednesday';
   break;
   case 4:
   today = 'Thursday';
   break;
   case 5:
   today = 'Friday';
   break;
   case 6:
   today = 'Satuarday';
   break;
   default:
      today = 'Enter aproper day'
      break;
}
console.log(today);

//For loop
//for(initialization;condition;incre/decre){}-->syntax

for(let i=0; i<=10; i++){
   console.log(i);
}

result = '';
for(let i = 20; i >= 0; i -= 2){
   console.log(i);
}

//Nested for loop

/*
*
**
***
****
*****
******
*******
*/
let number = 7;
for(let i=1; i<=number; i++){
   for(let j = 1; j <= i; j++){
      result += '*';
   }
   result += `j`;
}
console.log(result);

//While loop
/*intialization
whilw(condition){
   statements
   incre/decre(always last line)
} */

let i = 0;
while(i <= 10){
   console.log(i);
   i++;
}
let anil = '';
let k = 0;
while(k <= 11){
   anil += `${k} `;
   i++;
}
console.log(anil);