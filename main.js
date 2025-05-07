const database = [
    
]














const modal = document.getElementById("search-modal");
  const openBtn = document.querySelector(".open-search");
  const closeBtn = document.querySelector(".close");

  openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

