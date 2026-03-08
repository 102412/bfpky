// Subtle liquid movement on mouse
const liquids = document.querySelectorAll('.liquid');

document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 40;
  const y = (e.clientY / window.innerHeight - 0.5) * 40;

  liquids.forEach((liq, i) => {
    const speed = (i + 1) * 0.4;
    liq.style.transform = `translate(${x * speed}px, ${y * speed}px) scale(1)`;
  });
});
