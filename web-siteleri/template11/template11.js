const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("#clay-menu");

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

const controlSurface = document.querySelector(".control-surface");
const toneButtons = document.querySelectorAll(".tone-button");

toneButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tone = button.dataset.tone || "violet";
    controlSurface?.setAttribute("data-tone", tone);

    toneButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
  });
});

document.querySelectorAll(".faq-trigger").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const item = trigger.closest(".faq-item");
    const isOpen = item?.classList.toggle("is-open") || false;
    trigger.setAttribute("aria-expanded", String(isOpen));
    trigger.querySelector("span").textContent = isOpen ? "-" : "+";
  });
});

const accessForm = document.querySelector(".access-form");
const formStatus = document.querySelector(".form-status");

if (accessForm && formStatus) {
  accessForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent = "Soft launch request received.";
  });
}
