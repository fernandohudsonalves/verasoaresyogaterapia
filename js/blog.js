/* Filtro de categorias e "carregar mais" da página de Blog */
document.addEventListener("DOMContentLoaded", () => {
  const pills = document.querySelectorAll(".category-pills button");
  const cards = document.querySelectorAll(".blog-grid .blog-card");
  if (pills.length) {
    pills.forEach(btn => {
      btn.addEventListener("click", () => {
        pills.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.dataset.filter;
        cards.forEach(card => {
          const show = filter === "todos" || card.dataset.cat === filter;
          card.style.display = show ? "" : "none";
        });
      });
    });
  }

  const loadMoreBtn = document.getElementById("loadMoreBtn");
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      loadMoreBtn.textContent = "Você já viu todos os artigos publicados";
      loadMoreBtn.disabled = true;
      loadMoreBtn.style.opacity = "0.6";
      loadMoreBtn.style.cursor = "default";
    });
  }
});
