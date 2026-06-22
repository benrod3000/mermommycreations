// --- GSAP Animations ---

// 1. Fade in the main glassmorphism card
gsap.to("#main-content", {
    duration: 1.5,
    opacity: 1,
    y: 0,
    ease: "power3.out",
    delay: 0.3
});

// 2. Gentle floating water effect on the logo
gsap.to("#logo", {
    y: -12,
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

// --- Dynamic Bubble Generator ---
const bubbleContainer = document.getElementById('bubbles-container');
const bubbleCount = 25; // Number of bubbles on screen

for (let i = 0; i < bubbleCount; i++) {
    let bubble = document.createElement('div');
    bubble.classList.add('bubble');
    
    // Randomize the size of each bubble
    let size = Math.random() * 40 + 10; 
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    
    // Randomize the starting horizontal position
    bubble.style.left = `${Math.random() * 100}vw`;
    bubbleContainer.appendChild(bubble);

    // Animate each bubble individually with GSAP
    gsap.to(bubble, {
        y: -(window.innerHeight + 150), // Float past the top of the screen
        x: `+=${Math.random() * 100 - 50}`, // Gentle left/right wobble
        duration: Math.random() * 6 + 6, // Random speed (6 to 12 seconds)
        repeat: -1, // Loop infinitely
        delay: Math.random() * 8, // Random start delays so they don't clump
        ease: "none"
    });
}