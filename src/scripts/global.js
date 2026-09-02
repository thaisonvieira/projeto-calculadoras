function menu () {
    const btn = document.getElementById('btn-menu');
    btn.addEventListener('click', () => {
        const nav = document.querySelector('.nav');
        nav.classList.toggle('open');
        btn.classList.toggle('nav__seta--seta-invertida');
    });
}

menu();
