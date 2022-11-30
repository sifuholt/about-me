'use strict';

console.log('Hey world hey!!');

let userName = prompt('what is your name?');

alert(`welcome to my site ${userName}! Pleast answer the following questions with a yes/no or y/n`);

let questionOneGuess = prompt('Do i have a daughter?').toLowerCase();

if(questionOneGuess === 'yes' || questionOneGuess === 'y'){
  alert('you got it right');
} else if( questionOneGuess === 'no' || questionOneGuess === 'n'){
  alert('sorry, you got it wrong');
}

