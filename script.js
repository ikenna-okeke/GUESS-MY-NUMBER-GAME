'use strict';
const guess = document.querySelector('.guess');
let numberValue = document.querySelector('.number').textContent;
const random = Math.trunc(Math.random() * 21);
const high = document.querySelector('.highscore').textContent;

let count = 20;
let playing;

//N:B DONT EVER ASSIGN A VARIABLE TO THE TEXT CONTENT eg const score= document.querySelector('.score').textContent, instead input the (document.querySelector('.score').textContent) directly into anywhere it is needed
let highscore;
document.querySelector('.check').addEventListener('click', function () {
  const guessValue = Number(guess.value);
  if (count >= 1) {
    playing = true;
    if (guessValue === random) {
      document.querySelector('.message').textContent = 'CORRECT';
      document.querySelector('.number').textContent = random;
      document.querySelector('body').style.backgroundColor = 'green';
      highscore = count > Number(high) ? count : highscore;
      document.querySelector('.highscore').textContent = highscore;
    } else if (guessValue > random) {
      document.querySelector('.message').textContent = 'Value too high';
      count--;
      document.querySelector('.score').textContent = count;
    } else if (guessValue < random) {
      document.querySelector('.message').textContent = 'value too low';
      count--;
      document.querySelector('.score').textContent = count;
    }
  } else if (count < 0) {
    playing = false;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  playing = true;
  count = 20;
  document.querySelector('.score').textContent = count;
  document.querySelector('body').style.backgroundColor = 'black';
  guess.value = '';
  document.querySelector('.highscore').textContent = '0';
  document.querySelector('.message').textContent = 'start guessing.....';
  document.querySelector('.number').textContent = '?';

  document.querySelector('.highscore').textContent = highscore;
});
