document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       CONTACT SUCCESS MESSAGE AUTO HIDE
    ========================================= */

    const alertMessage = document.querySelector(
        ".contact-form-card .alert"
    );

    if (alertMessage) {

        setTimeout(() => {

            alertMessage.classList.add("alert-hide");

            setTimeout(() => {
                alertMessage.remove();
            }, 500);

        }, 3500);

    }


    /* =========================================
       VENGEANCE STYLE SCROLL REVEAL
    ========================================= */

    const revealElements = document.querySelectorAll(
        ".section-heading, " +
        ".about-content, " +
        ".about-card, " +
        ".skill-card, " +
        ".project-card, " +
        ".contact-info-card, " +
        ".contact-form-card"
    );

    revealElements.forEach((element) => {
        element.classList.add("vengeance-reveal");
    });


    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("vengeance-visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -60px 0px"
        }
    );


    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });


    /* =========================================
       SKILLS STAGGER
    ========================================= */

    const skillCards = document.querySelectorAll(".skill-card");

    skillCards.forEach((card, index) => {

        const delay = (index % 6) * 90;

        card.style.setProperty(
            "--reveal-delay",
            `${delay}ms`
        );

    });


    /* =========================================
       PROJECT CARDS STAGGER
    ========================================= */

    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach((card, index) => {

        card.style.setProperty(
            "--reveal-delay",
            `${index * 130}ms`
        );

    });


    /* =========================================
       HERO CINEMATIC REVEAL
    ========================================= */

    const heroElements = [
        document.querySelector(".hero-tag"),
        document.querySelector(".hero-title"),
        document.querySelector(".hero-subtitle"),
        document.querySelector(".hero-text"),
        document.querySelector(".hero-buttons")
    ];


    heroElements.forEach((element, index) => {

        if (!element) return;

        element.classList.add("hero-reveal");

        setTimeout(() => {

            element.classList.add("hero-visible");

        }, 180 + (index * 140));

    });


    /* =========================================
       HERO IMAGE REVEAL
    ========================================= */

    const heroImage = document.querySelector(".hero-image");

    if (heroImage) {

        heroImage.classList.add("hero-image-reveal");

        setTimeout(() => {

            heroImage.classList.add("hero-image-visible");

        }, 450);

    }


    /* =========================================
       SUBTLE HERO MOUSE PARALLAX
    ========================================= */

    const hero = document.querySelector(".hero");
    const profileImage = document.querySelector(".profile-image");

    if (
        hero &&
        profileImage &&
        window.matchMedia("(pointer: fine)").matches
    ) {

        hero.addEventListener("mousemove", (event) => {

            const heroRect = hero.getBoundingClientRect();

            const mouseX =
                event.clientX - heroRect.left;

            const mouseY =
                event.clientY - heroRect.top;

            const centerX =
                heroRect.width / 2;

            const centerY =
                heroRect.height / 2;

            const moveX =
                (mouseX - centerX) / centerX;

            const moveY =
                (mouseY - centerY) / centerY;

            profileImage.style.setProperty(
                "--mouse-x",
                `${moveX * 7}px`
            );

            profileImage.style.setProperty(
                "--mouse-y",
                `${moveY * 7}px`
            );

        });


        hero.addEventListener("mouseleave", () => {

            profileImage.style.setProperty(
                "--mouse-x",
                "0px"
            );

            profileImage.style.setProperty(
                "--mouse-y",
                "0px"
            );

        });

    }


    /* =========================================
       NAVBAR SCROLL EFFECT
    ========================================= */

    const navbar = document.querySelector(".custom-navbar");

    const updateNavbar = () => {

        if (!navbar) return;

        if (window.scrollY > 40) {

            navbar.classList.add("navbar-scrolled");

        } else {

            navbar.classList.remove("navbar-scrolled");

        }

    };


    updateNavbar();

    window.addEventListener(
        "scroll",
        updateNavbar,
        {
            passive: true
        }
    );

});