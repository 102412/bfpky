// Subtle floating motion of blobs with mouse movement
const blobs = document.querySelectorAll('.blob');

document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * 30;

  blobs.forEach((blob, i) => {
    const speed = (i + 1) * 0.5;
    blob.style.transform = `translate(${x * speed}px, ${y * speed}px) scale(1)`;
  });
});
