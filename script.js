document.addEventListener("DOMContentLoaded", () => {
    
    // =========================================
    // 1. GSAP ENTRANCE ANIMATIONS
    // =========================================
    const initAnimations = () => {
        const tl = gsap.timeline();

        tl.to("#main-content", { duration: 1.1, opacity: 1, y: 0, ease: "back.out(1.5)" })
          .to("#process-section", { duration: 0.8, opacity: 1, y: 0, ease: "power2.out" }, "-=0.5")
          .to("#themes-section", { duration: 0.8, opacity: 1, y: 0, ease: "power2.out" }, "-=0.5")
          .to("#contact-section", { duration: 0.8, opacity: 1, y: 0, ease: "power2.out" }, "-=0.5");

        // Gentle float loop for the main logo bubble
        gsap.to(".logo-bubble", { y: -14, duration: 2.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
    };

    // =========================================
    // 2. PARTICLE ENGINE (BUBBLES & SPARKLES)
    // =========================================
    const initParticles = () => {
        const decorContainer = document.getElementById('decor-container');
        const particleCount = 20; 

        for (let i = 0; i < particleCount; i++) {
            let element = document.createElement('div');
            element.classList.add('bubble-pop');
            
            let isSparkle = Math.random() > 0.7;
            let size = Math.random() * 30 + 8;
            
            if (isSparkle) {
                element.innerText = "✨";
                element.style.background = "none";
                element.style.border = "none";
                element.style.fontSize = `${Math.random() * 15 + 12}px`;
            } else {
                element.style.width = `${size}px`;
                element.style.height = `${size}px`;
                element.style.boxShadow = "inset -3px -3px 0px rgba(255,255,255,0.15)";
            }
            
            element.style.left = `${Math.random() * 100}vw`;
            element.style.bottom = `-50px`;
            decorContainer.appendChild(element);

            gsap.to(element, {
                y: -(window.innerHeight + 150),
                x: `+=${Math.random() * 100 - 50}`,
                rotation: isSparkle ? 360 : 0,
                duration: Math.random() * 9 + 7,
                repeat: -1,
                delay: Math.random() * 10,
                ease: "none"
            });
        }
    };

    // =========================================
    // 3. FORMSPREE AJAX SUBMISSION HANDLER
    // =========================================
    const initFormHandler = () => {
        const form = document.getElementById("inquiry-form");
        
        if (form) {
            form.addEventListener("submit", async function(event) {
                event.preventDefault();
                const submitBtn = document.getElementById("submit-btn");
                submitBtn.textContent = "SENDING... 🌊";
                submitBtn.disabled = true;

                const data = new FormData(event.target);
                
                try {
                    const response = await fetch(event.target.action, {
                        method: form.method,
                        body: data,
                        headers: { 'Accept': 'application/json' }
                    });
                    
                    if (response.ok) {
                        gsap.to("#form-container", {
                            duration: 0.4,
                            opacity: 0,
                            onComplete: () => {
                                document.getElementById("form-container").style.display = "none";
                                const successMsg = document.getElementById("success-message");
                                successMsg.style.display = "block";
                                gsap.fromTo(successMsg, { opacity: 0, y: 20 }, { duration: 0.5, opacity: 1, y: 0 });
                            }
                        });
                    } else {
                        alert("Oops! There was a problem processing your choice. Please verify field coordinates.");
                        submitBtn.textContent = "SEND INQUIRY ➔";
                        submitBtn.disabled = false;
                    }
                } catch (error) {
                    alert("Network connection error. Please try sending your curation choice again.");
                    submitBtn.textContent = "SEND INQUIRY ➔";
                    submitBtn.disabled = false;
                }
            });
        }
    };

    // Initialize everything
    initAnimations();
    initParticles();
    initFormHandler();
});