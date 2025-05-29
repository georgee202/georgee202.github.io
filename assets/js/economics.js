// economics.js
// Эффекты и анимации для страницы экономики

document.addEventListener('DOMContentLoaded', () => {
  // ====== Последовательное появление строк таблицы ======
  const tbl = document.querySelector('.economy-table tbody');
  if (tbl) {
    let rows = Array.from(tbl.rows);
    rows.forEach((row, i) => {
      row.style.opacity = "0";
      setTimeout(() => {
        row.style.opacity = "1";
        row.style.transition = "opacity 0.75s";
        row.classList.add('blinking');
        setTimeout(() => row.classList.remove('blinking'), 1000);
      }, 200 + i * 300);
    });
  }

  // ====== Пример сортировки таблицы по "Инвестициям" ======
  const sortBtn = document.createElement('button');
  sortBtn.textContent = "Сортировать по инвестициям";
  sortBtn.style.margin = "1em";
  sortBtn.style.padding = "6px 18px";
  sortBtn.style.background = "linear-gradient(90deg, rgb(252,235,120), rgb(255,206,63))";
  sortBtn.style.border = "none";
  sortBtn.style.borderRadius = "8px";
  sortBtn.style.cursor = "pointer";
  sortBtn.style.fontWeight = "bold";
  sortBtn.onmouseenter = () => sortBtn.classList.add('blinking');
  sortBtn.onmouseleave = () => sortBtn.classList.remove('blinking');
  const tableEl = document.querySelector('.economy-table');
  if(tableEl){
    tableEl.parentElement.insertBefore(sortBtn, tableEl.nextSibling);
    sortBtn.addEventListener('click', () => {
      // переносим заголовок вверх
      const rows = Array.from(tableEl.tBodies[0].rows);
      rows.sort((a,b)=>parseFloat(b.cells[1].textContent.replace(',','.')) - parseFloat(a.cells[1].textContent.replace(',','.')));
      rows.forEach(row => tableEl.tBodies[0].appendChild(row));
    });
  }

  // ====== Анимация блока "info-overflow" при прокрутке ======
  const infoBlock = document.querySelector('.info-overflow');
  if (infoBlock) {
    infoBlock.addEventListener('scroll', function () {
      if (infoBlock.scrollTop > 20) {
        infoBlock.style.background = "linear-gradient(100deg, #fff8a6 80%, #fae465 100%)";
        infoBlock.classList.add('blinking');
      } else {
        infoBlock.style.background = "linear-gradient(95deg, #fff8c6 60%, #f7ea9a 100%)";
        infoBlock.classList.remove('blinking');
      }
    });
  }

  // ====== Кастомный эффект: Пульсация LCOE ======
  document.querySelectorAll('dt').forEach(dt=>{
    if(dt.textContent.includes('LCOE')){
      dt.style.cursor = "pointer";
      dt.addEventListener('mouseenter',function(){
        dt.style.color = `rgb(${180+Math.floor(Math.random()*60)},${140+Math.floor(Math.random()*80)},40)`;
        dt.classList.add('blinking');
        dt.style.transform = "scale(1.1) rotate(-2deg)";
      });
      dt.addEventListener('mouseleave',function(){
        dt.style.color = "";
        dt.classList.remove('blinking');
        dt.style.transform = "none";
      });
    }
  });
});