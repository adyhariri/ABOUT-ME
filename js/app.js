'use strict'
alert('hello and welcome to my website ');
let userName = prompt('what is your name ? ');
alert('hello ' + userName + ' let us play guessing game ');
console.log(userName);
alert('your answer must be y/n or yes/no');
let firstQuestion = prompt("Is my age more than 20 ?").toLowerCase();
if (firstQuestion === 'y' || firstQuestion === 'yes') {
    alert('Your answer  is correct');
} else if (firstQuestion === 'n' || firstQuestion === 'no') {
    alert('Your answer is wrong');
} else {
    alert('You only can answer using y/n, yes/no. Now you will be taken to the next question');
}
let secondeQuestion = prompt("do i like animals  ?").toLowerCase();
if (secondeQuestion === 'n' || secondeQuestion === 'no') {
    alert('Your answer  is correct');
} else if (secondeQuestion === 'y' || secondeQuestion === 'yes') {
    alert('Your answer is wrong');
} else {
    alert('You only can answer using y/n, yes/no. Now you will be taken to the next question');
}
let thirdQuestion = prompt("Is my favorite color nevy?").toLowerCase();
if (thirdQuestion === 'y' || thirdQuestion === 'yes') {
    alert('Your answer  is correct');
} else if (thirdQuestion === 'n' || thirdQuestion === 'no') {
    alert('Your answer is wrong');
} else {
    alert('You only can answer using y/n, yes/no. Now you will be taken to the next question');
}
let fourthQuestion = prompt("Do i like programming?").toLowerCase();
if (fourthQuestion === 'y' || fourthQuestion === 'yes') {
    alert('Your answer  is correct');
} else if (fourthQuestion === 'n' || fourthQuestion === 'no') {
    alert('Your answer is wrong');
} else {
    alert('You only can answer using y/n, yes/no. Now you will be taken to the next question');
}
let fifthQuestion = prompt("realMadrid is the best football team?").toLowerCase();
if (fifthQuestion === 'y' || fifthQuestion === 'yes') {
    alert('sure it is correct');
} else if (fifthQuestion === 'n' || fifthQuestion === 'no') {
    alert('Your answer is wrong');
} else {
    alert('You only can answer using y/n, yes/no. Now you will be taken to the next question');
}
alert('game done , thank you ' + userName + ' for your visiting');
