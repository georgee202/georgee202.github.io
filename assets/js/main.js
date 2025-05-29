// Скрипт для главной страницы: анимация заголовка и интерактив для статистической таблицы

document.addEventListener('DOMContentLoaded', () => {
  // Динамическая смена цвета заголовка по клику
  const h = document.getElementById('mainTitle');
  if (h) {
    h.addEventListener('click', () => {
      // Генерируем случайный насыщенный жёлтый цвет с помощью rgb()
      let r = 200 + Math.floor(Math.random() * 55);
      let g = 170 + Math.floor(Math.random() * 70);
      let b = Math.floor(Math.random() * 60);
      h.style.color = `rgb(${r}, ${g}, ${b})`;
      h.classList.add('blinking');  // effect из animation.css
      setTimeout(() => h.classList.remove('blinking'), 900); // плавное мерцание
    });
  }

  // Подсвечивание "Рост за год" в таблице анимацией по наведению
  const statsTable = document.querySelector('.stats-table');
  if (statsTable) {
    Array.from(statsTable.rows).forEach((row, idx) => {
      if(idx > 0){
        row.addEventListener('mouseenter', () => {
          row.cells[2].classList.add('blinking');
        });
        row.addEventListener('mouseleave', () => {
          row.cells[2].classList.remove('blinking');
        });
      }
    });
  }

  // Эффект плавного появления галереи 
  const galBtn = document.getElementById('showGalleryBtn');
  const gallery = document.querySelector('.gallery-section');
  if (galBtn && gallery) {
    galBtn.addEventListener('click', () => {
      gallery.scrollIntoView({ behavior: "smooth" });
    });
  }
});