//var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';
var myImage = document.querySelector('img');

myImage.onclick = function () {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'img/firefox-icon.png') {
    myImage.setAttribute('src', 'img/bild.png');
  } else {
    myImage.setAttribute('src', 'img/firefox-icon.png');
  }
}
var myButton = document.querySelector('.button');
var myButtonClear = document.querySelector('.clearButton')
var myHeading = document.querySelector('h1');
var user = 'tobi';

function showUser(){
  myHeading.textContent = 'Mozilla is cool, ' + user;
}

if (myHeading.textContent == 'Mozilla is cool') {
  
  showUser();
  }
  

function clearUserName() {
  localStorage.clear();
}

function setUserName() {
  
  myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')) {


  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;

}


myButton.onclick = function () {
  setUserName();
}

myButtonClear.onclick = function() {
  clearUserName();
}
