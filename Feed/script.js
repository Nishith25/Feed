// Simulated user database (for demonstration purposes only)
const users = [];

// Signup Form Submission
document.getElementById('signupForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        alert('User with this email already exists.');
        return;
    }

    // Add user to the simulated database
    users.push({ name, email, password });
    alert('Signup successful! You can now login.');
    this.reset();
    window.location.href = 'login.html';
});

// Login Form Submission
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Authenticate user
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        alert(`Welcome back, ${user.name}!`);
        window.location.href = 'index.html';
    } else {
        alert('Invalid email or password.');
    }
});
