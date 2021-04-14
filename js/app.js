'use strict';
let score=0;
alert('hello and welcome to my website ');
let userName = prompt('what is your name ? ');
alert('hello ' + userName + ' let us play guessing game ');
console.log(userName);
alert('your answer must be y/n or yes/no');
let firstQuestion = prompt("Is my age more than 20 ?").toLowerCase();
function guessingAge (){
    if (firstQuestion === 'y' || firstQuestion === 'yes') {
        alert('Your answer  is correct');
        score++;
    } else if (firstQuestion === 'n' || firstQuestion === 'no') {
        alert('Your answer is wrong');
    } else {
        alert('You only can answer using y/n, yes/no. Now you will be taken to the next question');
    }    
}

guessingAge (); 


/*if (firstQuestion === 'y' || firstQuestion === 'yes') {
    alert('Your answer  is correct');
    score++;
} else if (firstQuestion === 'n' || firstQuestion === 'no') {
    alert('Your answer is wrong');
} else {
    alert('You only can answer using y/n, yes/no. Now you will be taken to the next question');
}*/

let secondeQuestion = prompt("do i like animals  ?").toLowerCase();
function animals (){
    if (secondeQuestion === 'n' || secondeQuestion === 'no') {
        alert('Your answer  is correct');
        score++;
    } else if (secondeQuestion === 'y' || secondeQuestion === 'yes') {
        alert('Your answer is wrong');
    } else {
        alert('You only can answer using y/n, yes/no. Now you will be taken to the next question');
    }
}
animals ();

/*if (secondeQuestion === 'n' || secondeQuestion === 'no') {
    alert('Your answer  is correct');
    score++;
} else if (secondeQuestion === 'y' || secondeQuestion === 'yes') {
    alert('Your answer is wrong');
} else {
    alert('You only can answer using y/n, yes/no. Now you will be taken to the next question');
}*/
let thirdQuestion = prompt("Is my favorite color nevy?").toLowerCase();
if (thirdQuestion === 'y' || thirdQuestion === 'yes') {
    alert('Your answer  is correct');
    score++;
} else if (thirdQuestion === 'n' || thirdQuestion === 'no') {
    alert('Your answer is wrong');
} else {
    alert('You only can answer using y/n, yes/no. Now you will be taken to the next question');
}
let fourthQuestion = prompt("Do i like programming?").toLowerCase();
if (fourthQuestion === 'y' || fourthQuestion === 'yes') {
    alert('Your answer  is correct');
    score++;
} else if (fourthQuestion === 'n' || fourthQuestion === 'no') {
    alert('Your answer is wrong');
} else {
    alert('You only can answer using y/n, yes/no. Now you will be taken to the next question');
}
let fifthQuestion = prompt("realMadrid is the best football team?").toLowerCase();
if (fifthQuestion === 'y' || fifthQuestion === 'yes') {
    alert('sure it is correct');
    score++;
} else if (fifthQuestion === 'n' || fifthQuestion === 'no') {
    alert('Your answer is wrong');
} else {
    alert('You only can answer using y/n, yes/no. Now you will be taken to the next question');
}
for(let i=0;i<=4;i++){
    if (i==4){
        alert('sorry you spent all your opportunities , the correct answer is 4');
        break;
    }
    let sixthQuestion = prompt ("guess which month i was born on ","use number instead of month name like 1,2,3..etc");
    if(sixthQuestion==4){
        alert('you are correct');
        score++;
        break;
    }else if (sixthQuestion<4){
        alert('too low, try again');
    }else {
        alert('too high, try again');
    }
}
let cities = ['damascus','daraa','amman','irbid','saida'];
console.log(cities);
for(let i=0 ; i<=6;i++){
    if (i==6){
        alert('sorry you spent all your opportunities , here is my favorite arabic cities :'+cities);
        break;
    }
    let siventhQuestion = prompt ("guess one of my favorite arabic cities ").toLowerCase();
    for(let j=0;j<cities.length;j++){
        if(siventhQuestion==cities[j]){
            alert('it is correct answer , here is my favorite arabic cities :'+cities);
            score++;
            j=6765;
            i=767;
        }
        
    }
}
console.log(score);
alert('your score is '+score);
alert('game done , thank you ' + userName + ' for your visiting');
