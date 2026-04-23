const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('#nav-menu');
const menuLinks = Array.from(menu.querySelectorAll('a'));

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('is-open');
  menu.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('is-open');
    menu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});
