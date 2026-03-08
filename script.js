const blobs = document.querySelectorAll('.blob');
const wand = document.querySelector('.wand img');

// Blob subtle float with mouse movement
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * 30;

  blobs.forEach((blob, i) => {
    const speed = (i + 1) * 0.5;
    blob.style.transform = `translate(${x * speed}px, ${y * speed}px) scale(1)`;
  });
});

// Wand scroll parallax (3D effect)
window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  wand.style.transform = `rotateX(${scroll * 0.05}deg) rotateY(${scroll * 0.03}deg)`;
});
