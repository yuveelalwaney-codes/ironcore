// =================================
// Smooth scrolling
// =================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// =================================
// Scroll reveal animation
// =================================

const revealElements = document.querySelectorAll(
    ".program-card, .trainer-card, .pricing-card, .feature"
);

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);

revealElements.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});


// =================================
// Button click feedback
// =================================

const buttons = document.querySelectorAll(
    ".button, .pricing-button, .nav-button"
);

buttons.forEach(button => {

    button.addEventListener("click", () => {

        button.style.transform = "scale(0.97)";

        setTimeout(() => {

            button.style.transform = "";

        }, 120);

    });

});


// =================================
// Mobile navigation menu
// =================================

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

        mainNav.classList.toggle("active");

        if (mainNav.classList.contains("active")) {

            menuToggle.textContent = "✕";

        } else {

            menuToggle.textContent = "☰";

        }

    });


    // Close menu after clicking a link

    mainNav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            mainNav.classList.remove("active");

            menuToggle.textContent = "☰";

        });

    });

}


// =================================
// Contact form
// =================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const submitButton =
            contactForm.querySelector(".form-submit");

        submitButton.innerHTML = `
            ENQUIRY SENT ✓
            <span>✓</span>
        `;

        submitButton.style.background = "#1f8f4c";

        contactForm.reset();

        setTimeout(() => {

            submitButton.innerHTML = `
                SEND ENQUIRY
                <span>→</span>
            `;

            submitButton.style.background = "";

        }, 4000);

    });

}