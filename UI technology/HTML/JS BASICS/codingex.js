//1.find the number of 'o' in the given string 
let msg = 'Good Morning';
let findZeros = (str) => {
    let count = 0;
    for(let i=0; i <= str .length-1; i++){
        let char = str.charAt(i);
        if(char === 'o' || char === 'O'){
            count++;
        }
    }
    return count;

};
console.log(`The Zeros in Strings is : ${findZeros(msg)}`);


//2. find thr reverse string of the given string:
msg = "Good Morning";
let reverseString = (str) => {
    let tempString = '';
    for(let i=str.length-1; i >= 0; i--){
        let char = str.charAt(i);
        tempString += char;
    }
    return tempString

};
console.log(`${msg} => ${reverseString(msg)}`);


//3.check the given string is palindrome or not
msg = 'ABA';
let isPalindrome = (str) => {
    if (str === reverseString(str)) {
        return true;
    }
    else{
        return false;
    }

};
console.log(`${msg} is Palindrome ? ${isPalindrome(msg)}`);
//4.Traingle string one
msg = 'anilkunchala';
let traingleOne = (str) => {
    let tempStr = '';
    for(let i=1; i<=str.length; i++){
        tempStr += `${str.substr(from=0,i)} \n`;
    }
    return tempStr;

};
console.log(traingleOne(msg));

//5.Traingle string two
msg = 'anilkunchala';
let traingleTwo = (str) => {
    let tempStr = '';
    for(let i=0; i<=str.length - 1; i++){
        tempStr += `${str.substr(i)} \n`
    }
    return tempStr;
  

};
console.log(traingleTwo(msg));


//7.Traingle string four
msg = 'anilkunchala';
let traingleFour = (str) => {
    let tempStr = '';
    for(let i=str.length - 1; i >= 0; i--){
        tempStr += `${str.substr(i)} \n`
    }
    return tempStr;
  

};
console.log(traingleFour(msg));


