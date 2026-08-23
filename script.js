/* =========================================================
   PROMISE EDAFE OKUGBENI
   WEBSITE JAVASCRIPT
   COMPLETE FINAL SCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


  /* =======================================================
     01. ELEMENTS
  ======================================================= */

  const nav = document.querySelector(".nav");
  const menuBtn = document.querySelector(".menu-btn");
  const navigationLinks = document.querySelectorAll(".nav nav a");

  const header = document.querySelector(".site-header");

  const backToTop = document.querySelector(".back-to-top");

  const revealElements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right"
  );


  /* =======================================================
     02. MOBILE MENU
  ======================================================= */

  if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

      const isOpen = nav.classList.toggle("open");

      menuBtn.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

      menuBtn.setAttribute(
        "aria-label",
        isOpen
          ? "Close navigation menu"
          : "Open navigation menu"
      );

      menuBtn.textContent = isOpen ? "✕" : "☰";

      document.body.classList.toggle(
        "menu-open",
        isOpen
      );

    });

  }


  /* =======================================================
     03. CLOSE MOBILE MENU AFTER CLICK
  ======================================================= */

  navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

      if (!nav || !menuBtn) return;

      nav.classList.remove("open");

      menuBtn.setAttribute(
        "aria-expanded",
        "false"
      );

      menuBtn.setAttribute(
        "aria-label",
        "Open navigation menu"
      );

      menuBtn.textContent = "☰";

      document.body.classList.remove(
        "menu-open"
      );

    });

  });


  /* =======================================================
     04. CLOSE MENU WHEN CLICKING OUTSIDE
  ======================================================= */

  document.addEventListener("click", (event) => {

    if (!nav || !menuBtn) return;

    const clickedInsideNav =
      nav.contains(event.target);

    if (!clickedInsideNav) {

      nav.classList.remove("open");

      menuBtn.setAttribute(
        "aria-expanded",
        "false"
      );

      menuBtn.setAttribute(
        "aria-label",
        "Open navigation menu"
      );

      menuBtn.textContent = "☰";

      document.body.classList.remove(
        "menu-open"
      );

    }

  });


  /* =======================================================
     05. HEADER SCROLL EFFECT
  ======================================================= */

  const updateHeader = () => {

    if (!header) return;

    if (window.scrollY > 40) {

      header.classList.add("scrolled");

    } else {

      header.classList.remove("scrolled");

    }

  };


  updateHeader();

  window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
  );


  /* =======================================================
     06. ACTIVE NAVIGATION
  ======================================================= */

  const sections = document.querySelectorAll(
    "main section[id]"
  );


  const updateActiveNavigation = () => {

    let currentSection = "";

    const scrollPosition =
      window.scrollY + 140;


    sections.forEach((section) => {

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
          section.getAttribute("id");

      }

    });


    navigationLinks.forEach((link) => {

      const href =
        link.getAttribute("href");

      link.classList.remove("active");


      if (
        href === `#${currentSection}`
      ) {

        link.classList.add("active");

      }

    });

  };


  updateActiveNavigation();


  window.addEventListener(
    "scroll",
    updateActiveNavigation,
    { passive: true }
  );


  /* =======================================================
     07. SCROLL REVEAL ANIMATIONS
  ======================================================= */

  if (
    "IntersectionObserver" in window &&
    revealElements.length
  ) {

    const revealObserver =
      new IntersectionObserver(
        (entries, observer) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                "visible"
              );

              observer.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: 0.12,
          rootMargin: "0px 0px -50px 0px"
        }
      );


    revealElements.forEach((element) => {

      revealObserver.observe(element);

    });

  } else {

    revealElements.forEach((element) => {

      element.classList.add("visible");

    });

  }


  /* =======================================================
     08. BACK TO TOP BUTTON
  ======================================================= */

  const updateBackToTop = () => {

    if (!backToTop) return;


    if (window.scrollY > 600) {

      backToTop.classList.add("show");

    } else {

      backToTop.classList.remove("show");

    }

  };


  updateBackToTop();


  window.addEventListener(
    "scroll",
    updateBackToTop,
    { passive: true }
  );


  /* =======================================================
     09. BACK TO TOP CLICK
  ======================================================= */

  if (backToTop) {

    backToTop.addEventListener(
      "click",
      (event) => {

        event.preventDefault();

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }
    );

  }


  /* =======================================================
     10. ESCAPE KEY CLOSES MOBILE MENU
  ======================================================= */

  document.addEventListener(
    "keydown",
    (event) => {

      if (event.key !== "Escape") return;

      if (!nav || !menuBtn) return;

      nav.classList.remove("open");

      menuBtn.setAttribute(
        "aria-expanded",
        "false"
      );

      menuBtn.setAttribute(
        "aria-label",
        "Open navigation menu"
      );

      menuBtn.textContent = "☰";

      document.body.classList.remove(
        "menu-open"
      );

    }
  );


  /* =======================================================
     11. HANDLE RESIZE
  ======================================================= */

  window.addEventListener(
    "resize",
    () => {

      if (window.innerWidth > 850) {

        if (nav) {
          nav.classList.remove("open");
        }

        if (menuBtn) {

          menuBtn.setAttribute(
            "aria-expanded",
            "false"
          );

          menuBtn.setAttribute(
            "aria-label",
            "Open navigation menu"
          );

          menuBtn.textContent = "☰";

        }

        document.body.classList.remove(
          "menu-open"
        );

      }

      updateActiveNavigation();

    }
  );


  /* =======================================================
     12. SMOOTH INTERNAL LINKS
  ======================================================= */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

      link.addEventListener(
        "click",
        (event) => {

          const targetId =
            link.getAttribute("href");

          if (
            !targetId ||
            targetId === "#"
          ) {
            return;
          }


          const target =
            document.querySelector(
              targetId
            );


          if (!target) return;


          event.preventDefault();


          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }
      );

    });


  /* =======================================================
     13. CURRENT YEAR
  ======================================================= */

  const currentYear =
    document.querySelector(
      "[data-current-year]"
    );


  if (currentYear) {

    currentYear.textContent =
      new Date().getFullYear();

  }


  /* =======================================================
     14. CONSOLE MESSAGE
  ======================================================= */

  console.log(
    "Promise Edafe Okugbeni Portfolio loaded successfully."
  );


});
