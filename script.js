document.addEventListener("DOMContentLoaded", function() {

    // --- 1. HAMBURGER MENU FIX ---
    const menuToggle = document.getElementById("mobile-menu");
    const navList = document.getElementById("nav-list");

    if (menuToggle && navList) {
        menuToggle.addEventListener("click", function() {
            navList.classList.toggle("active");
            console.log("Toggle clicked!"); // Check this in browser console (F12)
        });
    } else {
        console.error("Could not find element with ID 'mobile-menu' or 'nav-list'. Please check your HTML.");
    }

    // --- 2. REVEAL ANIMATION ---
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 100; // How many pixels from top to trigger

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }
    window.addEventListener("scroll", reveal);
    reveal(); // Initial call

    // --- 3. PARTICLES BACKGROUND ---
    const particlesContainer = document.getElementById("particles");
    if (particlesContainer) {
        const canvas = document.createElement("canvas");
        particlesContainer.appendChild(canvas);
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particlesArray = [];
        for (let i = 0; i < 100; i++) {
            particlesArray.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: 2
            });
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particlesArray.forEach(p => {
                ctx.fillStyle = "#38bdf8";
                ctx.fillRect(p.x, p.y, p.size, p.size);
            });
            requestAnimationFrame(animate);
        }
        animate();
    }

    // --- 4. NAV SCROLL SPY (Highlight active link) ---
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar nav a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(a => {
            a.classList.remove("active");
            if (a.getAttribute("href") === "#" + current) {
                a.classList.add("active");
            }
        });
    });

    // --- 5. SKILL BARS ---
    const skillBars = document.querySelectorAll(".skill-progress");
    function animateSkills() {
        skillBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                bar.style.width = bar.getAttribute("data-width");
            }
        });
    }
    window.addEventListener("scroll", animateSkills);
    animateSkills(); // Initial call
});