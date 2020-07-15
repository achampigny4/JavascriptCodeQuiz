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
// "quiz question" get replaced with the actual question once start button clicked
// buttons A-D get replaced by answers when start button is clicked
// function that switches to the next question after anwer is selected
// timer counts down when start button is clicked
$("#startBtn").click(function(){
let count = 60;
let counter = setInterval(timer, 1000);
function timer() {
    count = count - 1;
    if (count <= 0) {
        clearInterval(counter);
        // when timer ends user is prompted to enter initials
        // prompt("Times up! Enter your initials:" + "");
        // initials and score gets sent to local storage a displayed on highscore page
        // then score is shown
    }
    document.getElementById("timer").innerHTML=count + " seconds";
};
});

// time gets removed from timer when answer is wrong
// timer gets to the final zero score is shown in your score
// promt to add user initials
// score and user initials gets saved to local storage
// a link to another page to show top 5 scores





// }