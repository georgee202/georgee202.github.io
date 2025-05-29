// Полностью формирует всю страницу только средствами JS+DOM

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;

  // Навигация (лучше над main)
  const nav = document.createElement('nav');
  nav.innerHTML = `
    <ul>
      <li><a href="index.html">Главная</a></li>
      <li><a href="stations.html">Крупнейшие станции</a></li>
      <li><a href="economics.html">Экономика</a></li>
    </ul>
  `;
  body.appendChild(nav);

  // Создаём основной контейнер
  const container = document.createElement('main');
  container.className = 'container';
  body.appendChild(container);

  // === ДВЕ КОЛОНКИ для GRID ===
  const leftCol = document.createElement('div');
  leftCol.className = 'col col-left';

  const rightCol = document.createElement('div');
  rightCol.className = 'col col-right';

  // === Правая колонка (заголовок, таблица) ===
  const h1 = document.createElement('h1');
  h1.className = 'animated-header central-title';
  h1.innerText = 'Каталог крупнейших солнечных электростанций';
  container.appendChild(h1);

  container.appendChild(leftCol);
  container.appendChild(rightCol);

  // ----- Таблица объектов -----
  const stationData = [
    { name: "Tengger Desert", country: "Китай", power: 1547, year: 2016, img: "assets/img/tengger.jpg" },
    { name: "Noor Abu Dhabi", country: "ОАЭ", power: 1177, year: 2019, img: "assets/img/noor.jpg" },
    { name: "Kurnool Ultra", country: "Индия", power: 1000, year: 2017, img: "assets/img/kurnool.jpg" },
    { name: "Pavagada", country: "Индия", power: 2050, year: 2019, img: "assets/img/pavagada.jpg" }
  ];

  const table = document.createElement('table');
  table.className = 'objects-table';
  table.innerHTML = `
    <caption>Топ-4 солнечных электростанций (2023)</caption>
    <thead>
      <tr>
        <th>Название</th>
        <th>Страна</th>
        <th>Мощность, МВт</th>
        <th>Год открытия</th>
        <th>Фото</th>
      </tr>
    </thead>
    <tbody>
      ${stationData.map(st =>
        `<tr>
          <td>${st.name}</td>
          <td>${st.country}</td>
          <td>${st.power}</td>
          <td>${st.year}</td>
          <td><img src="${st.img}" alt="${st.name}" width="70"></td>
        </tr>`).join('')}
    </tbody>
  `;
  rightCol.appendChild(table);

  // === Левая колонка (вступление + списки) ===
  const intro = document.createElement('p');
  intro.textContent = 'Обзор построенных по всему миру крупнейших объектов солнечной генерации.';
  leftCol.appendChild(intro);

  // -- Нумерованный список (старые станции) --
  const h2ol = document.createElement('h2');
  h2ol.textContent = "Старейшие крупные станции";
  leftCol.appendChild(h2ol);

  const ol = document.createElement('ol');
  stationData.slice().sort((a, b) => a.year - b.year)
    .forEach(st => {
      const li = document.createElement('li');
      li.innerHTML = `${st.name} (${st.year})`;
      ol.appendChild(li);
    });
  leftCol.appendChild(ol);

  // -- Маркированный список --
  const h2ul = document.createElement('h2');
  h2ul.textContent = "Типы размещения";
  leftCol.appendChild(h2ul);

  const ul = document.createElement('ul');
  ul.style.listStyleType = 'circle';
  ['Пустыня', 'Песчаная местность', 'Горная территория', 'Вода'].forEach(item => {
    const li = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
  });
  leftCol.appendChild(ul);

  // -- Список определений --
  const dl = document.createElement('dl');
  dl.innerHTML = `
    <dt>Солнечная генерация</dt>
    <dd>Получение электрической энергии за счёт преобразования солнечного света в электричество.</dd>
    <dt>Плавающие электростанции</dt>
    <dd>Модули, размещённые на поверхности водоемов.</dd>
  `;
  leftCol.appendChild(dl);

  // === Вставляем колонки в контейнер ===
  container.appendChild(leftCol);
  container.appendChild(rightCol);

  // === Галерея и overflow СНИЗУ ===
  // Галерея
  const gallerySection = document.createElement('section');
  gallerySection.className = 'gallery-section';
  const h2g = document.createElement('h2');
  h2g.className = "gallery-title";
  h2g.textContent = "Галерея крупнейших объектов";
  gallerySection.appendChild(h2g);

  const gallery = document.createElement('div');
  gallery.className = 'gallery';
  stationData.forEach(st => {
    const fig = document.createElement('figure');
    fig.innerHTML = `<img src="${st.img}" alt="${st.name}" width="400">
      <figcaption>${st.name} (${st.country})</figcaption>`;
    gallery.appendChild(fig);
  });
  gallerySection.appendChild(gallery);
  body.appendChild(gallerySection);

  // Overflow block
  const overflowBlock = document.createElement('div');
  overflowBlock.className = 'info-overflow';
  overflowBlock.style.maxHeight = '75px';
  overflowBlock.textContent = 'В мире построено более сотни электростанций мощностью свыше 100 МВт, в их числе: ';
  overflowBlock.append(
    stationData.map(s => s.name).join(', ') + ', ... (и многие другие). ' +
    "Современные солнечные электростанции активно внедряются во всех регионах, включая Африку, Америку и Южную Азию. Их вклад в зелёную энергетику постоянно растёт, что подтверждается статистикой ввода новых мощностей ежегодно."
  );
  body.appendChild(overflowBlock);
});
