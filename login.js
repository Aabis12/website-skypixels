// Select form inputs and button
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginForm = document.querySelector('form');

// Add event listener to handle form submission
loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  // Validation checks
  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (password.length < 6) {
    alert('Password must be at least 6 characters long.');
    return;
  }

  // Simulate login
  authenticateUser(email, password);
});

// Helper function to validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Simulated backend authentication (Replace with actual API call)
function authenticateUser(email, password) {
  // Simulating a database of users
  const users = [
    { email: 'test@skypixels.com', password: 'password123' },
    { email: 'user@skypixels.com', password: 'mypassword' },
  ];

  // Check if user exists
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    alert('Login successful!');

    // Redirect to the homepage
    window.location.href = 'index.html';
  } else {
    alert('Invalid email or password. Please try again.');
  }

  
}
function authenticateUser(email, password) {
    fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert('Login successful!');
          window.location.href = 'index.html';
        } else {
          alert('Invalid email or password. Please try again.');
        }
      })
      .catch((error) => console.error('Error:', error));
  }
  