fetch("../JSON/snack.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.querySelector(".snack-container");

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
  });

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
