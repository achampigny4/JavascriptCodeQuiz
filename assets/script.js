// $(document).ready(function () {
let jsQuestion = document.getElementById("#question");
let jsAnswers = document.getElementById("#answerButtons");
let startQuiz = document.getElementById("#startBtn");
let countDown = document.getElementById("#timer");
let userScore = document.getElementById("#score");
let scoresList = document.getElementById("#HighScores");

// quiz questions and choices
// assign choices to buttons A-D
// assign correct to correct answers
// assign wrong to inccorect answers
const quiz = [ {
    'question': 'question1 text here',
    'options': [
        'answer A',
        'answer B',
        'answer C',
        'answer D',
    ],
    'correctAnswer': 'B',
    'correctResponse': 'Correct',
    'incorrectResponse': 'wrong'
},
{
    'question': 'question2 text here',
    'options': [
        'answer A',
        'answer B',
        'answer C',
        'answer D',
    ],
    'correctAnswer': 'A',
    'correctResponse': 'Correct',
    'incorrectResponse': 'wrong'
},
{
    'question': 'question3 text here',
    'options': [
        'answer A',
        'answer B',
        'answer C',
        'answer D',
    ],
    'correctAnswer': 'D',
    'correctResponse': 'Correct',
    'incorrectResponse': 'wrong'
},
{
    'question': 'question4 text here',
    'options': [
        'answer A',
        'answer B',
        'answer C',
        'answer D',
    ],
    'correctAnswer': 'answer C',
    'correctResponse': 'Correct',
    'incorrectResponse': 'wrong'
    // console.log(C); //code not working?
}
// console.log('quiz')
// end of Qs and As
];

// "quiz question" get replaced with the actual question once start button clicked
// quiz questions get shuffled
// function nextQuestion(){

// }

// function loadQuestion() { 

// }


// buttons A-D get replaced by answers when start button is clicked
// function that switches to the next question after anwer is selected
// high score page arranges scores descending from top score(sort functions for arrays)


// 60 second timer counts down when start button is clicked
$("#startBtn").click(function(){
    loadQuestion(); 
let count = 60;
let counter = setInterval(timer, 1000);
function timer() {
    count = count - 1;
    if (count <= 0) {
        clearInterval(counter);
        // when timer ends user is prompted to enter initials
        // prompt("Times up! Enter your initials:" + "");
        // score and user initials gets sent to local storage and displayed on highscore page
        // then score is shown
    }

    document.getElementById("timer").innerHTML=count + " seconds";
};
});

// time gets removed from timer when answer is wrong
// a link to another page to show top 5 scores





// };