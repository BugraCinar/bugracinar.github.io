const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("#kinetic-menu");
const accordionTriggers = document.querySelectorAll(".accordion-trigger");
const revealItems = document.querySelectorAll(".reveal");
const contactForm = document.querySelector(".contact-form");
const heroCopy = document.querySelector("[data-scroll-scale]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "Close" : "Menu";
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "Menu";
    });
  });
}

accordionTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const item = trigger.closest(".accordion-item");
    const isOpen = item?.classList.toggle("open") ?? false;
    trigger.setAttribute("aria-expanded", String(isOpen));
  });
});

if ("IntersectionObserver" in window && !reduceMotion) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -70px 0px" }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

if (heroCopy && !reduceMotion) {
  const updateHero = () => {
    const progress = Math.min(window.scrollY / 420, 1);
    const scale = 1 + progress * 0.18;
    const opacity = 1 - progress * 0.72;
    heroCopy.style.setProperty("--hero-scale", scale.toFixed(3));
    heroCopy.style.setProperty("--hero-opacity", opacity.toFixed(3));
  };

  updateHero();
  window.addEventListener("scroll", updateHero, { passive: true });
}

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
});
