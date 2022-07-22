'use strict';

// Selection
const time = document.querySelector('.time p');
const tanggal = document.querySelector('.date p');
const hourA = document.querySelector('.hour .a1');
const hourA2 = document.querySelector('.hour .a2');

// Hari
const sunday = document.querySelector('.day p:nth-child(1)');
const monday = document.querySelector('.day p:nth-child(2)');
const thuesday = document.querySelector('.day p:nth-child(3)');
const wednesday = document.querySelector('.day p:nth-child(4)');
const thursday = document.querySelector('.day p:nth-child(5)');
const friday = document.querySelector('.day p:nth-child(6)');
const saturday = document.querySelector('.day p:nth-child(7)');
const dayAll = document.querySelector('.day');

const warnaDasar = (dayAll.style.color = '#8a8a8a');
const posisiStatic = (dayAll.style.position = 'static');
var isPaused = false;

// Media querry

// Check if the media query is true

// INIT inisialiasasi
function init() {
  if (!isPaused) {
    window.setInterval(date, 1000);
    function date() {
      var d = new Date();
      time.textContent = d.toLocaleTimeString(`${isPaused === true ? 'en-US' : 'en-GB'}`);
      tanggal.textContent = d.toLocaleDateString();

      // Menampilkan Hari
      let day = d.getDay();
      if (day === 0) {
        warnaDasar;
        posisiStatic;

        sunday.style.position = 'block';
        sunday.style.display = '-webkit-box';
        sunday.style.color = '#00ff97';
      } else if (day === 1) {
        warnaDasar;
        posisiStatic;

        sunday.style.position = 'block';
        sunday.style.display = '-webkit-box';
        monday.style.color = '#00ff97';
      } else if (day === 2) {
        warnaDasar;
        posisiStatic;

        thuesday.style.position = 'block';
        thuesday.style.display = '-webkit-box';
        thuesday.style.color = '#00ff97';
      } else if (day === 3) {
        warnaDasar;
        posisiStatic;

        wednesday.style.position = 'block';
        wednesday.style.display = '-webkit-box';
        wednesday.style.color = '#00ff97';
      } else if (day === 4) {
        warnaDasar;
        posisiStatic;

        thursday.style.position = 'block';
        thursday.style.display = '-webkit-box';
        thursday.style.color = '#00ff97';
      } else if (day === 5) {
        warnaDasar;
        posisiStatic;

        friday.style.position = 'block';
        friday.style.display = '-webkit-box';
        friday.style.color = '#00ff97';
      } else if (day === 6) {
        warnaDasar;
        posisiStatic;

        saturday.style.position = 'block';
        saturday.style.display = '-webkit-box';
        saturday.style.color = '#00ff97';
      }
    }
  }
}

init();

//12HOUR
hourA.addEventListener('click', function () {
  isPaused = true;
  init();
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
  isPaused = false;
});

// const d = new Date();
// let day = d.getDay()
// document.getElementById("demo").innerHTML = day;
