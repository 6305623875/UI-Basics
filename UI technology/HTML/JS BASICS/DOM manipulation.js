let sayGoodMorning = () => {
    let h1Tag = document.querySelector(selectors='#msg-1');
    h1Tag.innerText = 'Good Morning';
    h1Tag.style.backgroundColor = 'limegreen';
    h1Tag.style.padding = '15px';
    h1Tag.style.boxShadow = '0 0 10px black';
}
let sayGoodAfternoon = () => {
    let h1Tag = document.querySelector(selectors='#msg-1');
    h1Tag.innerText = 'Good Afternoon';
    h1Tag.style.backgroundColor = 'orange';
    h1Tag.style.padding = '15px';
    h1Tag.style.boxShadow = '0 0 10px black';
}
let sayGoodEvening = () => {
    let h1Tag = document.querySelector(selectors='#msg-1');
    h1Tag.innerText = 'Good Evening';
    h1Tag.style.backgroundColor = 'yellow';
    h1Tag.style.padding = '15px';
    h1Tag.style.boxShadow = '0 0 10px black';
}
let sayGoodNight = () => {
    let h1Tag = document.querySelector(selectors='#msg-1');
    h1Tag.innerText = 'Good Night';
    h1Tag.style.backgroundColor = 'blue';
    h1Tag.style.padding = '15px';
    h1Tag.style.boxShadow = '0 0 10px black';
}

// Good Morning Button
let gmButton = document.querySelector(selectors = '#gm-btn');
gmButton.addEventListener(type='click' , listener=function () {
    printWishMessage(message = 'Good Morning' , color = 'limegreen');
});

