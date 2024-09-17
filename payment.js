document.getElementById('payButton').addEventListener('click', function () {
    // Simulate a payment process (replace with real payment gateway integration)
    alert('Payment processed successfully!');
});
// script.js

// Existing JS code

document.getElementById('speak').addEventListener('click', function() {
    const text = document.getElementById('content').innerText; // Adjust this selector if needed
    const lang = document.getElementById('language').value;
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;

    // Check if the browser supports speech synthesis
    if ('speechSynthesis' in window) {
        speechSynthesis.speak(utterance);
    } else {
        alert('Your browser does not support speech synthesis.');
    }
});
