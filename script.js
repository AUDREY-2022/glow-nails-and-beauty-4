
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

/* ==========================================

/* ==========================================

/* ==========================================
   4. TITRE : ECRITURE LETTRE PAR LETTRE
========================================== */

const accueil = document.querySelector("#accueil");

if (accueil) {
    const titre = accueil.querySelector("h2");

    if (titre) {
        const lignes = [
            "Révélez votre beauté,",
            "une touche d'élégance à la fois."
        ];

        titre.textContent = "";
        titre.setAttribute(
            "aria-label",
            "Révélez votre beauté, une touche d'élégance à la fois."
        );

        let delai = 0.4;

        lignes.forEach(function(texte, index) {
            const ligne = document.createElement("span");
            ligne.className = "titre-ligne-accueil";
            ligne.classList.add(
                index === 0 ? "titre-premiere-ligne" : "titre-deuxieme-ligne"
            );

            ligne.setAttribute("aria-hidden", "true");

            texte.split(" ").forEach(function(mot, numeroMot) {
                if (numeroMot > 0) {
                    ligne.appendChild(document.createTextNode(" "));
                }

                const motComplet = document.createElement("span");
                motComplet.className = "mot-accueil";

                Array.from(mot).forEach(function(caractere) {
                    const lettre = document.createElement("span");
                    lettre.className = "lettre-accueil";
                    lettre.textContent = caractere;
                    lettre.style.animationDelay = delai + "s";

                    motComplet.appendChild(lettre);
                    delai += 0.055;
                });

                ligne.appendChild(motComplet);
            });

            titre.appendChild(ligne);
            delai += 0.5;
        });
    }

    const description = accueil.querySelector(".accueil-description");
    const actions = accueil.querySelector(".accueil-actions");
    const signature = accueil.querySelector(".accueil-signature");
    const decoration = accueil.querySelector(".accueil-decoration");

    [
        [description, 4.5],
        [actions, 5.2],
        [signature, 5.8],
        [decoration, 1.2]
    ].forEach(function(elementEtDelai) {
        const element = elementEtDelai[0];

        if (element) {
            element.classList.add("accueil-entree-progressive");
            element.style.animationDelay = elementEtDelai[1] + "s";
        }
    });
}

