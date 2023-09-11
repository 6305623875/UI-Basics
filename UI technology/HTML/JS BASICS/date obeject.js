//Date Objects
let date = new Date();
console.log(date);


//proper date
let currentDate = new Date().toLocaleDateString();
console.log(currentDate);


//proper time
let currentTime = new Date().toLocaleTimeString();
console.log(currentTime);


//today
let day = new Date().getDay();
let today = '';
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

//month
let currentMonth = new Date().getMonth();
console.log(currentMonth);


//custom Date
let c_date = new Date().getDate();
let c_month = new Date().getMonth();
let c_year = new Date().getFullYear();
console.log(`${c_date}-${c_month}-${c_year}`);

