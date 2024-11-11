document.getElementById('login').addEventListener('click', function(_event) {
        const user = document.getElementById('user').value;
        const pass = document.getElementById('pass').value;
        if (user === 'admin' && pass === 'admin') {
            alert('Login successful');
        } else {
            alert('Invalid username or password');
        }
    });