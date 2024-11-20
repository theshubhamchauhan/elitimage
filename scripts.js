const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.question');
    question.addEventListener('click', () => {
        const answer = item.querySelector('.answer');
        const icon = question.querySelector('i');
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
        } else {
            answer.style.display = 'block';
            icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
        }
    });
});

// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
