'use strict';

console.log('Hey world hey!!');

let score = 0;

let userName = prompt('Hi, What is your name?');

alert(`Welcome to my site ${userName}! Please answer the following questions with a yes/no or y/n`);

let questionOneGuess = prompt('Is this my first time ever doing anyting with computers?').toLowerCase();

if(questionOneGuess === 'yes' || questionOneGuess === 'y'){
  alert('You got it right');
  score++;
} else if( questionOneGuess === 'no' || questionOneGuess === 'n'){
  alert('Sorry, not sure that response is correct.');
}

let questionTwoGuess = prompt('Was I ever in the military?').toLowerCase();

if(questionTwoGuess === 'yes' || questionTwoGuess === 'y'){
  alert('You got it right');
  score++;
} else if( questionTwoGuess === 'no' || questionTwoGuess === 'n'){
  alert('Sorry, not sure that response is correct.');
}

let questionThreeGuess = prompt('Am I happily married with children?').toLowerCase();

if(questionThreeGuess === 'yes' || questionThreeGuess === 'y'){
  alert('You got it right');
  score++;
} else if( questionThreeGuess === 'no' || questionThreeGuess === 'n'){
  alert('Sorry, not sure that response is correct.');
}

let questionFourGuess = prompt('Do I live in Oregon?').toLowerCase();

if(questionFourGuess === 'yes' || questionFourGuess === 'y'){
  alert('You got it right');
  score++;
} else if( questionFourGuess === 'no' || questionFourGuess === 'n'){
  alert('Sorry, not sure that response is correct.');
}

let questionFiveGuess = prompt('Am I having fun learning this?').toLowerCase();

if(questionFiveGuess === 'yes' || questionFiveGuess === 'y'){
  alert('You got it right');
  score++;
} else if( questionFiveGuess === 'no' || questionFiveGuess === 'n'){
  alert('Sorry, not sure that response is correct.');
}


let attempt = 4;
let myNum = 7;

for(let i=0; i < attempt; i++){
  let questionSixGuess = prompt('Please guess a number between 0 and 10');

  if(myNum == questionSixGuess) {
    alert('Wow! I can not believe you got that right so fast!');
    break;
  } else if (questionSixGuess <= 6){
    alert('Try a higher number...');
  }else if (questionSixGuess >= 8){
    alert('Nice try, but I am looking for something lower...');
  }else {
    alert('Nice tries...the number was 7!');
  }
}
let bookAnswer = ['three body problem', 'infinite jest', 'ulysses'];

let guesses = 6;

for(let i=0; i < guesses; i++){
  let questionSevenGuess = prompt('How about a game? Of the books I listed, what would you think are my top three?').toLowerCase();
  for (let b = 0; b < bookAnswer.length; b++) {
    if (questionSevenGuess == bookAnswer[b]) {
      alert('Wow!!!...you either really know me, or are very good at guessing!');
      score++;
      i = 6;
      break;
    }
  }
}





alert(`Thanks for coming to my site and getting to know me better ${userName}, I look forward to us getting to know one another better!`);

alert(`Outstanding! ${userName} you got ${score} out of 5 correct! That is some good guessing...you should play the lottery!`);
