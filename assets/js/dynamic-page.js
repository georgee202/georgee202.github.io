// Создаем полностью динамическую страницу
document.addEventListener('DOMContentLoaded', function() {
  // Создаем основные элементы
  const html = document.createElement('html');
  html.lang = 'ru';
  
  const head = document.createElement('head');
  const metaCharset = document.createElement('meta');
  metaCharset.charset = 'UTF-8';
  const title = document.createElement('title');
  title.textContent = 'Динамические данные';
  
  head.appendChild(metaCharset);
  head.appendChild(title);
  
  const body = document.createElement('body');
  
  // Создаем шапку
  const header = document.createElement('header');
  header.className = 'dynamic-header';
  
  const h1 = document.createElement('h1');
  h1.textContent = 'Динамические данные';
  
  const nav = document.createElement('nav');
  nav.className = 'dynamic-nav';
  
  const navList = document.createElement('ul');
  
  const navItems = [
    { text: 'Главная', href: 'index.html' },
    { text: 'Статистика', href: 'stats.html' },
    { text: 'Динамические данные', href: 'dynamic.html' }
  ];
  
  navItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.href;
    a.textContent = item.text;
    if (item.href === 'dynamic.html') {
      a.className = 'active';
    }
    li.appendChild(a);
    navList.appendChild(li);
  });
  
  nav.appendChild(navList);
  header.appendChild(h1);
  header.appendChild(nav);
  body.appendChild(header);
  
  // Создаем основное содержимое
  const main = document.createElement('main');
  main.className = 'dynamic-main';
  
  // Секция с динамическими данными
  const section = document.createElement('section');
  section.className = 'dynamic-data';
  
  const h2 = document.createElement('h2');
  h2.textContent = 'Реальные данные в реальном времени';
  section.appendChild(h2);
  
  // Создаем таблицу
  const table = document.createElement('table');
  table.className = 'dynamic-table';
  
  const caption = document.createElement('caption');
  caption.textContent = 'Динамика ключевых показателей';
  table.appendChild(caption);
  
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  
  ['Показатель', 'Январь', 'Февраль', 'Март'].forEach(text => {
    const th = document.createElement('th');
    th.textContent = text;
    headerRow.appendChild(th);
  });
  
  thead.appendChild(headerRow);
  table.appendChild(thead);
  
  const tbody = document.createElement('tbody');
  
  const tableData = [
    ['ВВП', '4.2%', '4.3%', '4.5%'],
    ['Инфляция', '6.1%', '5.9%', '5.8%'],
    ['Безработица', '4.5%', '4.4%', '4.3%']
  ];
  
  tableData.forEach(rowData => {
    const tr = document.createElement('tr');
    
    rowData.forEach(cellData => {
      const td = document.createElement('td');
      td.textContent = cellData;
      tr.appendChild(td);
    });
    
    tbody.appendChild(tr);
  });
  
  table.appendChild(tbody);
  section.appendChild(table);
  
  // Создаем список определений
  const dl = document.createElement('dl');
  dl.className = 'dynamic-definitions';
  
  const definitions = [
    { term: 'ВВП', definition: 'Валовый внутренний продукт - основной показатель экономики' },
    { term: 'ИПЦ', definition: 'Индекс потребительских цен - основной показатель инфляции' }
  ];
  
  definitions.forEach(item => {
    const dt = document.createElement('dt');
    dt.textContent = item.term;
    
    const dd = document.createElement('dd');
    dd.textContent = item.definition;
    
    dl.appendChild(dt);
    dl.appendChild(dd);
  });
  
  section.appendChild(dl);
  
  // Создаем нумерованный список
  const ol = document.createElement('ol');
  ol.className = 'dynamic-list';
  
  ['Экономический рост', 'Стабильность цен', 'Полная занятость'].forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ol.appendChild(li);
  });
  
  section.appendChild(ol);
  
  main.appendChild(section);
  body.appendChild(main);
  
  // Создаем подвал
  const footer = document.createElement('footer');
  footer.className = 'dynamic-footer';
  
  const p = document.createElement('p');
  p.textContent = `© ${new Date().getFullYear()} Аналитический портал. Данные обновлены: ${new Date().toLocaleString()}`;
  
  footer.appendChild(p);
  body.appendChild(footer);
  
  // Добавляем стили через JavaScript
  const style = document.createElement('style');
  style.textContent = `
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      line-height: 1.6;
      color: #333;
    }
    
    .dynamic-header {
      background: linear-gradient(135deg, #4682b4, #2c3e50);
      color: white;
      padding: 1rem;
      text-align: center;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    
    .dynamic-nav ul {
      display: flex;
      justify-content: center;
      list-style: none;
      padding: 0;
    }
    
    .dynamic-nav a {
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
      margin: 0 0.5rem;
      border-radius: 4px;
      transition: all 0.3s ease;
    }
    
    .dynamic-nav a:hover {
      background-color: rgba(255,255,255,0.2);
      transform: translateY(-2px);
    }
    
    .dynamic-nav .active {
      background-color: rgba(255,255,255,0.3);
    }
    
    .dynamic-main {
      padding: 1rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .dynamic-table {
      width: 100%;
      border-collapse: collapse;
      margin: 1rem 0;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
    
    .dynamic-table th, .dynamic-table td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }
    
    .dynamic-table th {
      background-color: #4682b4;
      color: white;
    }
    
    .dynamic-table tr:nth-child(even) {
      background-color: #f2f2f2;
    }
    
    .dynamic-definitions {
      display: grid;
      grid-template-columns: max-content 1fr;
      gap: 0.5rem 1rem;
      margin: 1rem 0;
    }
    
    .dynamic-definitions dt {
      font-weight: bold;
      color: #4682b4;
    }
    
    .dynamic-list {
      list-style-type: decimal;
      padding-left: 1.5rem;
    }
    
    .dynamic-footer {
      background: #f5f5f5;
      padding: 1rem;
      text-align: center;
      margin-top: 2rem;
    }
    
    /* Анимации */
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .dynamic-data > * {
      animation: fadeIn 0.5s ease-out forwards;
    }
    
    .dynamic-table {
      animation-delay: 0.2s;
    }
    
    .dynamic-definitions {
      animation-delay: 0.4s;
    }
    
    .dynamic-list {
      animation-delay: 0.6s;
    }
  `;
  
  head.appendChild(style);
  html.appendChild(head);
  html.appendChild(body);
  
  // Заменяем текущий документ
  document.replaceChild(html, document.documentElement);
});