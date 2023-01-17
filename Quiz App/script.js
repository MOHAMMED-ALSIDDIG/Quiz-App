const data = [
  {
    quation: "HTTP Request Methods",
    a: "POST",
    b: "CON",
    c: "PSD",
    d: "SCRIPT",
    correct: "a",
  },
  {
    quation: "Server Side  ..?",
    a: "HTML",
    b: "CSS",
    c: "BOOTSTRAP",
    d: "PHP",
    correct: "d",
  },
  {
    quation: " NOT javascript frameworks..? ",
    a: "Vue",
    b: "laravel",
    c: "Angular",
    d: "Next",
    correct: "b",
  },
  {
    quation: "Elements Attributes ..?",
    a: "SVG",
    b: "CANVAS",
    c: "CLASS",
    d: "SASS",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const quationEl = document.getElementById("quation");
const answerEls = document.querySelectorAll(".answer");
const optionA = document.getElementById("optionA");
const optionB = document.getElementById("optionB");
const optionC = document.getElementById("optionC");
const optionD = document.getElementById("optionD");
const btn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
  deslectAnswers();
  const currentQuizData = data[currentQuiz];
  quationEl.innerText = currentQuizData.quation;
  optionA.innerText = currentQuizData.a;
  optionB.innerText = currentQuizData.b;
  optionC.innerText = currentQuizData.c;
  optionD.innerText = currentQuizData.d;
}

function deslectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}
function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
btn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === data[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < data.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = ` <h2>You Answer ${score} / ${data.length} Quetions Correctly</h2>
      <button onclick="location.reload()">Do it Again</button>`;
    }
  }
});
