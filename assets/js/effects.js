// Динамические эффекты для главной страницы
document.addEventListener('DOMContentLoaded', function() {
  // Эффект параллакса для шапки
  window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    const header = document.querySelector('.main-header');
    header.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
  });

  // Подсветка строк таблицы при наведении
  const tables = document.querySelectorAll('table');
  tables.forEach(table => {
    table.addEventListener('mouseover', function(e) {
      if (e.target.tagName === 'TD') {
        e.target.parentNode.style.backgroundColor = 'rgba(70, 130, 180, 0.1)';
      }
    });
    
    table.addEventListener('mouseout', function(e) {
      if (e.target.tagName === 'TD') {
        e.target.parentNode.style.backgroundColor = '';
      }
    });
  });

  // Динамическое изменение цвета заголовка
  const header = document.querySelector('.main-header h1');
  let hue = 0;
  
  setInterval(() => {
    hue = (hue + 1) % 360;
    header.style.textShadow = `0 0 10px hsl(${hue}, 100%, 50%)`;
  }, 50);

  // Анимация карточек
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05) rotate(2deg)';
      this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1) rotate(0)';
      this.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    });
  });

  // Плавная прокрутка для якорей
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Динамическое обновление даты в футере
  const footer = document.querySelector('.main-footer p');
  if (footer) {
    footer.textContent += ` | Последнее обновление: ${new Date().toLocaleString()}`;
  }
});