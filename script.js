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

var isPaused = false;

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
        dayAll.style.zIndex = '0';
        dayAll.style.color = '#8a8a8a';

        sunday.style.zIndex = '99999';
        sunday.style.color = '#00ff97';
      } else if (day === 1) {
        dayAll.style.zIndex = '0';
        dayAll.style.color = '#8a8a8a';

        monday.style.zIndex = '99999';
        monday.style.color = '#00ff97';
      } else if (day === 2) {
        dayAll.style.zIndex = '0';
        dayAll.style.color = '#8a8a8a';

        thuesday.style.zIndex = '99999';
        thuesday.style.color = '#00ff97';
      } else if (day === 3) {
        dayAll.style.zIndex = '0';
        dayAll.style.color = '#8a8a8a';

        wednesday.style.zIndex = '99999';
        wednesday.style.color = '#00ff97';
      } else if (day === 4) {
        dayAll.style.zIndex = '0';
        dayAll.style.color = '#8a8a8a';

        thursday.style.zIndex = '99999';
        thursday.style.color = '#00ff97';
      } else if (day === 5) {
        dayAll.style.zIndex = '0';
        dayAll.style.color = '#8a8a8a';

        friday.style.zIndex = '99999';
        friday.style.color = '#00ff97';
      } else if (day === 6) {
        dayAll.style.zIndex = '0';
        dayAll.style.color = '#8a8a8a';

        saturday.style.zIndex = '99999';
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
