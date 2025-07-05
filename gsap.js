document.addEventListener("DOMContentLoaded", () => {
  let intro = gsap.timeline({});

  intro.to(".bar", {
      height: 0,
      stagger: 0.1,
      duration: 1.5,
      ease: "power2.inOut",
    })
  .from('header', {
    duration: 1,
    opacity: 0,
    y: "-100vh",
    ease: 'power2.out'
  }, "first")
    .from('#home img', {
      duration: 1,
      y: "100vh",
      scale: 0.5,
      ease: 'power2.out'
    }, "first")
    .from('#home h1', {
      duration: 1.5,
      y: "100vh",
      ease: 'power2.out'
    })
    .from('#home p', {
      duration: 1,
      opacity: 0,
      y: "100%",
      ease: 'power2.out',
      letterSpacing: "0rem",
      wordSpacing: "0rem",
    })
    .from('.scroll', {
      duration: 2,
      delay: 0.5,
      opacity: 0,
      y: "100vh",
      ease: 'power2.out',
    }, "first")
});