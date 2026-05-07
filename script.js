const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => links.classList.toggle('open'));
document.getElementById('year').textContent = new Date().getFullYear();
const reveal = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => reveal.observe(el));
const glow = document.querySelector('.cursor-glow');
window.addEventListener('mousemove', e => { glow.style.left = `${e.clientX}px`; glow.style.top = `${e.clientY}px`; });
