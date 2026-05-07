
const menu = document.getElementById('menu');
const responsive = document.getElementById('responsive');
// const closeIcon = document.getElementById('icon-close');

menu.addEventListener('click', () => {
    menu.classList.toggle('open');
    responsive.classList.toggle('hidden');
});


