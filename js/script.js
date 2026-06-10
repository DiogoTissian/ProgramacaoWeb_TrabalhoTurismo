document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.innerHTML = `
        <span id="closeLightbox">&times;</span>
        <button class="lightbox-nav" id="prev">&#10094;</button>
        <img id="lightboxImg" src="" alt="Imagem">
        <button class="lightbox-nav" id="next">&#10095;</button>
    `;
    document.body.appendChild(lightbox);

    const images = Array.from(document.querySelectorAll(".conteudo-galeria img"));
    const lightboxImg = document.getElementById("lightboxImg");
    let currentIndex = 0;

    images.forEach((img, index) => {
        img.addEventListener("click", () => {
            currentIndex = index;
            lightboxImg.src = img.src;
            lightbox.style.display = "flex";
        });
    });

    document.getElementById("prev").addEventListener("click", (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentIndex].src;
    });

    document.getElementById("next").addEventListener("click", (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImg.src = images[currentIndex].src;
    });

    document.getElementById("closeLightbox").addEventListener("click", () => lightbox.style.display = "none");
    lightbox.addEventListener("click", (e) => { if (e.target === lightbox) lightbox.style.display = "none"; });
});