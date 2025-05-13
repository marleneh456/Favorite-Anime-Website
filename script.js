// Search for anime cards by title (case-insensitive)
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const cards = document.querySelectorAll(".card");

  searchInput.addEventListener("keyup", function () {
    const filter = searchInput.value.toLowerCase();

    cards.forEach(card => {
      const title = card.querySelector(".anime-title").textContent.toLowerCase();
      card.style.display = title.includes(filter) ? "block" : "none";
    });
  });
});
