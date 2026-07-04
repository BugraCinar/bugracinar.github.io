const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("#industrial-menu");

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

const terminalLines = [
  ["BUS.CHECK", "MODULE-01 ONLINE", "OK"],
  ["AUTH.SEAL", "SHA256 VERIFIED", "LOCK"],
  ["LOAD.BAL", "98.7 INDEX", "NOM"],
  ["USER.PATH", "CTA CHANNEL CLEAR", "READY"],
  ["TEMP.CASE", "31C NOMINAL", "OK"],
  ["PIPE.SYNC", "FLOW CHANNEL 04", "PASS"],
  ["LED.TEST", "STATUS MATRIX GREEN", "OK"]
];

const terminal = document.querySelector("#terminal-lines");
let terminalIndex = 4;

function addTerminalLine() {
  if (!terminal) return;

  const [code, message, state] = terminalLines[terminalIndex % terminalLines.length];
  const row = document.createElement("p");
  row.innerHTML = `<span>${code}</span><strong>${message}</strong><em>${state}</em>`;
  terminal.prepend(row);

  while (terminal.children.length > 5) {
    terminal.lastElementChild.remove();
  }

  terminalIndex += 1;
}

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (terminal && !reducedMotion) {
  window.setInterval(addTerminalLine, 2600);
}

const accessForm = document.querySelector(".access-form");
const formStatus = document.querySelector(".form-status");

if (accessForm && formStatus) {
  accessForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent = "Signal queued. Control channel ready.";
  });
}
