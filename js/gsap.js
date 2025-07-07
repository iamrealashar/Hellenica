document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  let intro = gsap.timeline({});

  intro.to(".bar", {
      height: 0,
      stagger: 0.1,
      duration: 1.5,
      ease: "power2.inOut",
    }, "intro")
    .from('#home img', {
      duration: 1.5,
      delay: 0.5,
      y: "100vh",
      scale: 0.5,
      ease: 'power2.out'
    }, "intro")
    .to(".webintro", {
      zIndex: -1,
      duration: 0.5,
    })
    .from("#scrollbar-track" , {
      duration: 1.5,
      opacity: 0,
      right: "-100%",
    }, "first")

  .from('header', {
    duration: 1,
    y: "-100vh",
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
    }, "first");





const cards = [
    {id: '#chapter1', endTranslateX: -2500, rotate: 45,},
    {id: '#chapter2', endTranslateX: -2500, rotate: -30, },
    {id: '#chapter3', endTranslateX: -2500, rotate: 45, },
    {id: '#chapter4', endTranslateX: -2500, rotate: -30, },
    {id: '#chapter5', endTranslateX: -2500, rotate: 45, },
    {id: '#chapter6', endTranslateX: -2500, rotate: -30,},
]


ScrollTrigger.create({
  trigger: "#history",
  start: "top top",
  end: "bottom",
  pin: true,
  scrub: 1,
  onUpdate: (self) => {
    gsap.to("#history", {
      x:`${-390 * self.progress}vw`,
      duration: 2.5,
      ease: "power4.out",
      });
},
});

cards.forEach((card) => {
  ScrollTrigger.create({
    trigger: "card.id",
    start:"top top",
    end: "bottom",
    scrub: 1,
    onUpdate: (self) => {
      gsap.to(card.id, {
        x: `${card.endTranslateX * self.progress}px`,
        rotate: `${card.rotate * self.progress * 2}`,
        duration: 0.5,
        ease: "power3.out",
      });
    },
  });
});


ScrollTrigger.create({
  start: 100,
  onEnter: () => {
    gsap.to(".scroll", {
      autoAlpha: 0,
      duration: 0.5,
    });
  },
  onLeaveBack: () => {
    gsap.to(".scroll", {
      autoAlpha: 1,
      duration: 0.5,
    });
  }
});

});