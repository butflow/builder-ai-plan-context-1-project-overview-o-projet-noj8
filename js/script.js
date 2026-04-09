document.addEventListener('DOMContentLoaded', () => {
            // Reveal on Scroll
            const reveals = document.querySelectorAll('.reveal');
            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1 });

            reveals.forEach(el => revealObserver.observe(el));

            // FAQ Accordion
            document.querySelectorAll('.faq-question').forEach(q => {
                q.addEventListener('click', () => {
                    const item = q.parentElement;
                    item.classList.toggle('active');
                    const icon = q.querySelector('span');
                    icon.textContent = item.classList.contains('active') ? '-' : '+';
                });
            });

            // Smooth Scroll
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        window.scrollTo({
                            top: target.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Header Scroll
            const nav = document.querySelector('nav');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    nav.style.padding = '12px 5%';
                    nav.style.boxShadow = 'var(--shadow-md)';
                } else {
                    nav.style.padding = '20px 5%';
                    nav.style.boxShadow = 'none';
                }
            });
        });