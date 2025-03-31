document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        // Log fake data locally
        console.log('Email:', email);
        console.log('Password:', password);

        // Display SweetAlert warning message
        Swal.fire({
            title: 'Warning!',
            text: 'This is how hackers steal passwords! A real attack would send your data to criminals. Always check URLs and enable 2FA!',
            icon: 'warning',
            confirmButtonText: 'Got it!'
        }).then(() => {
            // Mock Firebase response
            console.log('Mock Firebase response: Data would be stored here.');
            window.location.href = 'hacked.html';
        });
    });
});
