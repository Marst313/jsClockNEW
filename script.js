'use strict';

const time = document.querySelector('.time p');
const hourA = document.querySelector('.hour .a1');
const hourA2 = document.querySelector('.hour .a2');

hourA.addEventListener('click', function () {
  time.classList.add('animasi');
  time.classList.remove('flip-vertical-fwd');
  time.textContent = '2:05:23 PM';
  hourA.style.color = '#00ff97';
  hourA2.style.color = '#8a8a8a';
});

hourA2.addEventListener('click', function () {
  time.classList.remove('animasi');
  time.classList.add('flip-vertical-fwd');
  time.textContent = '14:05:23';
  hourA.style.color = '#8a8a8a';
  hourA2.style.color = '#00ff97';
});
