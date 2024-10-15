// Javascript code for form validation
// Prevent empty form from submitting
let userForm = document.getElementById('myForm');
let userInput = document.getElementById('inputField');
userForm.addEventListener('submit', function(event) {
    if (userInput.value == '') {
        event.preventDefault();
        console.log('ERROR. Empty form.')
    }
});

//Regular expression pattern for alphanumeric input
let userInputRegex = /^[a-zA-Z0-9]+$/;
userInput.addEventListener('blur', function() {
    if (!userInputRegex.test(userInput.value)) {
        alert('ERROR. Input must be alphanumeric.');
    } else {
        alert('Form submitted.');
    }
})
