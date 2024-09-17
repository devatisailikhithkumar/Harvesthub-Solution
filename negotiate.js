document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const crop = urlParams.get('crop');
    const currentPrice = urlParams.get('currentPrice');

    if (crop && currentPrice) {
        document.getElementById('crop').value = crop;
        document.getElementById('currentPrice').value = `₹${currentPrice}`;
    } else {
        alert('Missing crop or price information.');
        window.location.href = 'index.html'; // Redirect if no crop or price
    }
});

async function submitNegotiation() {
    const crop = document.getElementById('crop').value;
    const proposedPrice = document.getElementById('proposedPrice').value;
    const comments = document.getElementById('comments').value;

    if (proposedPrice) {
        const response = await sendNegotiationToServer(crop, proposedPrice, comments);
        if (response.success) {
            alert('Your negotiation has been submitted successfully.');
            window.location.href = 'index.html'; // Redirect to the main page or any other page
        } else {
            alert('Failed to submit negotiation. Please try again.');
        }
    } else {
        alert('Please enter a proposed price.');
    }
}

async function sendNegotiationToServer(crop, proposedPrice, comments) {
    try {
        const response = await fetch('/submit-negotiation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ crop, proposedPrice, comments })
        });

        return await response.json(); // Assumes the server responds with JSON
    } catch (error) {
        console.error('Error:', error);
        return { success: false };
    }
}
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
