//DOM Elements
const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus');

//Options
// const showAmPm = true;

// Show Time
function showTime() {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds(),
    dateCur = today.getDate(),
    day = today.getDay(),
    month = today.getMonth();

    // Set AM or PM
    // const amPm = hour >= 12 ? 'PM' : 'AM';

    //Week names
    const weekName = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    //Month names
    const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    //12hr Format
    // hour = hour % 12 || 12;

    //Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
    date.innerHTML = `${weekName[day]}, ${dateCur} ${monthName[month]}`;

    setTimeout(showTime, 1000);
}

//Click and remove name
function clickDelName() {
    name.textContent = '';
}

//Click and remove focus
function clickDelFocus() {
    focus.textContent = '';
}

//Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//Set Background and Greeting
function setBgGreet() {
    let today = new Date(),
    hour = today.getHours();
    
    if(hour > 6 && hour < 12){
        greeting.textContent = 'Good Mornng';
        document.body.style.color = 'white';
    } else if(hour > 12 && hour < 18){
        greeting.textContent = 'Good Afternoon';
        document.body.style.color = 'white';
    } else if(hour > 18 && hour < 24){
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    } else {
        greeting.textContent = 'Good Night';
        document.body.style.color = 'white';
    }
}

let morning = "url('../img/morning.jpg')",
    morning1 = "url('../img/morning1.jpg')",
    morning2 = "url('../img/morning2.jpg')",
    morning3 = "url('../img/morning3.jpg')",
    morning4 = "url('../img/morning4.jpg')",
    morning5 = "url('../img/morning5.jpg')",
    afternoon = "url('../img/afternoon.jpg')",
    afternoon1 = "url('../img/afternoon1.jpg')",
    afternoon2 = "url('../img/afternoon2.jpg')",
    afternoon3 = "url('../img/afternoon3.jpg')",
    afternoon4 = "url('../img/afternoon4.jpg')",
    afternoon5 = "url('../img/afternoon5.jpg')",
    evening = "url('../img/evening.jpg')",
    evening1 = "url('../img/evening1.jpg')",
    evening2 = "url('../img/evening2.jpg')",
    evening3 = "url('../img/evening3.jpg')",
    evening4 = "url('../img/evening4.jpg')",
    evening5 = "url('../img/evening5.jpg')",
    night = "url('../img/night.jpg')",
    night1 = "url('../img/night1.jpg')",
    night2 = "url('../img/night2.jpg')",
    night3 = "url('../img/night3.jpg')",
    night4 = "url('../img/night4.jpg')",
    night5 = "url('../img/night5.jpg')";

    let arrImg = [night, night1, night2, night3, night4, night5, morning, morning1, morning2, morning3, morning4, morning5, afternoon, afternoon1, afternoon2, afternoon3, afternoon4, afternoon5, evening, evening1, evening2, evening3, evening4, evening5];
    let i = 0;
    

//Array of images for background
function backgrImg() {
    let today = new Date(),
    hour = today.getHours();

    document.body.style.backgroundImage = arrImg[hour];

    setTimeout(backgrImg, 30000);
}

//Button change images
function viewBgImage(data) {
    const body = document.querySelector('body');
    const src = data;
    const img = document.createElement('img');
    img.src = src;
    img.onload = () => {
        document.body.style.backgroundImage = `url(${src})`;
    };
}

function getImage() {
    let today = new Date(),
    hour = today.getHours();
    let imgArr = ['../img/night.jpg', '../img/night1.jpg', '../img/night2.jpg', '../img/night3.jpg', '../img/night4.jpg', '../img/night5.jpg', '../img/morning.jpg', '../img/morning1.jpg', '../img/morning2.jpg', '../img/morning3.jpg', '../img/morning4.jpg', '../img/morning5.jpg', '../img/afternoon.jpg', '../img/afternoon1.jpg', '../img/afternoon2.jpg', '../img/afternoon3.jpg', '../img/afternoon4.jpg', '../img/afternoon5.jpg', '../img/evening.jpg', '../img/evening1.jpg', '../img/evening2.jpg', '../img/evening3.jpg', '../img/evening4.jpg', '../img/evening5.jpg'];
    let index = i % imgArr.length;
    let imageSrc = imgArr[index + hour + 1];
    viewBgImage(imageSrc);
    i++  
    btn.disabled = true;
    setTimeout(function() {btn.disabled = false }, 1000);
}

const btn = document.querySelector('.btn');
btn.addEventListener('click', getImage);

//Get Name
function getName() {
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

//Set Name
function setName(e) {
    if(e.type === 'keypress') {
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        } 
    } else if (name.textContent == "") {
          getName();
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
    
}

//Get Focus
function getFocus() {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

//Set Focus
function setFocus(e) {
    if(e.type === 'keypress') {
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
        } else if(focus.textContent == "") {
            getFocus();
    } else {
            localStorage.setItem('focus', e.target.innerText);
        }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
name.addEventListener('click', clickDelName);
focus.addEventListener('click', clickDelFocus);

//Run
showTime();
setBgGreet();
backgrImg();
getName();
getFocus();



// For time test 2020, 10, 20, 20, 30, 30