const menuButton = document.getElementById('menu-button');
const closeButton = document.getElementById('close-button');
const sidebar = document.getElementById('sidebar');
menuButton.addEventListener('click', () => {
    sidebar.classList.add('open');
});

closeButton.addEventListener('click', () => {
    sidebar.classList.remove('open');
});

