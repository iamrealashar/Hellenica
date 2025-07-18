const drawer = document.getElementById('drawer');
const menuToggle = document.getElementById('menuToggle');
const body = document.body;

// Toggle drawer open/close
menuToggle.addEventListener('click', function () {
  drawer.classList.toggle('open');
  menuToggle.classList.toggle('open');
  body.classList.toggle('fixed');
});

// Smooth scroll after drawer closes
document.querySelectorAll('.drawer a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    // Close drawer
    drawer.classList.remove('open');
    menuToggle.classList.remove('open');
    body.classList.remove('fixed');

    // Delay smooth scroll until drawer finishes closing
    setTimeout(() => {
      if (targetElement) {
        scrollToWithFixedOffset(targetElement);
      }
    }, 300); // Matches drawer transition duration
  });
});

// Scroll for other anchor links outside drawer
document.querySelectorAll('a[href^="#"]:not(.drawer a)').forEach(link => {
  link.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      e.preventDefault();
      scrollToWithFixedOffset(targetElement);
    }
  });
});

// Scroll for custom buttons
document.querySelectorAll('button[data-scroll-to]').forEach(button => {
  button.addEventListener('click', function () {
    const targetId = this.getAttribute('data-scroll-to');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      scrollToWithFixedOffset(targetElement);
    }
  });
});

function scrollToWithFixedOffset(element) {
  const offset = 80; // Adjust to match your intended navbar space
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}


const thumb = document.getElementById("scrollbar-thumb");

function updateScrollProgress() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  thumb.style.height = `${scrollPercent}%`;
}

// If you're using Lenis
if (window.lenis) {
  lenis.on("scroll", updateScrollProgress);
} else {
  window.addEventListener("scroll", updateScrollProgress);
}





const cursor = document.querySelector('.custom-cursor');
  const cursorText = cursor.querySelector('.cursor-text');
  const cursorClick = cursor.querySelector('.cursor-click');

  // Move cursor with GSAP
  window.addEventListener('mouseenter', () => {
    gsap.to(cursor, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: 'power2.out'
    });
  });
  window.addEventListener('mouseleave', () => {
    gsap.to(cursor, {
      opacity: 0,
      scale: 0,
      duration: 0.5,
      ease: 'power2.out'
    });
  });




  window.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.2,
      ease: 'power2.out'
    });
  });

  // Click animation
  window.addEventListener('mousedown', () => {
    gsap.fromTo(cursorClick, 
      { scale: 1, opacity: 0.5 }, 
      { scale: 2, opacity: 0, duration: 0.5, ease: 'power2.out' }
    );
  });

  // Dynamic section text
  const historySection = document.querySelector('#history');
  if (historySection) {
    historySection.addEventListener('mouseenter', () => {
      cursor.classList.add('active');
      cursorText.textContent = 'Explore';
    });

    historySection.addEventListener('mouseleave', () => {
      cursor.classList.remove('active');
      cursorText.textContent = '';
    });
  }

  // You can add more triggers like this
  // const gallerySection = document.querySelector('.gallery');
  // gallerySection.addEventListener('mouseenter', () => {
  //   cursor.classList.add('active');
  //   cursorText.textContent = 'View';
  // });