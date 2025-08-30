const submitButton = document.getElementById('submit-answer');

function checkAnswer(){
    const quizFeedback = document.getElementById('feedback');
    const correctAnswer = '4';
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    if (userAnswer === correctAnswer){
        quizFeedback.textContent = 'Correct! Well done.';
    }
    else{
        quizFeedback.textContent = "That's incorrect. Try again!";
    }
};

submitButton.addEventListener('click',checkAnswer);