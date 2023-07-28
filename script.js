//compare two passwords for being identical
const passwordInput = document.getElementById('pass');
const confirmPasswordInput = document.getElementById('passRep');
const passwordError = passwordInput.nextElementSibling.firstChild;
const confirmError = confirmPasswordInput.nextElementSibling.firstChild;

passwordInput.addEventListener('input', validatePasswords);
confirmPasswordInput.addEventListener('input', validatePasswords);

function validatePasswords() {

    if (passwordInput.value === '') {
        passwordError.style.color = 'red';
        passwordInput.style.border = '1px solid red';
    } else {
        passwordError.style.color = 'transparent';
        passwordInput.style.border = '0';
    }
    
    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmError.style.color = 'red';
        confirmPasswordInput.style.border = '1px solid red';
    } else {
        confirmError.style.color = 'transparent';
        confirmPasswordInput.style.border = '0';
    }
}

const passwordForm = document.getElementById('form');

passwordForm.addEventListener('submit', function(event) {
    // If the passwords are empty or don't match, prevent form submission
    if (passwordInput.value === '' || passwordInput.value !== confirmPasswordInput.value) {
        event.preventDefault();
        validatePasswords();  
    }
});

