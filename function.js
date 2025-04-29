// Toggle dark mode
document.getElementById("toggleMode").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
  
  // Search functionality
  document.getElementById("searchInput").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const cards = document.querySelectorAll(".card");
  
    cards.forEach(card => {
      const name = card.querySelector("h2").textContent.toLowerCase();
      card.style.display = name.includes(query) ? "block" : "none";
    });
  });
  