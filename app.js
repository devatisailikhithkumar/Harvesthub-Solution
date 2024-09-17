// Function to handle price negotiation
function negotiatePrice(cropName) {
    let proposedPrice;
    switch (cropName) {
        case 'Wheat':
            proposedPrice = document.getElementById('wheatPrice').value;
            break;
        case 'Corn':
            proposedPrice = document.getElementById('cornPrice').value;
            break;
        case 'Barley':
            proposedPrice = document.getElementById('barleyPrice').value;
            break;
        case 'Rice':
            proposedPrice = document.getElementById('ricePrice').value;
            break;
        case 'Potatoes':
            proposedPrice = document.getElementById('potatoesPrice').value;
            break;
    }
    if (proposedPrice) {
        alert(`Negotiation requested for ${cropName} at ₹${proposedPrice}/kg`);
        // Add logic to send this data to your backend
    } else {
        alert('Please enter a proposed price.');
    }
}

// Function to handle crop request
function requestCrop() {
    // Add your logic to request a crop here
    alert('Crop requested!');
}

// Function to place a new order
function placeNewOrder() {
    window.location.href = 'place-order.html'; // Redirect to new order page
}

// Text-to-speech functionality
document.getElementById('speak').addEventListener('click', function() {
    const language = document.getElementById('language').value;
    const msg = new SpeechSynthesisUtterance('This is a test message for speech synthesis');
    msg.lang = language;
    window.speechSynthesis.speak(msg);
});
