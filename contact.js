document.addEventListener('DOMContentLoaded', function () {
    // Handle form submission
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }

        // Submit form data to the server
        fetch('/send-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        })
        .then(response => response.text())
        .then(data => {
            alert(data); // Show response message
            document.getElementById('contactForm').reset(); // Reset the form
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error sending your message.');
        });
    });

    // Text-to-Speech functionality
    document.getElementById('speak').addEventListener('click', function () {
        const text = document.body.innerText; // Read the entire page content
        const lang = document.getElementById('language').value;

        // Check if the browser supports speech synthesis
        if ('speechSynthesis' in window) {
            // Create a new SpeechSynthesisUtterance object
            const utterance = new SpeechSynthesisUtterance(text);

            // Check available voices and set language
            const voices = speechSynthesis.getVoices();
            const selectedVoice = voices.find(voice => voice.lang === lang);

            // If a voice matching the selected language is available, use it
            if (selectedVoice) {
                utterance.voice = selectedVoice;
            }

            utterance.lang = lang;

            // Speak the text
            speechSynthesis.speak(utterance);
        } else {
            alert('Your browser does not support speech synthesis.');
        }
    });

    // Load voices asynchronously
    speechSynthesis.onvoiceschanged = function () {
        // You may want to handle voice changes here if necessary
    };
});
