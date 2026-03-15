   
        /* ── AÑO DINÁMICO ── */
        document.getElementById('year').textContent = new Date().getFullYear();

        /* ── SMOOTH SCROLL ── */
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });

        /* ── MENÚ HAMBURGUESA ── */
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');

        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                const isOpen = hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
                hamburger.setAttribute('aria-expanded', isOpen);
            });
            navMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    hamburger.setAttribute('aria-expanded', 'false');
                });
            });
        }

        /* ── NAVBAR SCROLL ── */
        const navbar = document.getElementById('navbar');
        if (navbar) {
            window.addEventListener('scroll', () => {
                navbar.classList.toggle('scrolled', window.scrollY > 50);
            }, { passive: true });
        }

        /* ── ANIMACIÓN SKILLS ── */
        const skillBars = document.querySelectorAll('.skill-progress');
        const animateSkills = () => {
            skillBars.forEach(bar => {
                const w = bar.getAttribute('data-width');
                if (w) bar.style.width = w + '%';
            });
        };

        /* ── INTERSECTION OBSERVER ── */
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                    if (entry.target.id === 'habilidades') animateSkills();
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        document.querySelectorAll('section').forEach(s => observer.observe(s));

        /* ── INIT ── */
        document.addEventListener('DOMContentLoaded', animateSkills);
    