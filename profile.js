document.addEventListener('DOMContentLoaded', function() {
    const dashboardLink = document.getElementById('dashboardLink');

    // Check user role from localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    console.log('User Data:', user); // Debug log
    if (user) {
        if (user.role === 'farmer') {
            dashboardLink.href = 'dashboard-farmer.html';
        } else if (user.role === 'buyer') {
            dashboardLink.href = 'dashboard-buyer.html';
        }
        console.log('Dashboard Link:', dashboardLink.href); // Debug log
    } else {
        dashboardLink.href = 'index.html'; // Fallback if no user is logged in
    }
});
