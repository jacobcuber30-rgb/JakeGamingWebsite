// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    navToggle.classList.toggle("open");
  });

  // Close nav when clicking a link (on mobile)
  nav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      navToggle.classList.remove("open");
    });
  });
}

// Simple burger animation (optional)
if (navToggle) {
  navToggle.addEventListener("click", () => {
    const lines = navToggle.querySelectorAll(".nav-toggle-line");
    if (navToggle.classList.contains("open")) {
      lines[0].style.transform = "translateY(6px) rotate(45deg)";
      lines[1].style.opacity = "0";
      lines[2].style.transform = "translateY(-6px) rotate(-45deg)";
    } else {
      lines[0].style.transform = "";
      lines[1].style.opacity = "1";
      lines[2].style.transform = "";
    }
  });
}

// Smooth scrolling for same-page links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId.length > 1) {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      }
    }
  });
});

// Dynamic year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
