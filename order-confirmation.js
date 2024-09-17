// order-confirmation.js

document.addEventListener('DOMContentLoaded', () => {
    const orderDetails = document.getElementById('orderDetails');

    // Sample data for demonstration
    const order = {
        cropName: 'Wheat',
        quantity: '100 kg',
        deliveryDate: '2024-10-15'
    };

    if (orderDetails) {
        const details = `
            <li><strong>Crop:</strong> ${order.cropName}</li>
            <li><strong>Quantity:</strong> ${order.quantity}</li>
            <li><strong>Delivery Date:</strong> ${order.deliveryDate}</li>
        `;
        orderDetails.innerHTML = details;
    }
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
