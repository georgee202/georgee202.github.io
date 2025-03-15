document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('cta-button');
    const contactForm = document.getElementById('contact-form');

    // Анимация кнопки
    ctaButton.addEventListener('click', () => {
        alert('Спасибо за ваш интерес!');
    });

    // Обработка формы
    contactForm.addEventListener('submit', (e) => {
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
});
