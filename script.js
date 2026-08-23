/* =====================================================
   PROMISE EDAFE OKUGBENI
   PORTFOLIO WEBSITE JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const nav = document.querySelector('.nav');
const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('#main-navigation');

if (menuBtn && nav) {

  menuBtn.addEventListener('click', () => {

    const isOpen = nav.classList.toggle('open');

    menuBtn.setAttribute(
      'aria-expanded',
      isOpen ? 'true' : 'false'
    );

    menuBtn.setAttribute(
      'aria-label',
      isOpen
        ? 'Close navigation menu'
        : 'Open navigation menu'
    );

    menuBtn.textContent = isOpen ? '✕' : '☰';

  });

}


/* =====================================================
   CLOSE MOBILE MENU WHEN LINK IS CLICKED
===================================================== */

document.querySelectorAll('#main-navigation a').forEach(link => {

  link.addEventListener('click', () => {

    if (nav) {
      nav.classList.remove('open');
    }

    if (menuBtn) {

      menuBtn.setAttribute(
        'aria-expanded',
        'false'
      );

      menuBtn.setAttribute(
        'aria-label',
        'Open navigation menu'
      );

      menuBtn.textContent = '☰';

    }

  });

});


/* =====================================================
   CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
===================================================== */

document.addEventListener('click', event => {

  if (!nav || !menuBtn || !navigation) {
    return;
  }

  const clickedInsideNav =
    nav.contains(event.target);

  if (!clickedInsideNav) {

    nav.classList.remove('open');

    menuBtn.setAttribute(
      'aria-expanded',
      'false'
    );

    menuBtn.setAttribute(
      'aria-label',
      'Open navigation menu'
    );

    menuBtn.textContent = '☰';

  }

});


/* =====================================================
   HEADER SCROLL EFFECT
===================================================== */

const header =
  document.querySelector('.site-header');

function updateHeader() {

  if (!header) {
    return;
  }

  if (window.scrollY > 40) {

    header.classList.add('scrolled');

  } else {

    header.classList.remove('scrolled');

  }

}

window.addEventListener(
  'scroll',
  updateHeader,
  { passive: true }
);

updateHeader();


/* =====================================================
   ACTIVE NAVIGATION LINK
===================================================== */

const sections =
  document.querySelectorAll('main section[id]');

const navLinks =
  document.querySelectorAll(
    '#main-navigation a'
  );


function updateActiveNavigation() {

  let currentSection = '';

  const scrollPosition =
    window.scrollY + 180;


  sections.forEach(section => {

    const sectionTop =
      section.offsetTop;

    const sectionHeight =
      section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition <
        sectionTop + sectionHeight
    ) {

      currentSection =
        section.getAttribute('id');

    }

  });


  navLinks.forEach(link => {

    const href =
      link.getAttribute('href');

    link.classList.remove('active');

    if (
      href === `#${currentSection}`
    ) {

      link.classList.add('active');

    }

  });

}


window.addEventListener(
  'scroll',
  updateActiveNavigation,
  { passive: true }
);

window.addEventListener(
  'load',
  updateActiveNavigation
);


/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */

const revealElements =
  document.querySelectorAll('.reveal');


if ('IntersectionObserver' in window) {

  const revealObserver =
    new IntersectionObserver(
      (entries, observer) => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              'visible'
            );

            observer.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px'
      }
    );


  revealElements.forEach(element => {

    revealObserver.observe(element);

  });

} else {

  revealElements.forEach(element => {

    element.classList.add('visible');

  });

}


/* =====================================================
   BACK TO TOP BUTTON
===================================================== */

const backToTop =
  document.querySelector('.back-to-top');


function updateBackToTop() {

  if (!backToTop) {
    return;
  }

  if (window.scrollY > 500) {

    backToTop.classList.add('show');

  } else {

    backToTop.classList.remove('show');

  }

}


window.addEventListener(
  'scroll',
  updateBackToTop,
  { passive: true }
);

updateBackToTop();


/* =====================================================
   SMOOTH SCROLL
===================================================== */

document.querySelectorAll(
  'a[href^="#"]'
).forEach(anchor => {

  anchor.addEventListener(
    'click',
    function(event) {

      const targetId =
        this.getAttribute('href');

      if (
        !targetId ||
        targetId === '#'
      ) {
        return;
      }


      const target =
        document.querySelector(targetId);

      if (!target) {
        return;
      }


      event.preventDefault();


      const headerHeight =
        header
          ? header.offsetHeight
          : 0;


      const targetPosition =
        target.getBoundingClientRect().top +
        window.pageYOffset -
        headerHeight;


      window.scrollTo({

        top: targetPosition,

        behavior: 'smooth'

      });

    }
  );

});


/* =====================================================
   CONTACT LINK TRACKING
===================================================== */

document.querySelectorAll(
  'a[href^="mailto:"], a[href^="tel:"]'
).forEach(link => {

  link.addEventListener('click', () => {

    const type =
      link.href.startsWith('mailto:')
        ? 'email'
        : 'phone';

    console.log(
      `Contact action: ${type}`
    );

  });

});


/* =====================================================
   CURRENT YEAR
===================================================== */

const footerYear =
  document.querySelector(
    'footer .container'
  );


if (footerYear) {

  const currentYear =
    new Date().getFullYear();

  footerYear.innerHTML =
    footerYear.innerHTML.replace(
      /©\s*\d{4}/,
      `© ${currentYear}`
    );

}


/* =====================================================
   KEYBOARD ACCESSIBILITY
===================================================== */

document.addEventListener(
  'keydown',
  event => {

    if (
      event.key === 'Escape' &&
      nav
    ) {

      nav.classList.remove('open');

      if (menuBtn) {

        menuBtn.setAttribute(
          'aria-expanded',
          'false'
        );

        menuBtn.setAttribute(
          'aria-label',
          'Open navigation menu'
        );

        menuBtn.textContent = '☰';

      }

    }

  }
);


/* =====================================================
   PAGE LOADED
===================================================== */

window.addEventListener(
  'load',
  () => {

    document.body.classList.add(
      'page-loaded'
    );

  }
);
