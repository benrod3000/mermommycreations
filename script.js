/* ============================================
   MERMOMMY CREATIONS — MASTER SCRIPTS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // =========================================
    // 1. REGISTER GSAP PLUGINS
    // =========================================
    gsap.registerPlugin(ScrollTrigger);

    // =========================================
    // 2. NAVIGATION
    // =========================================
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.getElementById('navbar');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
    }

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // =========================================
    // 3. PARTICLES (BUBBLES & SPARKLES)
    // =========================================
    const decorContainer = document.getElementById('decor-container');
    const particleCount = 25;

    for (let i = 0; i < particleCount; i++) {
        const element = document.createElement('div');
        element.classList.add('bubble-pop');

        const isSparkle = Math.random() > 0.75;
        const size = Math.random() * 30 + 8;

        if (isSparkle) {
            element.innerText = '✨';
            element.style.background = 'none';
            element.style.border = 'none';
            element.style.fontSize = `${Math.random() * 15 + 12}px`;
            element.style.width = 'auto';
            element.style.height = 'auto';
        } else {
            element.style.width = `${size}px`;
            element.style.height = `${size}px`;
            element.style.background = `rgba(255,255,255,${Math.random() * 0.04 + 0.02})`;
            element.style.border = `1px solid rgba(255,255,255,${Math.random() * 0.06 + 0.02})`;
        }

        element.style.left = `${Math.random() * 100}vw`;
        element.style.bottom = `-50px`;
        decorContainer.appendChild(element);

        gsap.to(element, {
            y: -(window.innerHeight + 200),
            x: `+=${Math.random() * 120 - 60}`,
            rotation: isSparkle ? 360 : 0,
            duration: Math.random() * 10 + 8,
            repeat: -1,
            delay: Math.random() * 12,
            ease: 'none',
        });
    }

    // =========================================
    // 4. GSAP ANIMATIONS (with ScrollTrigger)
    // =========================================

    // Hero - initial fade in
    gsap.from('.hero-title, .hero-sub, .hero-badge, .hero-bubble', {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.15,
        ease: 'back.out(1.7)',
        delay: 0.2,
    });

    // Banner
    gsap.from('#banner', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#banner',
            start: 'top 85%',
            toggleActions: 'play none none none',
        },
    });

    // Adventure Cards
    gsap.from('.adventure-card', {
        opacity: 0,
        y: 60,
        duration: 0.9,
        stagger: 0.12,
        ease: 'back.out(1.6)',
        scrollTrigger: {
            trigger: '#adventureGrid',
            start: 'top 80%',
            toggleActions: 'play none none none',
        },
    });

    // Tail (About) Section
    gsap.from('#tail .tail-card', {
        opacity: 0,
        y: 50,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#tail',
            start: 'top 80%',
            toggleActions: 'play none none none',
        },
    });

    // Tail Features
    gsap.from('.tail-feature', {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.1,
        ease: 'back.out(1.6)',
        scrollTrigger: {
            trigger: '.tail-features',
            start: 'top 85%',
            toggleActions: 'play none none none',
        },
    });

    // Process Steps
    gsap.from('.process-step', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#process',
            start: 'top 80%',
            toggleActions: 'play none none none',
        },
    });

    // Included Cards
    gsap.from('.included-card', {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.08,
        ease: 'back.out(1.6)',
        scrollTrigger: {
            trigger: '#includedGrid',
            start: 'top 85%',
            toggleActions: 'play none none none',
        },
    });

    // Add-on Cards
    gsap.from('.addon-card', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.12,
        ease: 'back.out(1.6)',
        scrollTrigger: {
            trigger: '#addonGrid',
            start: 'top 80%',
            toggleActions: 'play none none none',
        },
    });

    // Contact Form
    gsap.from('.contact-card', {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 80%',
            toggleActions: 'play none none none',
        },
    });

    // =========================================
    // 5. FLOATING ICONS (continuous loop)
    // =========================================
    document.querySelectorAll('.adventure-card .card-icon, .addon-card .addon-icon, .included-card .inc-icon, .tail-feature .tf-icon').forEach((icon) => {
        gsap.to(icon, {
            y: -6,
            duration: 2.6 + Math.random() * 0.6,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: Math.random() * 0.8,
        });
    });

    // =========================================
    // 6. FORM HANDLER (Formspree)
    // =========================================
    const form = document.getElementById('inquiry-form');

    if (form) {
        form.addEventListener('submit', async function (event) {
            event.preventDefault();
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending... 🌊';
            submitBtn.disabled = true;

            const data = new FormData(this);

            try {
                const response = await fetch(this.action, {
                    method: this.method,
                    body: data,
                    headers: { Accept: 'application/json' },
                });

                if (response.ok) {
                    gsap.to('#form-container', {
                        duration: 0.4,
                        opacity: 0,
                        onComplete: () => {
                            document.getElementById('form-container').style.display = 'none';
                            const successMsg = document.getElementById('success-message');
                            successMsg.style.display = 'block';
                            gsap.fromTo(successMsg, { opacity: 0, y: 20 }, { duration: 0.5, opacity: 1, y: 0 });
                        },
                    });
                } else {
                    alert('Oops! There was a problem. Please try again.');
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }
            } catch (error) {
                alert('Network error. Please try again.');
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }

});