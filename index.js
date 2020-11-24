var readlineSync = require('readline-sync');
console.log("Welcome to the Quiz");
var username = readlineSync.question('Enter your Name: ');
console.log('Welcome,', username, 'Let\'s Start the Quiz!! ');

var score = 0;

function quiz(question, answer) {
    var userAnswer = readlineSync.question(question);

    if (userAnswer.toLowerCase() === answer.toLowerCase()) {
        console.log('You are Right!!');
        score = score + 1;
    } else {
        console.log('You are Wrong!!');
        score = score - 1;
    }

    console.log('Your Score is: ', score);
    console.log('----------------------------');
}

var questions = [
    { question: 'Where do Sushmitha live? ', answer: 'Bangalore' },
    { question: "What's Sushmitha's Age? ", answer: '24' },
    { question: "What's Sushmitha's Favourite Color? ", answer: 'Blue' },
    { question: "What's Sushmitha's Favourite Food? ", answer: 'Biryani' }
];

for (var i = 0; i < questions.length; i++) {
    quiz(questions[i].question, questions[i].answer);
}

console.log('Your Final Score is: ', score);