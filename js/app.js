'use strict';

console.log('Hey world hey!!');

let userName = prompt('Hi, What is your name?');

alert(`Welcome to my site ${userName}! Please answer the following questions with a yes/no or y/n`);

let questionOneGuess = prompt('Have I ever done anything with computers before?').toLowerCase();

if(questionOneGuess === 'yes' || questionOneGuess === 'y'){
  alert('You got it right');
} else if( questionOneGuess === 'no' || questionOneGuess === 'n'){
  alert('Sorry, not sure that response is correct.');
}

let questionTwoGuess = prompt('Was I ever in the military?').toLowerCase();

if(questionTwoGuess === 'yes' || questionTwoGuess === 'y'){
  alert('You got it right');
} else if( questionTwoGuess === 'no' || questionTwoGuess === 'n'){
  alert('Sorry, not sure that response is correct.');
}

let questionThreeGuess = prompt('Am I happily married with children?').toLowerCase();

if(questionThreeGuess === 'yes' || questionThreeGuess === 'y'){
  alert('You got it right');
} else if( questionThreeGuess === 'no' || questionThreeGuess === 'n'){
  alert('Sorry, not sure that response is correct.');
}

let questionFourGuess = prompt('Do I live in Oregon?').toLowerCase();

if(questionFourGuess === 'yes' || questionFourGuess === 'y'){
  alert('You got it right');
} else if( questionFourGuess === 'no' || questionFourGuess === 'n'){
  alert('Sorry, not sure that response is correct.');
}

let questionFiveGuess = prompt('Am I having fun learning this?').toLowerCase();

if(questionFiveGuess === 'yes' || questionFiveGuess === 'y'){
  alert('You got it right');
} else if( questionFiveGuess === 'no' || questionFiveGuess === 'n'){
  alert('Sorry, not sure that response is correct.');
}

alert(`Thanks for coming to my site and getting to know me better ${userName}, I look forward to us getting to know one another better`);

