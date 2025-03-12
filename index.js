const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const contactBtn = document.getElementById('contacts');
const nav = document.getElementById('nav');
const cancelToggle = document.getElementById('cancel');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  contactBtn.classList.toggle('active');
  nav.classList.toggle('active');
  menuToggle.classList.toggle('active');
  cancelToggle.style.display = 'block';
});