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
    } else {
        passwordError.style.color = 'transparent';
    }
    
    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmError.style.color = 'red';
    } else {
        confirmError.style.color = 'transparent';
    }
}
