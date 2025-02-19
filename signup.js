// Selecting form inputs and button
const fullNameInput = document.getElementById('fullname');
const emailInput = document.getElementById('email');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const createAccountButton = document.getElementById('create-account');

// Event listener for button click
createAccountButton.addEventListener('click', () => {
  const fullName = fullNameInput.value.trim();
  const email = emailInput.value.trim();
  const username = usernameInput.value.trim();
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  // Validation checks
  if (fullName === '') {
    alert('Full Name is required.');
    return;
  }

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (username === '') {
    alert('Username is required.');
    return;
  }

  if (password.length < 6) {
    alert('Password must be at least 6 characters long.');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  // Simulating account creation
  alert('Account created successfully!');
  
  // You can integrate this with your backend API for storing user data
  console.log({
    fullName,
    email,
    username,
    password,
  });

  // Reset form inputs
  fullNameInput.value = '';
  emailInput.value = '';
  usernameInput.value = '';
  passwordInput.value = '';
  confirmPasswordInput.value = '';
});

// Helper function to validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
