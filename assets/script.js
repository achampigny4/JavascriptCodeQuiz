$(document).ready(function () {
    // HTML elements

    //quiz
    let question = document.querySelector("#question");
    let choiceA = document.querySelector(".btnA");
    let choiceB = document.querySelector(".btnB");
    let choiceC = document.querySelector(".btnC");
    let choiceD = document.querySelector(".btnD");
    let countDown = document.getElementById("#timer");
    let lastScore = document.getElementById("#score");//display last score
    let scoresList = document.getElementById("#HighScores");//creat button to score page
    //scores page
    let userScore = document.getElementById("#yourScore");
    let initialsInput = document.getElementById("#initials");
    let submitUser = document.getElementById("#submitBtn");

    // quiz questions and choices from https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS
    // assign correct to correct answers
    // assign wrong to inccorect answers
    const quiz = [{
        'question': 'What is the correct syntax for referring to an external script called "xxx.js"?',
        'options': [
            '<script src="xxx.js">',
            '<script name="xxx.js">',
            '<script href="xxx.js">',
            '<script alt="xxx.js',
        ],
        'correctAnswer': '<script src="xxx.js">',
        'correctResponse': 'Correct',
        'incorrectResponse': 'wrong'
    },
    {
        'question': 'How do you write "Hello World" in an alert box?',
        'options': [
            'msg("Hello World");',
            'alertBox("Hello World");',
            'msgBox("Hello World");',
            'alert("Hello World"); ',
        ],
        'correctAnswer': 'alert("Hello World"); ',
        'correctResponse': 'Correct',
        'incorrectResponse': 'wrong'
    },
    {
        'question': 'How to write an IF statement in JavaScript?',
        'options': [
            'if i = 5 then',
            'if (i == 5)  ',
            'if i = 5',
            'if i == 5 then',
        ],
        'correctAnswer': 'if (i == 5)  ',
        'correctResponse': 'Correct',
        'incorrectResponse': 'wrong'
    },
    {
        'question': 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        'options': [
            'if (i <> 5)',
            'if i =! 5 then',
            'if (i != 5) ',
            'if i <> 5',
        ],
        'correctAnswer': 'if (i != 5) ',
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
            if (count == 0) {
                clearInterval(counter);
                endQuiz();
            }
        }, 1000);

    };

    //displays quiz questions and answer options
    function loadQuestion() {
        let q = quiz[currentQuestion];
        question.textContent = q.question;
        choiceA.textContent = q.options[0];
        choiceB.textContent = q.options[1];
        choiceC.textContent = q.options[2];
        choiceD.textContent = q.options[3];
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

    //local storage section
    //////////////////////////////////////////////////////////////////////////////////////////////////

});