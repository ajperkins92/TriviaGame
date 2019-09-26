$(document).ready() 



console.log("Welcome to the quiz!");

// Setting global variables

var correctAnswers = 0;
console.log("Correct Answers: " + correctAnswers);
var incorrectAnswers = 0;
console.log("Incorrect Answers: " + incorrectAnswers);


$("#time-remaining").html(timerDisplay);

  //Game Timer 
  var timerDisplay = 60;
  var timer = setInterval(function () {
    timerDisplay--;
    $("#time-remaining").text(timerDisplay);
    if (timerDisplay <= 0)
      clearInterval(timer);
      else if (timerDisplay === 0) 
      alert ("Time's up!");
     }, 1000)


// Question 1


var userAnswerQ1 = $('input[name="Question-1"]:checked').val();
var q1Answer = "A: Target Field";

console.log("Q1 User Guess: " + userAnswerQ1);
console.log("Expected Answer: " + q1Answer);

if (userAnswerQ1 = q1Answer) {
    correctAnswers++;
}
else {
    incorrectAnswers++;
}

// Question 2


var userAnswerQ2 = $('input[name="Question-2"]:checked').val();
var q2Answer = "C: Harmon Killebrew";

console.log("Q2 User Guess: " + userAnswerQ2);
console.log("Expected Answer: " + q2Answer);

if (userAnswerQ2 = q2Answer) {
    correctAnswers++;
}
else {
    incorrectAnswers++;
}

// Question 3

var userAnswerQ3 = $('input[name="Question-3"]:checked').val();
var q3Answer = "B: The Metrodome";

console.log("Q3 User Guess: " + userAnswerQ3);
console.log("Expected Answer: " + q3Answer);

if (userAnswerQ3 = q3Answer) {
    correctAnswers++;
}
else {
    incorrectAnswers++;
}

// Question 4

var userAnswerQ4 = $('input[name="Question-4"]:checked').val();
var q4Answer = "D: 2019";

console.log("Q4 User Guess: " + userAnswerQ4);
console.log("Expected Answer: " + q4Answer);

if (userAnswerQ4 = q4Answer) {
    correctAnswers++;
}
else {
    incorrectAnswers++;
}

// Question 5

var userAnswerQ5 = $('input[name="Question-5"]:checked').val();
var q5Answer = "B: Joe Mauer";

console.log("Q5 User Guess: " + userAnswerQ5);
console.log("Expected Answer: " + q5Answer);

if (userAnswerQ5 = q5Answer) {
    correctAnswers++;
}
else {
    incorrectAnswers++;
}

// Question 6

var userAnswerQ6 = $('input[name="Question-6"]:checked').val();
var q6Answer = "C: 1991";

console.log("Q6 User Guess: " + userAnswerQ6);
console.log("Expected Answer: " + q6Answer);

if (userAnswerQ6 = q6Answer) {
    correctAnswers++;
}
else {
    incorrectAnswers++;
}

// Question 7

var userAnswerQ7 = $('input[name="Question-7"]:checked').val();
var q7Answer = "B: Washington Senators";

console.log("Q7 User Guess: " + userAnswerQ7);
console.log("Expected Answer: " + q7Answer);

if (userAnswerQ7 = q7Answer) {
    correctAnswers++;
}
else {
    incorrectAnswers++;
}

// Question 8

var userAnswerQ8 = $('input[name="Question-8"]:checked').val();
var q8Answer = "D: 2019";

console.log("Q8 User Guess: " + userAnswerQ8);
console.log("Expected Answer: " + q8Answer);

if (userAnswerQ8 = q8Answer) {
    correctAnswers++;
}
else {
    incorrectAnswers++;
}

// Question 9

var userAnswerQ9 = $('input[name="Question-9"]:checked').val();
var q9Answer = "B: The Mall of America";

console.log("Q9 User Guess: " + userAnswerQ9);
console.log("Expected Answer: " + q9Answer);

if (userAnswerQ9 = q9Answer) {
    correctAnswers++;
}
else {
    incorrectAnswers++;
}

// Question 10

var userAnswerQ10 = $('input[name="Question-10"]:checked').val();
var q10Answer = "A: Alex Perkins";

console.log("Q10 User Guess: " + userAnswerQ10);
console.log("Expected Answer: " + q10Answer);

if (userAnswerQ10 = q10Answer) {
    correctAnswers++;
}
else {
    incorrectAnswers++;
}