let userScore = 0;
const allQuestions = [];

function createQuestion(question, options, correctOpt) {
    this.question = question;
    this.options = options;
    this.correctOpt = correctOpt;
}

function addQuestion(question, options, correctOpt) {
    return new createQuestion(question, options, correctOpt);
}

function checkAnswer(obj, answer) {
    const correctAns = obj.options[obj.correctOpt];
    const userAns = obj.options[answer];
    if (correctAns === userAns) {
        console.log('Correct!');
        userScore++;
    } else {
        console.log('Incorrect!');

    }
}

function app() {
    const q1 = addQuestion('What is the full form of JS', ['Java', 'JavaScript', 'C', 'C++'], 1)
    const q2 = addQuestion('What is the full form of C', ['Java', 'JavaScript', 'Python', 'None'], 3)
    allQuestions.push(q1)
    allQuestions.push(q2)
    checkAnswer(q1, 1);
    checkAnswer(q2, 0);
    console.log(userScore);
}



app();
