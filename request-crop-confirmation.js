// request-crop-confirmation.js

document.addEventListener('DOMContentLoaded', () => {
    const requestDetails = document.getElementById('requestDetails');

    // Sample data for demonstration
    const request = {
        cropName: 'Corn',
        quantity: '200 kg'
    };

    if (requestDetails) {
        const details = `
            <li><strong>Crop:</strong> ${request.cropName}</li>
            <li><strong>Quantity:</strong> ${request.quantity}</li>
        `;
        requestDetails.innerHTML = details;
    }
});