// Modifier le chemin du fetch pour être relatif à la racine du projet
fetch("https://Maliniesta.github.io/MADRILKA/JSON/snack.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    const container = document.querySelector(".snack-container");
    if (!container) {
      console.error("Container non trouvé");
      return;
    }

    data.snack.forEach((snack) => {
      const card = document.createElement("div");
      card.classList.add("snack-card");
      card.innerHTML = `
        <img src="${snack.image}" alt="${snack.titre}">
        <h3>${snack.titre}</h3>
        <div class="details">
          <p class="price">Prix : ${snack.prix}</p>
          <p class="description">${snack.description}</p>
        </div>
      `;
      container.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Erreur lors du chargement des données :", error);
  });

// ...existing code...

const allergeneModal = document.getElementById("modal-allergene");
const allergeneBtn = document.getElementById("btn-allergene");
const closeModal = allergeneModal.querySelector(".close");

allergeneBtn.addEventListener("click", () => {
  allergeneModal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  allergeneModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === allergeneModal) allergeneModal.style.display = "none";
});
