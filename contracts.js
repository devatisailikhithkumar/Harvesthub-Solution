document.addEventListener('DOMContentLoaded', function () {
    // Sample data for contracts
    const contracts = [
        { id: 1, title: 'Tomato Contract', description: 'Contract for 10 tons of tomatoes.' },
        { id: 2, title: 'Wheat Contract', description: 'Contract for 5 tons of wheat.' }
    ];

    // Populate contracts list
    const contractList = document.getElementById('contractList');
    contracts.forEach(contract => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${contract.title}</strong>: ${contract.description}`;
        contractList.appendChild(li);
    });

    // Sample data for crops
    const crops = [
        { name: 'Corn', price: '$120/ton' },
        { name: 'Soybean', price: '$150/ton' }
    ];

    // Populate crops list
    const cropList = document.getElementById('cropList');
    if (cropList) {
        crops.forEach(crop => {
            const li = document.createElement('li');
            li.textContent = `${crop.name}: ${crop.price}`;
            cropList.appendChild(li);
        });
    }

    // Sample data for suppliers
    const suppliers = [
        { id: 1, name: 'Green Farms', location: 'California' },
        { id: 2, name: 'Harvest Co.', location: 'Texas' }
    ];

    // Populate suppliers list (if needed in your application)
    const supplierList = document.getElementById('supplierList');
    if (supplierList) {
        suppliers.forEach(supplier => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${supplier.name}</strong>: Located in ${supplier.location}`;
            supplierList.appendChild(li);
        });
    }

    // Sample data for upcoming events
    const events = [
        { id: 1, name: 'Harvest Festival', date: '2024-10-15' },
        { id: 2, name: 'Wheat Fair', date: '2024-11-05' }
    ];

    // Populate events list (if needed in your application)
    const eventList = document.getElementById('eventList');
    if (eventList) {
        events.forEach(event => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${event.name}</strong>: Scheduled for ${event.date}`;
            eventList.appendChild(li);
        });
    }
});

// Function to submit a new contract
function submitContract() {
    const title = document.getElementById('contractTitle').value;
    const terms = document.getElementById('contractTerms').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    if (title && terms && startDate && endDate) {
        const contractList = document.getElementById('contractList');
        const li = document.createElement('li');
        li.innerHTML = `<strong>${title}</strong>: ${terms} (From: ${startDate} to ${endDate})`;
        contractList.appendChild(li);
    } else {
        alert('Please fill in all fields.');
    }
}

// Existing JS code for text-to-speech
document.getElementById('speak').addEventListener('click', function() {
    const contentElement = document.querySelector('.content');
    const text = contentElement ? contentElement.innerText : "No content to read.";
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
