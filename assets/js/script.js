document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    header.style.transform = 'rotate(5deg)';
    header.style.transition = 'transform 1s ease';

    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#feb47b';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = 'white';
        });
    });

    const content = document.querySelector('.content');
    content.addEventListener('mouseover', () => {
        content.style.transform = 'scale(1.05)';
        content.style.transition = 'transform 0.3s ease';
    });
    content.addEventListener('mouseout', () => {
        content.style.transform = 'scale(1)';
    });
});