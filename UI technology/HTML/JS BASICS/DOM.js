//DOM-Document Object Model
//Document
console.log(document);
//head tag
console.log(document.head);
//title
console.log(document.title);
document.title = 'change the title';
//body
console.log(document.body);
//nav tag
let navTag = document.querySelector(selectors='nav');
console.log(navTag);

//anchor tag
let anchorTag = document.querySelector(selectors = 'nav a');
console.log(anchorTag);

//innerText
let theText = anchorTag.innerText;
console.log(theText);


//Change the inner text
anchorTag.innerText = 'Kunchal Anil';


//h1 tag
let h1Tag = document.querySelector(selectors='#msg');
console.log(h1Tag);
h1Tag.innerText = 'Good Evening';


//Styles
h1Tag.style.backgroundColor = 'limegreen';
h1Tag.style.color = 'White';
h1Tag.style.textAlign = 'center';
h1Tag.style.padding = '14px';
h1Tag.style.fontSize = '49px';
h1Tag.style.boxShadow = '0 0 10px black47';






