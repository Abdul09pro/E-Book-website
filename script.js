const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector('#email').value;

    // Send reset link to email
    console.log(`Sending reset link to ${email}`);
});