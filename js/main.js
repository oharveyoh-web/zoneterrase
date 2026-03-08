// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('main-nav');

toggle.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
  toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
});
