document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        // Store fake data locally using localStorage
        const fakeData = { email, password };
        localStorage.setItem('fakeData', JSON.stringify(fakeData));

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

    // Add a delete button to remove the collected data
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Collected Data';
    deleteButton.classList.add('btn', 'btn-danger', 'mt-3');
    deleteButton.addEventListener('click', function() {
        localStorage.removeItem('fakeData');
        Swal.fire({
            title: 'Data Deleted',
            text: 'The collected data has been deleted.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    });

    document.body.appendChild(deleteButton);
});
