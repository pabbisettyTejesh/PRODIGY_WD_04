document.querySelector('form').addEventListener('submit', function(event) {
    var isValid = true;
    var inputs = document.querySelectorAll('input, textarea');

    inputs.forEach(function(input) {
        if (!input.value) {
            isValid = false;
            input.style.borderColor = 'red';
        } else {
            input.style.borderColor = 'initial';
        }
    });

    if (!isValid) {
        event.preventDefault();
        alert('Please fill out all fields.');
    }
});