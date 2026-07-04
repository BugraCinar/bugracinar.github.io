const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("#botanical-menu");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

document.querySelectorAll(".faq-trigger").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const item = trigger.closest(".faq-item");
    const isOpen = item?.classList.toggle("is-open") || false;
    trigger.setAttribute("aria-expanded", String(isOpen));
    trigger.querySelector("span").textContent = isOpen ? "-" : "+";
  });
});

const reserveForm = document.querySelector(".reserve-form");
const formStatus = document.querySelector(".form-status");

if (reserveForm && formStatus) {
  reserveForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent = "Your botanical visit request is ready.";
  });
}
