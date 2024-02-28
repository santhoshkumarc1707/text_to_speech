function speak() {
    const textToSpeak = document.getElementById('textToSpeak').value;

    if ('speechSynthesis' in window) {
        const synthesis = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        

        synthesis.speak(utterance);
    } else {
        alert("Sorry, your browser doesn't support the Web Speech API. Please use a modern browser.");
    }
}