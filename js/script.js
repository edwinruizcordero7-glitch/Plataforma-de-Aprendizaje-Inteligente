// Script interactivo para la plataforma

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll para navegación
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Botón principal
    const btnPrimary = document.querySelector('.btn-primary');
    if (btnPrimary) {
        btnPrimary.addEventListener('click', function() {
            document.querySelector('#modulos').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    // Animación de entrada para las tarjetas
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    const cards = document.querySelectorAll('.componente-card, .modulo-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        observer.observe(card);
    });

    // Log de bienvenida
    console.log('%cBienvenido a la Plataforma de Aprendizaje Inteligente', 
                'color: #6366f1; font-size: 16px; font-weight: bold;');
    console.log('%cDesarrollado con Lovable, Canva, GitHub y Moodle', 
                'color: #ec4899; font-size: 12px;');
});
