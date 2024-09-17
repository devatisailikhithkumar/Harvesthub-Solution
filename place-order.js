// place-order.js

document.addEventListener('DOMContentLoaded', () => {
    const orderForm = document.getElementById('orderForm');

    if (orderForm) {
        orderForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            const cropName = document.getElementById('orderCrop').value;
            const quantity = document.getElementById('orderQuantity').value;
            const deliveryDate = document.getElementById('orderDate').value;

            // Simple validation
            if (!cropName || !quantity || !deliveryDate) {
                alert('Please fill out all fields.');
                return;
            }
            window.location.href = 'order-confirmation.html?crop=${encodeURIComponent(cropName)}&quantity=${encodeURIComponent(quantity)}&date=${encodeURIComponent(deliveryDate)}';
        });
    }
});// script.js

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
