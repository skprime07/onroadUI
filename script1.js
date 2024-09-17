document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('navbar-toggle');
    const menu = document.getElementById('navbar-menu.active');

    if (toggleButton && menu) {
        toggleButton.addEventListener('click', function() {
            menu.classList.toggle('active'); // Toggle 'active' class on menu
        });
    } else {
        console.error('Toggle button or menu not found.');
    }
});
