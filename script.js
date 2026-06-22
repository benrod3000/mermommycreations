// --- Smooth Cartoon Reveal Timeline ---
const tl = gsap.timeline();

tl.to("#main-content", {
    duration: 1.1,
    opacity: 1,
    y: 0,
    ease: "back.out(1.5)" // Gives a fun cartoon bounce upon entrance
});

tl.to("#themes-section", {
    duration: 0.8,
    opacity: 1,
    y: 0,
    ease: "power2.out"
}, "-=0.5");

tl.to("#contact-section", {
    duration: 0.8,
    opacity: 1,
    y: 0,
    ease: "power2.out"
}, "-=0.5");


// Gentle float loop for the main logo bubble
gsap.to(".logo-bubble", {
    y: -14,
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});


// --- Playful Cartoon Bubble & Star Particle Spawner ---
const decorContainer = document.getElementById('decor-container');
const particleCount = 20; 

for (let i = 0; i < particleCount; i++) {
    let element = document.createElement('div');
    element.classList.add('bubble-pop');
    
    // Mix bubbles and little floating sea sparkles
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
        // Shiny accent point inside the cartoon bubble
        element.style.boxShadow = "inset -3px -3px 0px rgba(255,255,255,0.15)";
    }
    
    element.style.left = `${Math.random() * 100}vw`;
    element.style.bottom = `-50px`;
    decorContainer.appendChild(element);

    // Dynamic drifting animation
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
