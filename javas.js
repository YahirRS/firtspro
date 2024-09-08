document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search");
    const galleryContainers = document.querySelectorAll(".gallery-container");

    searchInput.addEventListener("input", function() {
        const query = searchInput.value.toLowerCase();

        galleryContainers.forEach(container => {
            const images = container.querySelectorAll("img");

            images.forEach(img => {
                const altText = img.getAttribute("alt").toLowerCase();
                if (altText.includes(query)) {
                    img.parentElement.style.display = ""; // Muestra la imagen
                } else {
                    img.parentElement.style.display = "none"; // Oculta la imagen
                }
            });
        });
    });
});
