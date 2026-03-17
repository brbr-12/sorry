document.addEventListener('mousemove', (e) => {
  const heart = document.createElement('span');
  heart.innerHTML = '🌼'; 
  heart.style.position = 'fixed';
  heart.style.left = e.clientX + 'px';
  heart.style.top = e.clientY + 'px';
  heart.style.fontSize = Math.random() * 20 + 10 + 'px';
  heart.style.pointerEvents = 'none';
  heart.style.transition = 'all 1s linear';
  heart.style.opacity = '1';

  document.body.appendChild(heart);
  setTimeout(() => {
    heart.style.transform = `translateY(-50px) rotate(${Math.random() * 360}deg)`;
    heart.style.opacity = '0';
  }, 10);

  setTimeout(() => {
    heart.remove();
  }, 1000);
});

const lastBtn = document.getElementById('magicBtn'); // Make sure your button has this ID!

lastBtn.addEventListener('click', () => {
  // 1. Play the confetti effect
  const duration = 3 * 1000; // 3 seconds
  const end = Date.now() + duration;

  (function frame() {
    // Launch from the left
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      shapes: ['circle'], // Standard confetti
      colors: ['#ff6b81', '#ff4d6d', '#fff0f3']
    });
    
    // Launch from the right
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#ff6b81', '#ff4d6d', '#fff0f3']
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());

  // 2. Special Emoji Blast (Flowers & Chocolate!)
  const scalar = 2;
  const flower = confetti.shapeFromText({ text: '🌸', scalar });
  const daisy = confetti.shapeFromText({ text: '🌼', scalar });
  const chocolate = confetti.shapeFromText({ text: '🍫', scalar });

  confetti({
    shapes: [flower, daisy, chocolate],
    particleCount: 20,
    spread: 70,
    origin: { y: 0.6 } // Bursts from where the button is
  });
});