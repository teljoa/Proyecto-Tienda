document.addEventListener("DOMContentLoaded", () => {
    const forms = {
        login: document.getElementById('login-form'),
        register: document.getElementById('register-form')
    };

    Object.entries(forms).forEach(([key, form]) => {
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                if (key === 'register') {
                    const password = document.getElementById('password').value;
                    const confirmPassword = document.getElementById('confirm_password').value;
                    if (password !== confirmPassword) {
                        alert("Las contraseñas no coinciden.");
                        return;
                    }
                }
                alert(`${key === 'login' ? 'Inicio de sesión' : 'Registro'} exitoso.`);
            });
        }
    });

    const menuLateral = document.querySelector('.menu-lateral');
    const toggleButton = document.createElement('button');

    toggleButton.textContent = '☰';
    toggleButton.style.cssText = `
        position: fixed;
        top: 20px;
        left: 20px;
        background-color: #333;
        color: white;
        border: none;
        padding: 10px;
        cursor: pointer;
    `;

    document.body.appendChild(toggleButton);

    toggleButton.addEventListener('click', () => {
        menuLateral.classList.toggle('active');
    });
});
