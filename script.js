/* ===================================
   LOADER
=================================== */

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1500);
});

/* ===================================
   MOBILE MENU
=================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

/* ===================================
   TYPING EFFECT
=================================== */

const typingElement = document.querySelector(".typing");

const roles = [
    "Data Analyst",
    "Aspiring Data Scientist",
    "Python Developer",
    "Web Developer",
    "Machine Learning Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    let currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex++);

        if (charIndex > currentRole.length) {
            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex--);

        if (charIndex < 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();

/* ===================================
   COUNTER ANIMATION
=================================== */

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let count = 0;

        const increment = target / 100;

        const updateCounter = () => {

            if (count < target) {

                count += increment;

                counter.innerText =
                    Math.ceil(count);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target + "+";
            }
        };

        updateCounter();
    });
};

const counterSection =
    document.querySelector(".counter-section");

const counterObserver =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                startCounter();
                counterObserver.unobserve(entry.target);
            }
        });

    }, {
        threshold: 0.5
    });

if (counterSection) {
    counterObserver.observe(counterSection);
}

/* ===================================
   SKILL PROGRESS BAR
=================================== */

const skillBars =
    document.querySelectorAll(".progress-bar span");

const skillObserver =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const bar = entry.target;

                bar.style.width =
                    bar.dataset.width;
            }
        });

    }, {
        threshold: 0.4
    });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

/* ===================================
   SCROLL REVEAL
=================================== */

const revealElements = document.querySelectorAll(
    ".glass-card, .section-title, .project-card"
);

function revealOnScroll() {

    revealElements.forEach(el => {

        const top =
            el.getBoundingClientRect().top;

        const visible = 120;

        if (top < window.innerHeight - visible) {

            el.classList.add("active");
            el.classList.add("reveal");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ===================================
   BACK TO TOP BUTTON
=================================== */

const topBtn =
    document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* ===================================
   ACTIVE NAV LINK
=================================== */

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {
            link.classList.add("active-link");
        }
    });
});

/* ===================================
   CUSTOM CURSOR
=================================== */

const cursor =
    document.querySelector(".cursor");

const cursor2 =
    document.querySelector(".cursor2");

document.addEventListener("mousemove", e => {

    cursor.style.left =
        e.clientX + "px";

    cursor.style.top =
        e.clientY + "px";

    cursor2.style.left =
        e.clientX + "px";

    cursor2.style.top =
        e.clientY + "px";
});

document.querySelectorAll(
    "a, button, .glass-card"
).forEach(item => {

    item.addEventListener("mouseenter", () => {

        cursor2.style.width = "50px";
        cursor2.style.height = "50px";
    });

    item.addEventListener("mouseleave", () => {

        cursor2.style.width = "35px";
        cursor2.style.height = "35px";
    });

});

/* ===================================
   CONTACT FORM
=================================== */

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            alert(
                "Thank you! Your message has been submitted."
            );

            contactForm.reset();
        }
    );
}

/* ===================================
   PARTICLE BACKGROUND
=================================== */

const canvas =
    document.getElementById("particles");

const ctx =
    canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

class Particle {

    constructor() {

        this.x =
            Math.random() * canvas.width;

        this.y =
            Math.random() * canvas.height;

        this.size =
            Math.random() * 3 + 1;

        this.speedX =
            Math.random() * 1 - 0.5;

        this.speedY =
            Math.random() * 1 - 0.5;
    }

    update() {

        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width)
            this.x = 0;

        if (this.x < 0)
            this.x = canvas.width;

        if (this.y > canvas.height)
            this.y = 0;

        if (this.y < 0)
            this.y = canvas.height;
    }

    draw() {

        ctx.fillStyle =
            "rgba(0,229,255,0.8)";

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
            Math.PI * 2
        );

        ctx.fill();
    }
}

function initParticles() {

    particlesArray = [];

    for (let i = 0; i < 120; i++) {

        particlesArray.push(
            new Particle()
        );
    }
}

initParticles();

function connectParticles() {

    for (let a = 0; a < particlesArray.length; a++) {

        for (
            let b = a;
            b < particlesArray.length;
            b++
        ) {

            let dx =
                particlesArray[a].x -
                particlesArray[b].x;

            let dy =
                particlesArray[a].y -
                particlesArray[b].y;

            let distance =
                dx * dx + dy * dy;

            if (distance < 10000) {

                ctx.strokeStyle =
                    "rgba(0,229,255,0.08)";

                ctx.lineWidth = 1;

                ctx.beginPath();

                ctx.moveTo(
                    particlesArray[a].x,
                    particlesArray[a].y
                );

                ctx.lineTo(
                    particlesArray[b].x,
                    particlesArray[b].y
                );

                ctx.stroke();
            }
        }
    }
}

function animateParticles() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    particlesArray.forEach(
        particle => {

            particle.update();
            particle.draw();
        }
    );

    connectParticles();

    requestAnimationFrame(
        animateParticles
    );
}

animateParticles();

/* ===================================
   RESIZE CANVAS
=================================== */

window.addEventListener("resize", () => {

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;

    initParticles();
});

/* ===================================
   PARALLAX EFFECT
=================================== */

window.addEventListener(
    "mousemove",
    e => {

        const hero =
            document.querySelector(
                ".hero"
            );

        const x =
            (window.innerWidth / 2 -
                e.pageX) / 50;

        const y =
            (window.innerHeight / 2 -
                e.pageY) / 50;

        hero.style.transform =
            `translate(${x}px, ${y}px)`;
    }
);

console.log(
    "Rajanikant Portfolio Loaded Successfully 🚀"
);