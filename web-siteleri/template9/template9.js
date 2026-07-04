const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("#defi-menu");

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
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const ledgerLines = [
  ["block.confirmed", "0000000000000004f2a", "+2.48 BTC"],
  ["vault.rebalanced", "orange-yield-03", "+0.72%"],
  ["proof.synced", "merkle-root: 91AF", "valid"],
  ["risk.checked", "collateral band 142%", "clear"],
  ["node.latency", "istanbul-edge-07", "18ms"],
  ["fees.optimized", "batch route active", "-12.4%"],
  ["reserve.published", "proof window 24h", "fresh"],
  ["oracle.sealed", "price band verified", "locked"]
];

const terminal = document.querySelector("#ledger-lines");
let ledgerIndex = 4;

function renderLedgerLine() {
  if (!terminal) return;

  const [eventName, hash, value] = ledgerLines[ledgerIndex % ledgerLines.length];
  const row = document.createElement("p");
  row.innerHTML = `<span>${eventName}</span><strong>${hash}</strong><em>${value}</em>`;
  terminal.prepend(row);

  while (terminal.children.length > 5) {
    terminal.lastElementChild.remove();
  }

  ledgerIndex += 1;
}

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (terminal && !reducedMotion) {
  window.setInterval(renderLedgerLine, 2400);
}

const accessForm = document.querySelector(".access-form");

if (accessForm) {
  accessForm.addEventListener("submit", (event) => {
    event.preventDefault();
    accessForm.classList.add("is-submitted");
  });
}
