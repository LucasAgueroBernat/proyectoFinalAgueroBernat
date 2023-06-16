//Comenzamos con el juego
const questions = [
    {
        question: "¿Quién es el padre de Luke?",
        options: ["Anakin Skywalker", "Obi-Wan Kenobi", "Owen Lars"],
        answer: 0
    },
    {
        question: "¿Cuantas peliculas hay de Star Wars?",
        options: ["6", "11", "9"],
        answer: 1
    },
    {
        question: "¿En qué episodio Lord Vader usa la frase \"Yo soy tu padre\"?",
        options: ["V - El Imperio Contraataca", "I - La Amenaza Fantasma", "VII - El Despertar de la Fuerza"],
        answer: 0
    },
    {
        question: "¿Cómo se llama el \"baby-yoda\" que protege el Mandaloriano?",
        options: ["Little Yoda", "Yodin", "Grogu"],
        answer: 2
    },
    {
        question: "¿De quién es pariente Rey?",
        options: ["Kylo Ren", "Palpatine", "Anakin Skywalker"],
        answer: 1
    },
    {
        question: "¿Quién elimina a Grievous?",
        options: ["Obi-Wan Kenobi", "Mace Windu", "Han Solo"],
        answer: 0
    },
    {
        question: "¿Cómo se llama el o la Padawan de Anakin Skywalker?",
        options: ["Ezra Bridger", "Ahsoka Tano", "Sabine Wren"],
        answer: 1
    },
    {
        question: "¿Cuántas temporadas tiene The Mandalorian?",
        options: ["1", "3", "5"],
        answer: 1
    },
    {
        question: "¿Cuál es el droide de Poe Dameron?",
        options: ["R2-D2", "IG-88", "BB-8"],
        answer: 2
    },
    {
        question: "¿Quién destruye al Emperador Palpatine?",
        options: ["Anakin Skywalker", "Luke Skywalker", "Rey Skywalker"],
        answer: 2
    }
];

const themeToggle = document.getElementById('theme-toggle');
const nextButton = document.getElementById('next-button');
const restartButton = document.getElementById('restart-button');

let currentQuestion = 0;
let lightsaber = 40;
let darksaber = 40;
let correctAnswers = 0;
let quizCompleted = false;

function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-theme");
}

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const resultElement = document.getElementById("result");

    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    resultElement.textContent = "";

    const options = optionsElement.getElementsByClassName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].textContent = question.options[i];
    }

    optionsElement.classList.remove("disabled");
}

function checkAnswer(selectedAnswer) {
    if (quizCompleted) {
        return;
    }

    const question = questions[currentQuestion];
    const resultElement = document.getElementById("result");

    if (selectedAnswer === question.answer) {
        correctAnswers++;
        updateScore();
        lightsaber += 4;
        darksaber -= 4;
        setLightPercentage(lightsaber);
        setDarkPercentage(darksaber);
        nextQuestion();
        resultElement.textContent = "¡Respuesta correcta joven Padawan!";
    } else {
        lightsaber -= 4;
        darksaber += 4;
        setLightPercentage(lightsaber);
        setDarkPercentage(darksaber);
        nextQuestion();
        resultElement.textContent = "Respuesta incorrecta.";
    }

    const optionsElement = document.getElementById("options");
    optionsElement.classList.add("disabled");
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        showFinalResult();
        return;
    }
    loadQuestion();
}

// Lightsaber configuration
const lightsaberLight = document.getElementById('ls-light');
const lightsaberDark = document.getElementById('ls-dark');

function setLightPercentage(percentage) {
    if (percentage >= 0 && percentage <= 100) {
        lightsaberLight.setAttribute('aria-valuenow', percentage);
        lightsaberLight.style.width = percentage + '%';
    }
}

function setDarkPercentage(percentage) {
    if (percentage >= 0 && percentage <= 100) {
        lightsaberDark.setAttribute('aria-valuenow', percentage);
        lightsaberDark.style.width = percentage + '%';
    }
}

function showFinalResult() {
    const scoreElement = document.getElementById("score-container");
    scoreElement.style.display = "none";

    const finalResultElement = document.getElementById("final-result-container");
    const finalMessageElement = document.getElementById("final-message");

    finalMessageElement.textContent = `¡Has completado el camino de la fuerza! Tuviste ${correctAnswers} respuestas correctas.`;

    // Personaliza el mensaje para indicar si quedaste del lado luminoso o del lado oscuro

    finalResultElement.style.display = "block";

    quizCompleted = true;
}

function restartQuiz() {
    correctAnswers = 0;
    currentQuestion = 0;
    loadQuestion();

    const scoreElement = document.getElementById("score-container");
    scoreElement.style.display = "block";

    const finalResultElement = document.getElementById("final-result-container");
    finalResultElement.style.display = "none";

    quizCompleted = false;
    updateScore();
}

function updateScore() {
    const correctAnswersElement = document.getElementById("correct-answers");
    correctAnswersElement.textContent = correctAnswers;
}

loadQuestion();

themeToggle.addEventListener("change", toggleTheme);
nextButton.addEventListener("click", () => checkAnswer());
restartButton.addEventListener("click", restartQuiz);

  
  