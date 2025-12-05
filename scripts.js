// Мобильное меню
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  burger.classList.toggle('active');
});

// Плавная прокрутка
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const target = document.querySelector(href);
    
    window.scrollTo({
      top: target.offsetTop - 70,
      behavior: 'smooth'
    });

    // Закрыть мобильное меню
    if (nav.classList.contains('active')) {
      nav.classList.remove('active');
      burger.classList.remove('active');
    }
  });
});

// Закрытие меню при клике вне его
document.addEventListener('click', (e) => {
  if (!e.target.closest('.header-content') && nav.classList.contains('active')) {
    nav.classList.remove('active');
    burger.classList.remove('active');
  }
});
