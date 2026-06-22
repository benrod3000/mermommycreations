// --- GSAP Timeline for Organized Sequential Entrance Animations ---
const tl = gsap.timeline();

// 1. Entrance for main hero header container card
tl.to("#main-content", {
    duration: 1.2,
    opacity: 1,
    y: 0,
    ease: "power3.out"
});

// 2. Entrance for themes showcase area
tl.to("#themes-section", {
    duration: 1.0,
    opacity: 1,
    y: 0,
    ease: "power3.out"
}, "-=0.6"); // Overlaps timeline slightly for smoother sequence

// 3. Entrance for contact/pre-booking inquiry card
tl.to("#contact-section", {
    duration: 1.0,
    opacity: 1,
    y: 0,
    ease: "power3.out"
}, "-=0.6");


// --- Infinite Ambient Floating Animations ---

// Slow bobbing water effect on the logo
gsap.to("#logo", {
    y: -12,
    duration: 2.8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});


// --- Dynamic Background Bubble Generator ---
const bubbleContainer = document.getElementById('bubbles-container');
const bubbleCount = 20; 

for (let i = 0; i < bubbleCount; i++) {
    let bubble = document.createElement('div');
    bubble.classList.add('bubble');
    
    let size = Math.random() * 35 + 10; 
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}vw`;
    
    bubbleContainer.appendChild(bubble);

    // Animate each bubble seamlessly on loop
    gsap.to(bubble, {
        y: -(window.innerHeight + 150), 
        x: `+=${Math.random() * 80 - 40}`, 
        duration: Math.random() * 8 + 7, 
        repeat: -1, 
        delay: Math.random() * 10, 
        ease: "none"
    });
}
