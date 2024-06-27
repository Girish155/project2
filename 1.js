document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation (more sophisticated validation can be added)
    if (username && email && password) {
        alert('Form submitted successfully!');
    } else {
        alert('Please fill out all fields.');
    }
});
