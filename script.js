
// Récupérer le formulaire
const formulaire = document.querySelector(".reservation");

// Récupérer le bouton
const bouton = formulaire.querySelector("button");

// Numéro WhatsApp de l'entreprise
const numeroWhatsApp = "32499079045";

// Quand la cliente clique sur le bouton
bouton.addEventListener("click", function () {

    // Vérifier que les champs obligatoires sont remplis
    if (!formulaire.checkValidity()) {
        formulaire.reportValidity();
        return;
    }

    // Récupérer les informations
    const nom = document.querySelector("#nom").value;
    const telephone = document.querySelector("#telephone").value;
    const prestation = document.querySelector("#prestation").value;
    const date = document.querySelector("#date").value;
    const heure = document.querySelector("#heure").value;
    const message = document.querySelector("#message").value;

    // Préparer le message WhatsApp
    const texte = `Bonjour Glow Nails and Beauty !

Je souhaite prendre un rendez-vous.

Nom : ${nom}
Téléphone : ${telephone}
Prestation : ${prestation}
Date : ${date}
Heure : ${heure}
Message : ${message}`;

    // Créer le lien WhatsApp
    const lien = "https://wa.me/" + numeroWhatsApp
        + "?text=" + encodeURIComponent(texte);

    // Ouvrir WhatsApp
    window.open(lien, "_blank");
});
