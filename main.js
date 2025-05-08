import en from "./i18n/en.js";
import de from "./i18n/de.js";

// Set up resources
const resources = {
  en,
  de
};

// Initialize i18next
i18next.init({
  lng: "en",
  debug: true,
  resources,
}).then(() => {
  translateAll();
});

// Language switcher logic
const switcher = document.querySelector(".language-switcher");

if (switcher) {
  switcher.addEventListener("input", (e) => {
    const lang = e.target.value;
    console.log("Switching to", lang);

    i18next.changeLanguage(lang).then(() => {
      translateAll();
    });
  });
}

// Function to update all translatable text
function translateAll() {
  const translationTargets = document.querySelectorAll("[data-t]");
  
  translationTargets.forEach((el) => {
    const key = el.getAttribute("data-t");
    if (key) {
      el.textContent = i18next.t(key);
    }
  });
}

  
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("search-modal");
    const openBtn = document.querySelector(".open-search");
    const closeBtn = document.querySelector(".close");
  
    openBtn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "block";
    });
  
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });