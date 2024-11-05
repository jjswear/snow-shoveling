document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission (you can customize this part)
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for your message. We will get back to you soon!');
        form.reset();
    });
});