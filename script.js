const footerThemeToggle = document.getElementById('footer-theme-toggle');
const body = document.body;

footerThemeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Update icon based on the current mode
  if (body.classList.contains('dark-mode')) {
    footerThemeToggle.textContent = '🌙'; // Moon icon for dark mode
  } else {
    footerThemeToggle.textContent = '🌞'; // Sun icon for light mode
  }
});

// Dynamic scene glow that follows the pointer (subtle, perf-friendly)
let rafId = null;
document.addEventListener('pointermove', (event) => {
  if (rafId) return;
  rafId = requestAnimationFrame(() => {
    const xPercent = (event.clientX / window.innerWidth) * 100;
    const yPercent = (event.clientY / window.innerHeight) * 100;
    document.documentElement.style.setProperty('--pointer-x', xPercent + '%');
    document.documentElement.style.setProperty('--pointer-y', yPercent + '%');
    rafId = null;
  });
});

// Initialize position so gradients look good before interaction
document.documentElement.style.setProperty('--pointer-x', '50%');
document.documentElement.style.setProperty('--pointer-y', '30%');