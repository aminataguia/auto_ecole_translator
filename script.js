document.addEventListener("DOMContentLoaded", () => {
    // Sélection des réponses et affichage d'une alerte
    document.querySelectorAll('.answer').forEach(button => {
        button.addEventListener('click', () => {
            const selectedAnswer = button.dataset.answer;
            alert(`Vous avez sélectionné la réponse ${selectedAnswer}`);
        });
    });
});

    // Timer de 30 secondes
    let timeLeft = 30;
    const timeDisplay = document.getElementById('time');
    const timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert('Temps écoulé!');
        } else {
            timeDisplay.textContent = `Temps: 00:${timeLeft < 10 ? '0' + timeLeft : timeLeft}`;
            timeLeft--;
        }
    }, 1000);

  // Fonction pour afficher/cacher chaque traduction
document.querySelectorAll('.translation-item').forEach(item => {
    const btn = item.querySelector('.audio-btn');
    const translationDiv = item.querySelector('.translation');

    // Au clic sur le bouton audio, afficher ou cacher la traduction correspondante
    btn.addEventListener('click', () => {
        if (translationDiv.style.display === 'none' || translationDiv.style.display === '') {
            translationDiv.style.display = 'block'; // Afficher la traduction
        } else {
            translationDiv.style.display = 'none'; // Cacher la traduction
        }
    });
});

// Fonction de synthèse vocale en arabe
function speakText(text) {
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ar-SA'; // Langue arabe
        utterance.rate = 0.9; // Ajustement de la vitesse
        window.speechSynthesis.speak(utterance);
    } else {
        alert("La synthèse vocale n'est pas supportée sur ce navigateur.");
    }
}

