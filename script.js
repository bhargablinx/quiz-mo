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

function checkAnswer(obj, answer, btn) {
    const correctAns = obj.options[obj.correctOpt];
    const userAns = answer;
    if (correctAns === userAns) {
        console.log('Correct!');
        userScore++;
        document.querySelector('.score').textContent = userScore;
        btn.style.backgroundColor = 'green';
        btn.style.color = 'white';
    } else {
        console.log('Incorrect!');
        btn.style.color = 'white';
        btn.style.backgroundColor = 'red';
    }
}

function app() {
    const q1 = addQuestion('What is the full form of JS', ['Java', 'JavaScript', 'C', 'C++'], 1);
    allQuestions.push(q1);
    const q2 = addQuestion('What is the full form of C', ['Java', 'JavaScript', 'Python', 'None'], 3);
    allQuestions.push(q2);
    const q3 = addQuestion('Inside which HTML element do we put the JavaScript?', ['<scripting>', '<js>', '<script>', '<javascript>'], 2);
    allQuestions.push(q3);
    const q4 = addQuestion('What is the basic unit of measurement for volume in the metric system?', ['kilogram', 'ounce', 'metre', 'litre'], 3);
    allQuestions.push(q4);
    const q5 = addQuestion('The skeletal framework of which animal has been used in household chores for centuries but has now been largely replaced by human-made substitutes?', ['jellyfish', 'sponge', 'clam', 'barracuda'], 2);
    allQuestions.push(q5);
    const q6 = addQuestion('Solve: 3 + 965', ['999', '969', '968', '964'], 2);
    allQuestions.push(q6);

    document.querySelector('#addQuestions').addEventListener('click', () => {
        const question = prompt('Enter your question: ')
        let yourOptions = prompt('Enter your options: ')
        yourOptions = yourOptions.split(',').map(option => option.trim());
        let correctAns = prompt('Which is the correct option?');
        let tmp = 0;
        yourOptions.forEach((item) => {
            if (item == correctAns) {
                correctAns = tmp;
            }
            tmp++;
        })
        const q = new addQuestion(question, yourOptions, correctAns);
        allQuestions.push(q);
        createCard(q, allQuestions.length)
    });
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
    subBtn.textContent = 'Check';

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
DOM();

document.querySelector('.total-qna').textContent = allQuestions.length;

function checkingUsrResponse() {
    document.querySelectorAll('.sub-btn').forEach((item) => {
        item.addEventListener('click', () => {
            const allChild = item.parentNode.childNodes;
            const options = allChild[1].childNodes;
            options.forEach((elements) => {
                if (elements.type == 'radio' && elements.checked) {
                    const label = document.querySelector(`label[for='${elements.id}']`);
                    const usrAns = label.textContent;
                    const questionID = parseInt(elements.name.slice(-1));
                    checkAnswer(allQuestions[questionID], usrAns, item)
                    item.disabled = true;
                }
            })
        })
    })
}

checkingUsrResponse();

window.addEventListener('beforeunload', () => {
    localStorage.setItem('0', JSON.stringify(allQuestions))
});