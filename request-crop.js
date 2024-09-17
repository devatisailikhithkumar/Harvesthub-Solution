// request-crop.js

document.addEventListener('DOMContentLoaded', () => {
    const requestForm = document.getElementById('requestForm');

    if (requestForm) {
        requestForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            const cropName = document.getElementById('cropName').value;
            const quantity = document.getElementById('quantity').value;

            // Simple validation
            if (!cropName || !quantity) {
                alert('Please fill out all fields.');
                return;
            }
            window.location.href = 'request-crop-confirmation.html?crop=${encodeURIComponent(cropName)}&quantity=${encodeURIComponent(quantity)}';
        });
    }
});