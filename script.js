// --- GSAP Entrances with Snappy Kinetic Velocity ---
const tl = gsap.timeline();

tl.to("#main-content", {
    duration: 0.9,
    opacity: 1,
    y: 0,
    ease: "back.out(1.2)"
});

tl.to("#themes-section", {
    duration: 0.7,
    opacity: 1,
    y: 0,
    ease: "power2.out"
}, "-=0.4");

tl.to("#contact-section", {
    duration: 0.7,
    opacity: 1,
    y: 0,
    ease: "power2.out"
}, "-=0.4");

// Dynamic ambient logo bobbing
gsap.to("#logo", {
    y: -8,
    duration: 2.4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

// --- Graphical Ambient Bubble Engine ---
const bubbleContainer = document.getElementById('bubbles-container');
const bubbleCount = 18; 

for (let i = 0; i < bubbleCount; i++) {
    let bubble = document.createElement('div');
    bubble.classList.add('bubble');
    
    let size = Math.random() * 45 + 10; 
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}vw`;
    
    // Asynchronously randomize framing hue accents
    bubble.style.borderColor = Math.random() > 0.5 ? 'rgba(38, 166, 154, 0.25)' : 'rgba(171, 71, 188, 0.25)';
    
    bubbleContainer.appendChild(bubble);

    gsap.to(bubble, {
        y: -(window.innerHeight + 150),
        x: `+=${Math.random() * 70 - 35}`,
        duration: Math.random() * 8 + 6,
        repeat: -1,
        delay: Math.random() * 8,
        ease: "none"
    });
}
