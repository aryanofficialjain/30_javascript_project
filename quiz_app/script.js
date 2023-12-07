const questions = [
    {
        questions: "Largest Animal in the World ",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: false },
            { text: "Whale", correct: true },
            { text: "Elephant", correct: false }
        ]
    },
    {
        questions: "Largest Animal in the World ",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: false },
            { text: "Whale", correct: true },
            { text: "Elephant", correct: false }
        ]
    },
    {
        questions: "Largest Animal in the World ",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: false },
            { text: "Whale", correct: true },
            { text: "Elephant", correct: false }
        ]
    },
    {
        questions: "Largest Animal in the World ",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: false },
            { text: "Whale", correct: true },
            { text: "Elephant", correct: false }
        ]
    }
];

const questionElement = document.getElementById("questions");
const answersbtn = document.getElementById("button");
const Nextbtn = document.getElementById("next");

let qindex = 0;
let score = 0;

function startquiz() {
    qindex = 0;
    score = 0;
    Nextbtn.innerHTML = "Next";
    showquestions();
}

function showquestions() {
    resetstate();
    let cquestion = questions[qindex];
    let qno = qindex + 1;
    questionElement.innerHTML = qno + "." + cquestion.questions;

    cquestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answersbtn.appendChild(button);

        if (answers.correct) {
            button.dataset.correct = "true";
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetstate() {
    Nextbtn.style.display = "none";
    while (answersbtn.firstChild) {
        answersbtn.removeChild(answersbtn.firstChild);
    }
}

function selectAnswer(e) {
    const selectbtn = e.target;
    const iscorrect = selectbtn.dataset.correct === "true";
    if (iscorrect) {
        selectbtn.classList.add("correct");
        score++;
    } else {
        selectbtn.classList.add("incorrect");
    }
    Array.from(answersbtn.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    Nextbtn.style.display = "block";
}

function showScore() {
    resetstate();
    questionElement.innerHTML = `Your Score: ${score} out of ${questions.length} !`;
    Nextbtn.innerHTML = "Play Again";
    Nextbtn.style.display = "block";
}

function handleNextbtn() {
    qindex++;
    if (qindex < questions.length) {
        showquestions();
    } else {
        showScore();
    }
}

Nextbtn.addEventListener("click", () => {
    if (qindex < questions.length) {
        handleNextbtn();
    } else {
        startquiz();
    }
});

startquiz();
