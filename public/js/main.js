// Countdown Timer
function startCountdown() {
    const countdownElement = document.getElementById('countdown');

    // Define o tempo final (24 horas a partir de agora)
    const endTime = new Date().getTime() + (24 * 60 * 60 * 1000);

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = endTime - now;

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.textContent =
            String(hours).padStart(2, '0') + ':' +
            String(minutes).padStart(2, '0') + ':' +
            String(seconds).padStart(2, '0');

        if (distance < 0) {
            countdownElement.textContent = 'OFERTA ENCERRADA';
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Floating CTA
function handleFloatingCta() {
    const floatingCta = document.getElementById('floatingCta');
    const headerHeight = document.querySelector('.header').offsetHeight;

    window.addEventListener('scroll', function() {
        if (window.scrollY > headerHeight) {
            floatingCta.classList.add('show');
        } else {
            floatingCta.classList.remove('show');
        }
    });
}

// Smooth scroll for anchor links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// FAQ Toggle
function setupFaqToggle() {
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isVisible = answer.style.display === 'block';

            // Fecha todas as outras respostas
            document.querySelectorAll('.faq-answer').forEach(a => {
                a.style.display = 'none';
            });

            // Toggle da resposta clicada
            answer.style.display = isVisible ? 'none' : 'block';
        });
    });

    // Inicialmente, esconde todas as respostas do FAQ
    document.querySelectorAll('.faq-answer').forEach(answer => {
        answer.style.display = 'none';
    });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    startCountdown();
    handleFloatingCta();
    setupSmoothScroll();
    setupFaqToggle();
});
