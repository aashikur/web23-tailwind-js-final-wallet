
function validateForm(event) {
    event.preventDefault();

    // password
    var correctPassword = '123456#';
    var correctUsername = 'jr.dev101@gmail.com';
    var enteredPassword = document.getElementById('password').value;
    var enteredUsername = document.getElementById('email').value;

    if (enteredPassword === correctPassword && enteredUsername === correctUsername) {
        // new page
        window.location.href = 'wallet.html';
    } else {
        // error message
        document.getElementById('errorMessage').style.opacity = '1';
    }
}