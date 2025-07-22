document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const yearFilter = document.getElementById("yearFilter");
  const cards = document.querySelectorAll(".card");

  function filterCards() {
    const searchValue = searchInput.value.toLowerCase();
    const selectedYear = yearFilter.value;

    cards.forEach(card => {
      const title = card.querySelector(".anime-title").textContent.toLowerCase();
      const year = card.getAttribute("data-year");

      const matchesTitle = title.includes(searchValue);
      const matchesYear = !selectedYear || year === selectedYear;

      card.style.display = (matchesTitle && matchesYear) ? "block" : "none";
    });
  }

  searchInput.addEventListener("keyup", filterCards);
  yearFilter.addEventListener("change", filterCards);
});
