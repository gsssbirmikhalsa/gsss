/* =========================
   SLIDER CONTROLS
========================= */
function slideLeft(id) {
    const slider = document.getElementById(id);
    slider.scrollLeft = Math.max(
        slider.scrollLeft - slider.offsetWidth,
        0
    );
}

function slideRight(id) {
    const slider = document.getElementById(id);
    slider.scrollLeft = Math.min(
        slider.scrollLeft + slider.offsetWidth,
        slider.scrollWidth
    );
}

/* =========================
   FADE-IN ON SCROLL (FIXED)
========================= */
const sections = document.querySelectorAll(".section");

function revealSections() {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
}

window.addEventListener("load", revealSections);   // show top sections immediately
window.addEventListener("scroll", revealSections); // show others on scroll

/* =========================
   SCROLL TO TOP BUTTON
========================= */
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

/* =========================
   ACTIVE MENU HIGHLIGHT
========================= */
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
