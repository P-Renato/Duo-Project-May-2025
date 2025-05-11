//   document.addEventListener("DOMContentLoaded", function () {
//     const modal = document.getElementById("search-modal");
//     const openBtn = document.querySelector(".open-search");
//     const closeBtn = document.querySelector(".close");
  
//     openBtn.addEventListener("click", (e) => {
//       e.preventDefault();
//       modal.style.display = "block";
//     });
  
//     closeBtn.addEventListener("click", () => {
//       modal.style.display = "none";
//     });
  
//     window.addEventListener("click", (e) => {
//       if (e.target === modal) {
//         modal.style.display = "none";
//       }
//     });
//   });

function translateAll() {
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    const translation = i18next.t(key);

    if (!translation || translation === key) {
      console.warn(`Missing translation for key: ${key}`);
    }

    el.innerHTML = translation;
  });
}



const fetchTranslations = async () => {
  const enActivitiesRes = await fetch('./locales/en/activities.json');
  const enNavRes = await fetch('./locales/en/nav.json');
  const deActivitiesRes = await fetch('./locales/de/activities.json');
  const deNavRes = await fetch('./locales/de/nav.json');

  if (!enActivitiesRes.ok || !enNavRes.ok || !deActivitiesRes.ok || !deNavRes.ok) {
    throw new Error("Failed to fetch translation files.");
  }

  const activitiesEn = await enActivitiesRes.json();
  const navEn = await enNavRes.json();
  const activitiesDe = await deActivitiesRes.json();
  const navDe = await deNavRes.json();

  console.log("EN nav:", navEn);
  console.log("EN activities:", activitiesEn);
  console.log("DE nav:", navDe);
  console.log("DE activities:", activitiesDe);

  const resources = {
    en: {
      translation: {
        ...activitiesEn,
        ...navEn
      }
    },
    de: {
      translation: {
        ...activitiesDe,
        ...navDe
      }
    }
  };

  await i18next.init({
    lng: localStorage.getItem('selectedLanguage') || 'en',
    fallbackLng: 'en',
    debug: true,
    resources
  });
  translateAll();
};

fetchTranslations();



// 1. Normalize activity keys (optional, if you use shorthand keys in HTML)
document.querySelectorAll('[data-t^="activities."]').forEach(el => {
  const key = el.getAttribute('data-t');
  if (!key.endsWith('.name')) {
    el.setAttribute('data-t', key + '.name');
  }
});

function changeLanguage(lng) {
  i18next.changeLanguage(lng).then(() => {
    localStorage.setItem('selectedLanguage', lng);
    translateAll(); // Now this will work
  });
}




// 3. Language switcher logic
const switcher = document.querySelector(".language-switcher");

if (switcher) {
  const savedLang = localStorage.getItem('selectedLanguage');
  if (savedLang) {
    switcher.value = savedLang;
  }

  switcher.addEventListener("input", (e) => {
    const lang = e.target.value;
    localStorage.setItem('selectedLanguage', lang);
    i18next.changeLanguage(lang).then(() => {
      translateAll();
    });
  });



console.log("i18next language:", i18next.language);
console.log("Translation test:", i18next.t("activities.hiking.name"));


// 5. Optional: Modal open/close handlers
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("search-modal");
  const openBtn = document.querySelector(".open-search");
  const closeBtn = document.querySelector(".close");

  openBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "block";
  });

  closeBtn?.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
}
