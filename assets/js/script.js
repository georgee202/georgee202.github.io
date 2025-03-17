document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('cta-button');
    const contactForm = document.getElementById('contact-form');

    // Анимация кнопки
    ctaButton.addEventListener('click', () => {
        alert('Спасибо за ваш интерес!');
    });

    // Обработка формы
    contactForm.addEventListener(' submit', (e) => {
        e.preventDefault();
        alert('Ваше сообщение отправлено!');
        contactForm.reset();
    });

    // Динамическое изменение фона заголовка
    const header = document.querySelector('header');
    setInterval(() => {
        const randomColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        header.style.backgroundColor = randomColor;
    }, 2000);

    // Примеры 2D трансформаций
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'rotate(5deg)';
        });
        item.addEventListener('mouseout', () => {
            item.style.transform = 'rotate(0deg)';
        });
    });

    const flexItems = document.querySelectorAll('.flex-item');
    flexItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'translateY(-10px)';
        });
        item.addEventListener('mouseout', () => {
            item.style.transform = 'translateY(0)';
        });
    });
});