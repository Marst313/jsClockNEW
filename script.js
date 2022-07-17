'use strict';

const time = document.querySelector('.time p');
const hourA = document.querySelector('.hour .a1');
const hourA2 = document.querySelector('.hour .a2');

// INIT
window.setInterval(date, 1000);
function date() {
  var d = new Date();
  time.textContent = d.toLocaleTimeString('en-GB');
}

//12HOUR
hourA.addEventListener('click', function () {
  time.classList.add('animasi');
  time.classList.remove('flip-vertical-fwd');
  hourA.style.color = '#00ff97';
  hourA2.style.color = '#8a8a8a';
});

// 24HOUR

hourA2.addEventListener('click', function () {
  time.classList.remove('animasi');
  time.classList.add('flip-vertical-fwd');
  hourA.style.color = '#8a8a8a';
  hourA2.style.color = '#00ff97';
});
// window.setInterval(ut, 1000);

// function ut() {
//   var d = new Date();
//   document.querySelector('.time').innerHTML = d.toLocaleTimeString();
// }
