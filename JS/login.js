//João Pedro Mendes Nowicki - Matricula: 202308232746.
//Rafael Kahl Konorath - Matricula: 202308232711.
document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login-button');
    const loginDropdown = document.getElementById('login-dropdown');

    loginButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Evita que o evento seja propagado para o documento principal
        if (loginDropdown.style.display === 'none' || loginDropdown.style.display === '') {
            loginDropdown.style.display = 'block';
        } else {
            loginDropdown.style.display = 'none';
        }
    });

    document.addEventListener('click', function(event) {
        if (!loginButton.contains(event.target) && !loginDropdown.contains(event.target)) {
            loginDropdown.style.display = 'none';
        }
    });
});