// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Wait for page to load
window.addEventListener('DOMContentLoaded', () => {
  
  // Get all elements
  const mainCard = document.querySelector('#mainCard');
  const logoWrap = document.querySelector('#logoWrap');
  const tagline = document.querySelector('#tagline');
  const heroText = document.querySelector('#heroText');
  const descText = document.querySelector('#descText');
  const pillContainer = document.querySelector('#pillContainer');
  const notifyBtn = document.querySelector('#notifyBtn');
  const footerNote = document.querySelector('.footer-note');

  // Set initial states (hidden)
  gsap.set([logoWrap, tagline, heroText, descText, pillContainer, notifyBtn, footerNote], {
    opacity: 0,
    y: 30,
    scale: 0.96,
    filter: 'blur(4px)',
  });

  // Main entrance animation timeline
  const tl = gsap.timeline({
    defaults: { ease: 'power3.out', duration: 1.2 },
    delay: 0.2,
  });

  tl.to(logoWrap, {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    duration: 1.4,
    ease: 'power4.out',
  })
  .to(tagline, {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    duration: 0.9,
    ease: 'power2.out',
  }, '-=0.6')
  .to(heroText, {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    duration: 1.2,
    ease: 'back.out(1.6)',
  }, '-=0.4')
  .to(descText, {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    duration: 0.9,
    ease: 'power2.out',
  }, '-=0.4')
  .to(pillContainer, {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.08,
  }, '-=0.3')
  .to(notifyBtn, {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    duration: 0.9,
    ease: 'elastic.out(1, 0.4)',
  }, '-=0.2')
  .to(footerNote, {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    duration: 0.7,
    ease: 'power1.out',
  }, '-=0.3');

  // ----- 3D MOUSE TILT EFFECT -----
  const card = document.querySelector('.coming-soon-card');
  
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(card, {
      rotateX: y * 0.8,
      rotateY: x * 0.8,
      transformPerspective: 800,
      duration: 0.6,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  });

  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.8,
      ease: 'power3.out',
    });
  });

  // ----- THEME PILL HOVER EFFECTS (enhanced with GSAP) -----
  const pills = document.querySelectorAll('.theme-pill');
  pills.forEach((pill) => {
    pill.addEventListener('mouseenter', () => {
      gsap.to(pill, {
        scale: 1.08,
        backgroundColor: 'rgba(255, 215, 200, 0.08)',
        borderColor: 'rgba(255, 215, 200, 0.5)',
        duration: 0.3,
        ease: 'power1.out',
      });
    });
    pill.addEventListener('mouseleave', () => {
      gsap.to(pill, {
        scale: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.04)',
        borderColor: 'rgba(255, 215, 200, 0.15)',
        duration: 0.4,
        ease: 'power1.out',
      });
    });
  });

  // ----- NOTIFY BUTTON CLICK ANIMATION -----
  notifyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    gsap.timeline({
      defaults: { duration: 0.4, ease: 'power2.out' }
    })
    .to(notifyBtn, {
      scale: 0.92,
      backgroundColor: 'rgba(255, 215, 200, 0.15)',
      borderColor: 'rgba(255, 215, 200, 0.7)',
      color: '#ffffff',
    })
    .to(notifyBtn, {
      scale: 1,
      backgroundColor: 'rgba(255, 245, 235, 0.03)',
      borderColor: 'rgba(255, 215, 200, 0.25)',
      color: '#f6e3d6',
      duration: 0.5,
      ease: 'elastic.out(1, 0.3)',
    });

    // Flash effect
    gsap.to(notifyBtn, {
      boxShadow: '0 0 40px rgba(255, 215, 200, 0.2)',
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      ease: 'power1.out',
    });

    // Demo notification
    alert('✨ You\'ll be notified when MerMommy Creations launches! ✨');
  });

  // ----- CONTINUOUS GLOW ON LOGO (GSAP loop) -----
  gsap.to('.logo-merry', {
    textShadow: '0 0 30px rgba(255, 215, 200, 0.25), 0 0 60px rgba(255, 200, 180, 0.1)',
    duration: 2.5,
    yoyo: true,
    repeat: -1,
    ease: 'sine.inOut',
  });

  gsap.to('.logo-creations', {
    textShadow: '0 0 25px rgba(200, 180, 160, 0.2)',
    duration: 3,
    yoyo: true,
    repeat: -1,
    ease: 'sine.inOut',
  });

  // Floating tagline
  gsap.to('.tagline i', {
    y: -3,
    duration: 2.8,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });

  // ----- SCROLL TRIGGER (re-animate if scrolled) -----
  ScrollTrigger.create({
    trigger: mainCard,
    start: 'top 80%',
    onEnter: () => {
      gsap.fromTo(heroText, 
        { scale: 1.02, color: '#fff7f0' },
        { scale: 1, color: '#fff7f0', duration: 0.8, ease: 'power1.out' }
      );
    }
  });

  console.log('✨ MerMommy Creations · Coming Soon with GSAP ✨');
});