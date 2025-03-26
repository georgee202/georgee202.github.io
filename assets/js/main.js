// Основные функции для всего сайта
document.addEventListener('DOMContentLoaded', function() {
  // Активируем текущую страницу в навигации
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.main-nav a, .dynamic-nav a');
  
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });

  // Добавляем эффект наведения на кнопки
  const buttons = document.querySelectorAll('button, .button, a[role="button"]');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
      this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.boxShadow = '';
    });
  });

  // Обработка форм (если есть)
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Форма отправлена! (Это демо, данные никуда не отправляются)');
    });
  });
});