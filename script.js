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
    const q1 = addQuestion('What is the full form of JS', ['Java', 'JavaScript', 'C', 'C++'], 1);
    allQuestions.push(q1);
    const q2 = addQuestion('What is the full form of C', ['Java', 'JavaScript', 'Python', 'None'], 3);
    allQuestions.push(q2);
    
}

function createCard(obj, qNum) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';

    const quesDiv = document.createElement('div');
    quesDiv.className = 'question';
    quesDiv.textContent = obj.question

    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'options'

    const input1 = document.createElement('input');
    input1.type = 'radio';
    input1.name = `options${qNum}`;
    input1.id = `options${qNum}-0`;
    const label1 = document.createElement('label');
    label1.setAttribute('for', `options${qNum}-0`);
    label1.textContent = obj.options[0];

    const input2 = document.createElement('input');
    input2.type = 'radio';
    input2.name = `options${qNum}`;
    input2.id = `options${qNum}-1`;
    const label2 = document.createElement('label');
    label2.setAttribute('for', `options${qNum}-1`);
    label2.textContent = obj.options[1];
    
    const input3 = document.createElement('input');
    input3.type = 'radio';
    input3.name = `options${qNum}`;
    input3.id = `options${qNum}-2`;
    const label3 = document.createElement('label');
    label3.setAttribute('for', `options${qNum}-2`);
    label3.textContent = obj.options[2];

    const input4 = document.createElement('input');
    input4.type = 'radio';
    input4.name = `options${qNum}`;
    input4.id = `options${qNum}-3`;
    const label4 = document.createElement('label');
    label4.setAttribute('for', `options${qNum}-3`);
    label4.textContent = obj.options[3];

    const subBtn = document.createElement('button');
    subBtn.className = 'sub-btn';
    subBtn.textContent = 'Submit';

    cardDiv.appendChild(quesDiv);
    optionsDiv.appendChild(input1);
    optionsDiv.appendChild(label1);
    optionsDiv.appendChild(input2);
    optionsDiv.appendChild(label2);
    optionsDiv.appendChild(input3);
    optionsDiv.appendChild(label3);
    optionsDiv.appendChild(input4);
    optionsDiv.appendChild(label4);
    cardDiv.appendChild(optionsDiv);
    
    cardDiv.appendChild(subBtn);

    document.querySelector('.col-1').appendChild(cardDiv);
    
}

function DOM() {
    for (let i = 0; i < allQuestions.length; i++) {
        createCard(allQuestions[i], i)
    }
}


app();
