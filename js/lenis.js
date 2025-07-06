// Initialize Lenis
const lenis = new Lenis(
    duration = 2.5,
    easing = (t) => t, 
);

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);