const data = []; // contains all the data to push to local storage
const allQuestions = [];
let score = 0;
let currentQnaNum = 1;

// question making factory
class Questions {
  constructor(question, options, correctOpt, userInput = null) {
    this.question = question;
    this.options = options;
    this.correctOpt = correctOpt;
    this.userInput = userInput;
  }

  checkCorrectOpt() {
    if (this.userInput == this.correctOpt) {
      score += 1;
      console.log(`Correct! Updated score is ${score}`);
    } else {
      console.log(`Incorrect! Score is ${score}`);
    }
  }
}

// Add your question here
(function createQuestion() {
  let q1 = new Questions(
    "Which of the following is NOT a JavaScript data type?",
    ["String", "Number", "Boolean", "Array"],
    "Array"
  );
  allQuestions.push(q1);

  let q2 = new Questions(
    "What does NaN stand for in JavaScript?",
    ["Not a Number", "Not a Number", "Not a Number", "Not a Number"],
    "Not a Number"
  );
  allQuestions.push(q2);

  let q3 = new Questions(
    "Which method is used to add an element to the end of an array in JavaScript?",
    ["push()", "pop()", "shift()", "unshift()"],
    "push()"
  );
  allQuestions.push(q3);

  let q4 = new Questions(
    "Which of the following keywords is used to declare a variable that cannot be reassigned in JavaScript?",
    ["var", "let", "const", "function"],
    "const"
  );
  allQuestions.push(q4);
})();

function showQnaInDOM(qNum) {
  let question = allQuestions[qNum - 1];
  document.querySelector(".question").textContent = question.question;
  let tmp = 0;
  document.querySelectorAll("li").forEach((item) => {
    item.textContent = question.options[tmp];
    tmp++;
  });
}

document.querySelector(".next-btn").addEventListener("click", () => {
  if (allQuestions[currentQnaNum - 1].userInput != null) {
    if (currentQnaNum < allQuestions.length) currentQnaNum++;
    if (currentQnaNum == allQuestions.length) {
      document.querySelector(".next-btn").textContent = "Submit";
    }
    showQnaInDOM(currentQnaNum);
  }
});
