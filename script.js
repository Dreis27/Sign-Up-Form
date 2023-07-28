// Get input elements and error message containers
const passwordInput = document.getElementById('pass');
const confirmPasswordInput = document.getElementById('passRep');
const passwordError = passwordInput.nextElementSibling.firstChild;
const confirmError = confirmPasswordInput.nextElementSibling.firstChild;

// Add an input event listener to both password fields
passwordInput.addEventListener('input', validatePasswords);
confirmPasswordInput.addEventListener('input', validatePasswords);

function validatePasswords() {
    // Check if the password field is empty
    if (passwordInput.value === '') {
        passwordError.style.color = 'red';
    } else {
        passwordError.style.color = 'transparent';
    }
    
    // Check if passwords match
    if (passwordInput.value !== confirmPasswordInput.value) {
        // If they don't match, show the error message
        confirmError.style.color = 'red';
    } else {
        // If they match or are empty, hide the error message
        confirmError.style.color = 'transparent';
    }
}
