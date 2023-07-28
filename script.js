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
