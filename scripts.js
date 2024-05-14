document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#email-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.querySelector('#email').value;

        // Show the thank you message
        document.querySelector('#thank-you-message').style.display = 'block';

        // Hide the form after submission
        form.style.display = 'none';
    });
});
