// Sélectionner toutes les colonnes
const columns = document.querySelectorAll(".column");

columns.forEach((column) => {
    const audioId = column.getAttribute("data-audio");
    const audioElement = document.getElementById(audioId);

    // Lecture au survol
    column.addEventListener("mouseenter", function () {
        if (audioElement.paused) {
            audioElement.play();
        }
    });

    // Pause quand on quitte la colonne
    column.addEventListener("mouseleave", function () {
        if (!audioElement.paused) {
            audioElement.pause();
            audioElement.currentTime = 0; // Réinitialiser à 0 pour redémarrer depuis le début
        }
    });
});