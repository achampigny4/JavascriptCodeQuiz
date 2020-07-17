$(document).ready(function () {
// HTML elements
let jsQuestion = document.getElementById("#question");
let jsAnswers = document.getElementById("#answerButtons");
let choiceA = document.querySelector(".btnA");
let choiceB = document.querySelector(".btnB");
let choiceC = document.querySelector(".btnC");
let choiceD = document.querySelector(".btnD");
let startQuiz = document.getElementById("#startBtn");
let countDown = document.getElementById("#timer");
let userScore = document.getElementById("#score");
let scoresList = document.getElementById("#HighScores");

// quiz questions and choices
// assign choices to buttons A-D
// assign correct to correct answers
// assign wrong to inccorect answers
let quiz = [{
    'question': 'question1 text here',
    'options': [
        'question1 answer A',
        'question1 answer B',
        'question1 answer C',
        'question1 answer D',
    ],
    'correctAnswer': 'B',
    'correctResponse': 'Correct',
    'incorrectResponse': 'wrong'
},
{
    'question': 'question2 text here',
    'options': [
        'question2 answer A',
        'question2 answer B',
        'question2 answer C',
        'question2 answer D',
    ],
    'correctAnswer': 'A',
    'correctResponse': 'Correct',
    'incorrectResponse': 'wrong'
},
{
    'question': 'question3 text here',
    'options': [
        'question3 answer A',
        'question3 answer B',
        'question3 answer C',
        'question3 answer D',
    ],
    'correctAnswer': 'D',
    'correctResponse': 'Correct',
    'incorrectResponse': 'wrong'
},
{
    'question': 'question4 text here',
    'options': [
        'question3 answer A',
        'question4 answer B',
        'question4 answer C',
        'question4 answer D',
    ],
    'correctAnswer': 'answer C',
    'correctResponse': 'Correct',
    'incorrectResponse': 'wrong'
}
    // end of Qs and As
];

const lastQuestion = quiz.length -1;
let currentQuestion = 0;

function loadQuestion() {
    let q = quiz[currentQuestion];
    // console.log(q);
    question.innerHTML = "<h4>" + q.question + "<h4>";
    choiceA.innerHTML = q.options[0];
    choiceB.innerHTML = q.options[1];
    choiceC.innerHTML = q.options[2];
    choiceD.innerHTML = q.options[3];
    // console.log(q.options);
    // loop through questions and answers
    // for (var i = 0; i < question[this.currentQuestion].answers.length; i++); {
        //         questionContainer.append('<h4 id="question"' + q[this.currentQuestion].answers[i]
//             + '>' + q[this.currentQuestion].answers[i] + '</h4>');
//     }
}

// function loadQuestion() {
//     let question = {
//         quizQuestions: question,
//         currentQuestion: 0,
//         correct: 0,
//         inccorect: 0,
//     }
//     question.html('<h4 id="question">' + question[this.currentQuestion].question + '</h4>');
//     //   this = questions
//     for (var i = 0; i < question[this.currentQuestion].answers.length; i++) {
//         card.append('<h4 id="question"' + questions[this.currentQuestion].answers[i]
//             + '>' + question[this.currentQuestion].answers[i] + '</h4>');
//     }
// }

// "quiz question" get replaced with the actual question once start button clicked
// quiz questions get shuffled
// function nextQuestion(){

// }

// let score = 0;
// buttons A-D get replaced by answers when start button is clicked
// function that switches to the next question after anwer is selected
// not rewquired but would be nice high score page arranges scores descending from top score(sort functions for arrays)

// global vars
// let countDown = 60; //needed for accessing to subtract time for wrong answers
//set score of the countDown time
// 60 second timer counts down when start button is clicked
$("#startBtn").click(function () {
    loadQuestion();
    let count = 60;
    let counter = setInterval(timer, 1000);
    function timer() {
        count = count - 1;
        if (count <= 0) {
            clearInterval(counter);
            // when timer ends user is prompted to enter initials
            // prompt("Times up! Enter your initials:" + "");
            // prompt closes user initials get stored in localStorage
            // score shows and is sent to local storage with initials
        }

        document.getElementById("timer").innerHTML = count + " seconds";
    };
});

// time gets removed from timer when answer is wrong

// a link to another page to show top 5 scores
// score and user initials displayed on highscore page


});