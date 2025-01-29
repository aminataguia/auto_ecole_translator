const questions = [
    {
        image: "images/situation1.jpg",
        text: "Que devez-vous faire dans cette situation ?",
        answers: ["Accélérer", "Freiner", "Changer de voie"],
        correctAnswer: 1,
        audio: "audio/question1.mp3"
    },
    {
        image: "images/situation2.jpg",
        text: "Quel panneau indique une priorité ?",
        answers: ["Panneau A", "Panneau B", "Panneau C"],
        correctAnswer: 2,
        audio: "audio/question2.mp3"
    }
];

let currentQuestionIndex = 0;

function checkAnswer(index) {
    const feedback = document.getElementById("feedback");
    if (index === questions[currentQuestionIndex].correctAnswer) {
        feedback.textContent = "Bonne réponse !";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Mauvaise réponse";
        feedback.style.color = "red";
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        updateQuestion();
    }
}

function updateQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("questionImage").src = question.image;
    document.getElementById("questionText").textContent = question.text;
    document.getElementById("questionAudio").src = question.audio;
    const buttons = document.querySelectorAll("#answers button");
    buttons.forEach((button, index) => {
        button.textContent = question.answers[index];
    });
    document.getElementById("feedback").textContent = "";
}
