'use strict';
let score=0;
let questionsArray=['Is my age more than 20 ?','do i like animals  ?','Is my favorite color nevy?','Do i like programming?','realMadrid is the best football team?'];
function yesAndNoQuestions(questionNumber){
    let askFromArray=prompt(questionsArray[questionNumber-1]);
    if (askFromArray === 'y' || askFromArray === 'yes') {
        alert('Your answer  is correct');
        score++;
    } else if (askFromArray === 'n' || askFromArray === 'no') {
        alert('Your answer is wrong');
    } else {
        alert('You only can answer using y/n, yes/no. Now you will be taken to the next question');
    }    
}
alert('hello and welcome to my website ');
let userName = prompt('what is your name ? ');
alert('hello ' + userName + ' let us play guessing game ');
alert('your answer must be y/n or yes/no');

yesAndNoQuestions(1);
yesAndNoQuestions(2);
yesAndNoQuestions(3);
yesAndNoQuestions(4);
yesAndNoQuestions(5);

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
alert('your score is '+score);
alert('game done , thank you ' + userName + ' for your visiting');
