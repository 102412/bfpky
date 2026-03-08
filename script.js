// Optional: subtle floating motion for the dots on mouse move
const dots = document.querySelectorAll('.dot');

document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth) - 0.5;
  const y = (e.clientY / window.innerHeight) - 0.5;

  dots.forEach((dot, i) => {
    const speed = (i + 1) * 10;
    dot.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
  });
});
