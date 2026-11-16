
/* ==========================================
   GLOW NAILS AND BEAUTY BY AUDREY
   JAVASCRIPT
   ========================================== */

/* 1. RESERVATION WHATSAPP */

const formulaire = document.querySelector(".reservation");

if (formulaire) {
    const bouton = formulaire.querySelector("button");
    const numeroWhatsApp = "32499079045";

    if (bouton) {
        bouton.addEventListener("click", function () {

            if (!formulaire.checkValidity()) {
                formulaire.reportValidity();
                return;
            }

            const nom = document.querySelector("#nom").value;
            const telephone = document.querySelector("#telephone").value;
            const prestation = document.querySelector("#prestation").value;
            const date = document.querySelector("#date").value;
            const heure = document.querySelector("#heure").value;
            const message = document.querySelector("#message").value;

            const texte = `Bonjour Glow Nails and Beauty !

Je souhaite prendre un rendez-vous.

Nom : ${nom}
Téléphone : ${telephone}
Prestation : ${prestation}
Date : ${date}
Heure : ${heure}
Message : ${message}`;

            const lien = "https://wa.me/" + numeroWhatsApp
                + "?text=" + encodeURIComponent(texte);

            window.open(lien, "_blank");
        });
    }
}

/* 2. AGRANDISSEMENT DES PHOTOS */

const visionneuse = document.querySelector("#visionneuse");
const imageAgrandie = document.querySelector("#image-agrandie");
const boutonFermer = document.querySelector("#fermer-image");

if (visionneuse && imageAgrandie && boutonFermer) {

    document.querySelectorAll(".galerie-image img").forEach(function(image) {

        image.addEventListener("click", function() {
            imageAgrandie.src = image.src;
            imageAgrandie.alt = image.alt;
            visionneuse.classList.add("active");
        });

    });

    boutonFermer.addEventListener("click", function() {
        visionneuse.classList.remove("active");
    });

    visionneuse.addEventListener("click", function(e) {
        if (e.target === visionneuse) {
            visionneuse.classList.remove("active");
        }
    });

    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape") {
            visionneuse.classList.remove("active");
        }
    });
}

/* 3. APPARITION PROGRESSIVE AU DEFILEMENT */

const elementsAAnimer = document.querySelectorAll(
    "section, .service, .galerie-intro, .contact-intro"
);

elementsAAnimer.forEach(function(element) {
    element.classList.add("apparition");
});

if ("IntersectionObserver" in window) {

    const observateur = new IntersectionObserver(function(entrees) {

        entrees.forEach(function(entree) {

            if (entree.isIntersecting) {
                entree.target.classList.add("visible");
                observateur.unobserve(entree.target);
            }

        });

    }, {
        threshold: 0.12
    });

    elementsAAnimer.forEach(function(element) {
        observateur.observe(element);
    });

} else {

    elementsAAnimer.forEach(function(element) {
        element.classList.add("visible");
    });

}
