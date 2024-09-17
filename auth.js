// Handle user registration
// Handle user registration
function registerUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Simple validation
    if (!name || !email || !password || !role) {
        alert('Please fill all the fields');
        return;
    }

    // Password validation (minimum 6 characters)
    if (password.length < 6) {
        alert('Password should be at least 6 characters long');
        return;
    }

    // Simulate storing user data (replace with real backend API call)
    localStorage.setItem('user', JSON.stringify({ name, email, password, role }));
    alert('Registration successful!');
    window.location.href = 'login.html';
}
function loginUser() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    console.log('Email entered:', email);
    console.log('Password entered:', password);

    const user = JSON.parse(localStorage.getItem('user'));
    console.log('User from localStorage:', user);

    if (!user) {
        alert('No registered users found. Please register first.');
        return;
    }

    if (user.email === email && user.password === password) {
        alert('Login successful!');
        console.log('Login successful, redirecting...');

        if (user.role === 'farmer') {
            window.location.href = 'dashboard-farmer.html';
        } else if (user.role === 'buyer') {
            window.location.href = 'dashboard-buyer.html';
        } else {
            alert('Invalid user role');
        }
    } else {
        alert('Invalid email or password');
    }
}