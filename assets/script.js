$(document).ready(function () {
    // HTML elements

    //quiz
    let jsQuestion = document.getElementById("#question");
    let choiceA = document.querySelector(".btnA");
    let choiceB = document.querySelector(".btnB");
    let choiceC = document.querySelector(".btnC");
    let choiceD = document.querySelector(".btnD");
    let countDown = document.getElementById("#timer");
    let lastScore = document.getElementById("#score");//display last score
    let scoresList = document.getElementById("#HighScores");//creat button to score page
    //scores page
    let userScore = document.getElementById("#yourScore");
    let userInitialsEl = document.getElementById("#initials");
    let submitUser = document.getElementById("#submitBtn");

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
        'correctAnswer': 'question1 answer B',
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
        'correctAnswer': 'question2 answer A',
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
        'correctAnswer': 'question3 answer D',
        'correctResponse': 'Correct',
        'incorrectResponse': 'wrong'
    },
    {
        'question': 'question4 text here',
        'options': [
            'question4 answer A',
            'question4 answer B',
            'question4 answer C',
            'question4 answer D',
        ],
        'correctAnswer': 'question4 answer C',
        'correctResponse': 'Correct',
        'incorrectResponse': 'wrong'
    }
        // end of Qs and As
    ];

    //global variables

    //set interval
    let counter;
    //countDown time
    let count = 60; //access timer to subtract time for wrong answers and is the score
    //end quiz when last question answered
    let lastQuestion = quiz.length - 1;
    //determine right or wrong?
    let currentQuestion = 0;
    // submt=true, //?
    // picked; //?


    //global functions

    // hide score page
    $('#scorePage').css('display', 'none');

    // 60 second count down timer moved outside of on click event to get the time to store time in local storage for score
    function startCountDown() {
        counter = setInterval(function () {
            count--;
            document.getElementById("timer").innerHTML = count + " seconds";
            if (count <= 0) {
                clearInterval(counter);
            }
        }, 1000);

    };

    //displays quiz questions and answer options
    function loadQuestion() {
        let q = quiz[currentQuestion];
        // console.log(q);
        question.innerHTML = "<h4>" + q.question + "<h4>";
        choiceA.innerHTML = q.options[0];
        choiceB.innerHTML = q.options[1];
        choiceC.innerHTML = q.options[2];
        choiceD.innerHTML = q.options[3];
    };

    // next question and options from quiz
    function nextQuestion() {
        // checks to see if there is a next q and a in the quiz
        if (currentQuestion < quiz.length - 1) {
            // increment the question index
            currentQuestion++;
            loadQuestion();
            // displays the new question and answers
        }
        if (currentQuestion >= quiz.length) {
            clearTimeout(count);
            endQuiz();
        };
    };

    //stops timer
    function endQuiz() {
        //stops timer
        clearInterval(counter);
        // // shows score page
        $('#scorePage').css('display', 'block');
        // hides the questions, options, start button, timer your score and high scores button
        $('#questionContainer').css('display', 'none');
        $('.info').css('display', 'none');

    };

    //click events

    //start button click event
    $("#startBtn").click(function () {
        // "quiz question" gets replaced with the actual question once start button clicked
        loadQuestion();
        //timer begin count down when start button clicked
        startCountDown();
    });
    /////////////  need to determine if user answered right or wrong   //////////////////////////////
    //answersButton clicked nextQuestion and answer options display
    $("#answerButtons").click(function (event) {
        let answerSelected = event.target;
        // console.log(quiz[currentQuestion]);
        if (quiz[currentQuestion]['options'][event] == quiz[currentQuestion]['correctAnswer']) {
            //correct add time to timer
            count += 10;
        } else {
            //wrong remove time from timer
            count -= 10;
        };
        //stop timer when last question answered.
        if (currentQuestion == 3) {
            endQuiz();
        } else {
            nextQuestion();
        }
        // userAnswer();
    });
    //////////////////////////////////////////////////////////////////////////////////////////////////

    // when timer ends switch to just page with user is prompted to enter initials
    //hide quiz container and shower local storage?
    // prompt("Times up! Enter your initials:" + "");
    // user initials get stored in localStorage
    // score shows and is sent to local storage with initials
    //set score of the countDown time
    // a link to another page to show top 5 scores
    // score and user initials displayed on highscore page
    // not required high score page arranges scores descending from top score(sort functions for arrays)



    //local storage section

});